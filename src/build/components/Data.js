import React from 'react';
import * as d3 from 'd3';
import map from 'lodash/map';
import forEach from 'lodash/forEach';

export default class Data extends React.Component {

  constructor(props) {
    super(props);
    this.handleFileChange = this.handleFileChange.bind(this);
  }

  handleFileChange(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsText(file);
    reader.onload = event => {
      let data = d3.csvParse(event.target.result);
      const columns = data.columns;
      delete data.columns;
      data = data.map(d => {
        const newD = {};
        forEach(d, (value, key) => {
          const number = +value;
          newD[key] = (number || number === 0) ? number : value;
        });
        return newD;
      });
      this.props.setData(data, columns);
    };
  }

  render() {
    return (
      <div>
        {this.props.data.length === 0 &&
        <div className="dropzone">
          <input className="dropzone__button" type="file" onChange={this.handleFileChange}/>
          <div className="dropzone__decoy">
            <div className="dropzone__decoy__text">Drop your files here</div>
            <div className="dropzone__decoy__text dropzone__decoy__text--l">+</div>
            <div className="dropzone__decoy__text">Supported formats: CSV</div>
          </div>
        </div>
        }
        <div className="scrollable">
          <table className="table">
            <thead>
            {map(this.props.columns, (header, index) =>
              <th className="table__head" key={index}>{header}</th>
            )}
            </thead>
            <tbody>
              {map(this.props.data, (row, index) =>
                <tr key={index}>
                  {map(row, (column, index) =>
                    <td className="table__cells" key={index}>{column}</td>
                  )}
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
