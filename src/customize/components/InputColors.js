import React from 'react';
import uniqBy from 'lodash/uniqBy';

export default class InputColors extends React.Component {

  setColor(index, value) {
    const newColors = Object.assign([], this.props.value, {[index]: value});
    this.props.setOption(this.props.option.name, newColors);
  }

  render() {
    const colorDimension = this.props.storyPoints[0].dimensions.color;
    const combinedData = uniqBy(this.props.storyPoints.reduce((data, storyPoint) => {
      return data.concat(storyPoint.data);
    }, []), this.props.dataKey);
    const uniqueColors = uniqBy(combinedData, colorDimension);
    const colors = this.props.value.slice(0, uniqueColors.length).map((color, index) => {
      const setColor = event => this.setColor(index, event.target.value);
      return (
        <li className="list__item" key={index}>
          <input className="form-group__input form-group__input--inline" type="text" value={color} onChange={setColor}/>
          <span className="label" style={{backgroundColor: color}}>{uniqueColors[index][colorDimension]}</span>
        </li>
      );
    });
    return (
      <div>
        <label className="form-group__label">{this.props.option.label}</label>
        <ul className="list list--scrollable">
          {colors}
        </ul>
      </div>
    );
  }
}
