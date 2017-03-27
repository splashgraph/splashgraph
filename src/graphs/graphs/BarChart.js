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
    this.g = this.svg.append('g');
    this.xAxis = this.svg.append('g')
      .attr('class', 'xAxis')
      .attr('transform', `translate(0, ${this.height - this.margin})`);
    this.yAxis = this.svg.append('g')
      .attr('class', 'yAxis')
      .attr('transform', `translate(${this.margin}, 0)`);
  }

  draw(data, dimensions, options) {
    data = mapData(data, dimensions, BarChart.dimensionTypes, options.dataKey);
    options = Object.assign({}, BarChart.defaultOptions, options);

    if (hasDimensions(dimensions, BarChart.dimensionTypes)) {
      const getX = d => d.x;
      const getY = d => d.y;

      const xScale = d3.scaleBand()
        .domain(data.map(getX))
        .range([this.margin, this.width - this.margin])
        .padding(0.1);

      const yMin = d3.min(data, getY);
      const yMax = d3.max(data, getY);

      const yScale = d3.scaleLinear()
        .domain([yMin, yMax])
        .range([this.height - this.margin, this.margin]);

      const bars = this.g.selectAll('.bar')
        .data(data, d => d.id);

      bars.exit().remove();

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
        .transition()
        .attr('width', xScale.bandwidth())
        .attr('height', d => this.height - yScale(getY(d)));
    }
  }
}

BarChart.info = {
  name: 'BarChart',
  title: 'Bar Chart',
  description: 'Lorem ipsum dolor sit amet consecetur dorem aelit.'
};
BarChart.dimensionTypes = [{
  field: 'x',
  label: 'X',
  type: 'string'
}, {
  field: 'y',
  label: 'Y',
  type: 'number'
}];
BarChart.optionTypes = [{

}];
BarChart.defaultOptions = {

};

export default BarChart;
