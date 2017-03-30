import * as d3 from 'd3';

import {hasDimensions, mapData} from './helpers';

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

    this.tooltip = d3.select(svg.parentNode)
      .append('div')
      .attr('class', 'tooltip')
      .style('opacity', 0)
      .style('position', 'absolute')
      .style('pointer-events', 'none');

    this.colorScale = d3.scaleOrdinal(d3.schemeCategory20);
  }

  draw(data, dimensions, options) {
    data = mapData(data, dimensions, ScatterPlot.dimensionTypes, options.dataKey);
    options = Object.assign({}, ScatterPlot.defaultOptions, options);
    if (hasDimensions(dimensions, ScatterPlot.dimensionTypes)) {
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

      if (options.xAxis) {
        this.xAxis.transition()
          .duration(options.transitionDuration)
          .call(d3.axisBottom(xScale));
      } else {
        this.xAxis.selectAll('*').remove();
      }

      if (options.yAxis) {
        this.yAxis.transition()
          .duration(options.transitionDuration)
          .call(d3.axisLeft(yScale));
      }

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
        .style('fill', d => {
          return dimensions.color ?
            this.colorScale(getColor(d)) :
            options.colors[0];
        })
        .style('fill-opacity', 0.75)
        .on('mouseover', d => {
          if (options.tooltip && options.tooltip.length > 0) {
            const tooltip = options.tooltip.map(tooltip => {
              return `<span>${tooltip.label}: ${d[tooltip.field]}</span><br/>`;
            });
            this.tooltip.transition()
              .style('opacity', 1);
            this.tooltip.style('left', `${d3.event.pageX}px`)
              .style('top', `${d3.event.pageY}px`)
              .html(`<strong>${d.id}</strong><br/>${tooltip}`);
          }
        })
        .on('mouseleave', () => {
          if (options.tooltip && options.tooltip.length > 0) {
            this.tooltip.transition()
              .style('opacity', 0);
          }
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
    }
  }
}

ScatterPlot.info = {
  name: 'ScatterPlot',
  title: 'Scatter Plot',
  description: 'Lorem ipsum dolor sit amet consecetur dorem aelit.'
};
ScatterPlot.dimensionTypes = [{
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
  field: 'color',
  label: 'Color',
  optional: true
}];
ScatterPlot.optionTypes = [{
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
}, {
  name: 'xAxis',
  label: 'Display X axis',
  type: 'checkbox'
}, {
  name: 'yAxis',
  label: 'Display Y axis',
  type: 'checkbox'
}, {
  name: 'tooltip',
  label: 'Tooltip',
  type: 'list'
}];
ScatterPlot.defaultOptions = {
  colors: d3.schemeCategory20,
  transitionDuration: 1000,
  origin: false,
  xAxis: true,
  yAxis: true,
  tooltip: []
};

export default ScatterPlot;

