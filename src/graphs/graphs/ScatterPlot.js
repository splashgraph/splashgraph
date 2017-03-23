import * as d3 from 'd3';
import mapValues from 'lodash/mapValues';

const DIMENSION_TYPES = [{
  field: 'x',
  label: 'X',
  type: 'number'
}, {
  field: 'y',
  label: 'Y',
  type: 'number'
}, {
  field: 'r',
  label: 'Radius',
  type: 'number'
}, {
  field: 'label',
  label: 'Label',
  optional: true
}, {
  field: 'color',
  label: 'Color',
  optional: true
}];

const OPTION_TYPES = [{
  name: 'colors',
  label: 'colors',
  type: 'colors',
}, {
  name: 'transitionDuration',
  label: 'Transition duration',
  type: 'number'
}, {
  name: 'origin',
  label: 'Set origin (0,0)',
  type: 'checkbox'
}];

const DEFAULT_OPTIONS = {
  colors: ["#ceb992", "#73937e", "#585563", "#5b2e48", "#471323", "#6a0136", "#bfab25", "#b81365", "#026c7c", "#055864"],
  transitionDuration: 1000,
  origin: false
};

const hasDimensions = (dimensions) => {
  return DIMENSION_TYPES.every(dimension => {
    return dimensions[dimension.field] || dimension.optional;
  });
};

const mapData = (data, dimensions, dataKey) => {
  return data.map(d => {
    const newD = mapValues(dimensions, value => {
      return d[value];
    });
    newD.id = d[dataKey];
    return newD;
  });
};

class ScatterPlot {
  constructor(svg) {
    this.width = svg.parentNode.clientWidth;
    this.height = 400;
    this.margin = 30;
    this.svg = d3.select(svg)
      .attr('width', this.width)
      .attr('height', this.height);
    this.g = this.svg.append('g');
    this.xAxis = this.svg.append('g')
      .attr('class', 'xAxis')
      .attr('transform', `translate(0, ${this.height - this.margin})`);
    this.yAxis = this.svg.append('g')
      .attr('class', 'yAxis')
      .attr('transform', `translate(${this.margin}, 0)`);
  }

  draw(data, dimensions, options) {
    data = mapData(data, dimensions, options.dataKey);
    options = Object.assign({}, ScatterPlot.defaultOptions, options);

    if (hasDimensions(dimensions)) {
      const getX = d => d.x;
      const getY = d => d.y;
      const getR = d => d.r;
      const getLabel = d => d.label;
      const getColor = d => d.color;

      const xMin = options.origin ? 0 : d3.min(data, getX);
      const xMax = d3.max(data, getX);

      const xScale = d3.scaleLinear()
        .domain([xMin, xMax])
        .range([this.margin, this.width - this.margin]);

      const yMin = options.origin ? 0 : d3.min(data, getY);
      const yMax = d3.max(data, getY);

      const yScale = d3.scaleLinear()
        .domain([yMin, yMax])
        .range([this.height - this.margin, this.margin]);

      const rMin = d3.min(data, getR);
      const rMax = d3.max(data, getR);

      const rScale = d3.scaleLinear()
        .domain([rMin, rMax])
        .range([10, 20]);

      const colorScale = d3.scaleOrdinal()
        .range(options.colors);

      this.xAxis.transition()
        .duration(options.transitionDuration)
        .call(d3.axisBottom(xScale));

      this.yAxis.transition()
        .duration(options.transitionDuration)
        .call(d3.axisLeft(yScale));

      const circles = this.g.selectAll('.circle')
        .data(data, d => {
          return d.id;
        });

      const exit = circles.exit();

      exit.select('circle')
        .transition()
        .duration(options.transitionDuration)
        .attr('r', 0);

      if (dimensions.label) {
        exit.select('text')
          .transition()
          .duration(options.transitionDuration)
          .attr('fill-opacity', 0);
      }

      exit.transition()
        .duration(options.transitionDuration)
        .remove();

      const enter = circles.enter()
        .append('g')
        .attr('class', 'circle')
        .attr('transform', d => {
          const x = xScale(getX(d));
          const y = yScale(getY(d));
          return `translate(${x}, ${y})`
        });
      enter.append('circle')
        .attr('r', 0);

      enter.merge(circles)
        .attr('fill', d => {
          return dimensions.color ?
            colorScale(getColor(d)) :
            options.colors[0];
        })
        .transition()
        .duration(options.transitionDuration)
        .attr('transform', d => {
          const x = xScale(getX(d));
          const y = yScale(getY(d));
          return `translate(${x}, ${y})`
        });

      enter.merge(circles)
        .select('circle')
        .transition()
        .duration(options.transitionDuration)
        .attr('r', d => {
          return rScale(getR(d));
        });

      if (dimensions.label) {
        enter.append('text')
          .attr('font-size', 10)
          .style('fill', '#000')
          .text(d => getLabel(d));
      }
    }
  }
}

ScatterPlot.dimensionTypes = DIMENSION_TYPES;
ScatterPlot.optionTypes = OPTION_TYPES;
ScatterPlot.defaultOptions = DEFAULT_OPTIONS;

export default ScatterPlot;

