import React from 'react';

import graphs from '../../graphs';
const templates = graphs.graphs;

export default class Dimensions extends React.Component {
  render() {
    const Template = templates[this.props.templateName];
    const columns = this.props.columns.map(column => {
      return <option key={column} value={column}>{column}</option>;
    });
    const dimensions = Template.dimensionTypes.map((dimension, index) => {
      return (
        <div key={index} className="form-group col col--6">
          <label className="form-group__label">
            {dimension.label}<span className="u--text-danger">{!dimension.optional && '*'}</span>:
          </label>
          <select
            className="form-group__input"
            value={this.props.dimensions[dimension.field]}
            onChange={event => this.props.setDimension(event.target.value, dimension)}
          >
            <option value="">None</option>
            {columns}
          </select>
          <div className="form-group__help">
            {dimension.description}
          </div>
        </div>
      );
    });
    return (
      <div className="row">
        {dimensions}
      </div>
    );
  }
}
