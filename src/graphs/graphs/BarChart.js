import * as d3 from 'd3';

import {mapData, hasDimensions} from './helpers';

class BarChart {
  constructor(svg) {
    this.width = svg.parentNode.clientWidth;
    this.height = 400;
    this.margin = 30;
    this.svg = d3.select(svg)
      .attr('width', this.width)
      .attr('height', this.height);
    this.xAxis = this.svg.append('g')
      .attr('class', 'xAxis')
      .attr('transform', `translate(0, ${this.height - this.margin})`);
    this.yAxis = this.svg.append('g')
      .attr('class', 'yAxis')
      .attr('transform', `translate(${this.margin}, 0)`);
    this.g = this.svg.append('g');

    this.colorScale = d3.scaleOrdinal(d3.schemeCategory20);
  }

  draw(data, dimensions, options) {
    data = mapData(data, dimensions, BarChart.dimensionTypes, options.dataKey);
    options = Object.assign({}, BarChart.defaultOptions, options);

    if (hasDimensions(dimensions, BarChart.dimensionTypes)) {
      const getX = d => d.x;
      const getY = d => d.y;
      const getColor = d => d.color;

      const xScale = d3.scaleBand()
        .domain(data.map(getX))
        .range([this.margin, this.width - this.margin])
        .padding(0.1);

      const yMin = d3.min(data, getY);
      const yMax = d3.max(data, getY);

      const yScale = d3.scaleLinear()
        .domain([yMin, yMax])
        .range([this.height - this.margin, this.margin]);

      if (options.xAxis) {
        const axis = d3.axisBottom(xScale);
        this.xAxis.transition()
          .duration(options.transitionDuration)
          .call(axis);
      } else {
        this.xAxis.selectAll('*').remove();
      }

      if (options.yAxis) {
        const axis = d3.axisLeft(yScale)
          .tickSizeInner(options.grid && (-this.width + (this.margin * 2)));
        this.yAxis.transition()
          .duration(options.transitionDuration)
          .call(axis);
      } else {
        this.yAxis.selectAll('*').remove();
      }

      const bars = this.g.selectAll('.bar')
        .data(data, d => d.id);

      const exit = bars.exit();

      exit.select('rect')
        .transition()
        .attr('width', 0);
      exit.transition()
        .remove();

      const enter = bars.enter()
        .append('g')
        .attr('class', 'bar')
        .attr('transform', d => {
          const x = xScale(getX(d));
          return `translate(${x}, ${this.height - this.margin})`;
        });

      enter.append('rect');

      const update = enter.merge(bars);

      update.transition()
        .attr('transform', d => {
          const x = xScale(getX(d));
          const y = yScale(getY(d));
          return `translate(${x}, ${y})`;
        });

      update.select('rect')
        .style('fill', d => {
          return dimensions.color ?
            this.colorScale(getColor(d)) :
            options.colors[0];
        })
        .style('fill-opacity', 0.75)
        .transition()
        .attr('width', xScale.bandwidth())
        .attr('height', d => this.height - this.margin - yScale(getY(d)));
    }
  }
}

BarChart.info = {
  name: 'BarChart',
  title: 'Bar Chart',
  description: ''
};
BarChart.dimensionTypes = [{
  field: 'x',
  label: 'X',
  type: 'string'
}, {
  field: 'y',
  label: 'Y',
  type: 'number'
}, {
  field: 'color',
  label: 'Color',
  type: 'string',
  optional: true
}];
BarChart.optionTypes = [{
  name: 'colors',
  label: 'Colors',
  type: 'colors',
}, {
  name: 'grid',
  label: 'Grid',
  type: 'checkbox'
}, {
  name: 'xAxis',
  label: 'Display X axis',
  type: 'checkbox'
}, {
  name: 'yAxis',
  label: 'Display Y axis',
  type: 'checkbox'
}];
BarChart.defaultOptions = {
  colors: d3.schemeCategory20,
  grid: true,
  xAxis: true,
  yAxis: true
};

export default BarChart;
