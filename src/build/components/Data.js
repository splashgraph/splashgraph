import React from 'react';
import * as d3 from 'd3';
import map from 'lodash/map';
import forEach from 'lodash/forEach';

export default class Data extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.handleFileChange = this.handleFileChange.bind(this);
  }

  handleFileChange(event) {
    const file = event.target.files[0];
    this.setState({
      fileName: file.name
    });
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
        {this.props.data.length > 0 &&
          <div>
            <div className="file-input">
              <strong>{this.state.fileName}</strong>
              &nbsp;
              &nbsp;
              <input type="file" className="file-input__input" onChange={this.handleFileChange} id="file"/>
              <label className="file-input__label button button--primary button--sm" htmlFor="file">Choose a file...</label>
            </div>
            <br/>
            <div className="scrollable">
              <table className="table">
                <thead>
                  <tr>
                    {map(this.props.columns, (header, index) =>
                      <th key={index}>{header}</th>
                    )}
                  </tr>
                </thead>
                <tbody>
                {map(this.props.data, (row, index) =>
                  <tr key={index}>
                    {map(row, (column, index) =>
                      <td key={index}>{column}</td>
                    )}
                  </tr>
                )}
                </tbody>
              </table>
            </div>
          </div>
        }
      </div>
    );
  }
}
