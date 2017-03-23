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
        <li key={index}>
          {uniqueColors[index][colorDimension]}<input style={{backgroundColor: color}} type="text" value={color} onChange={setColor}/>
        </li>
      );
    });
    return (
      <div>
        <ul>
          {colors}
        </ul>
      </div>
    );
  }
}