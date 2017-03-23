import React from 'react';

import graphs from '../../graphs';
const {dimensionTypes} = graphs.graphs.ScatterPlot;

export default class Dimensions extends React.Component {
  render() {
    const columns = this.props.columns.map(column => {
      return <option key={column} value={column}>{column}</option>;
    });
    const dimensions = dimensionTypes.map((dimension, index) => {
      return (
        <div key={index}>
          {dimension.label}
          <select value={this.props.dimensions[dimension.field]} onChange={event => this.props.setDimension(event.target.value, dimension)}>
            {columns}
          </select>
        </div>
      )
    });
    return (
      <div>
        {dimensions}
      </div>
    );
  }
}
