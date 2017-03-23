import React from 'react';
import {max} from 'd3';

import story from '../../story';
import graphs from '../../graphs';
import InputCheckBox from './InputCheckbox';
import InputNumber from './InputNumber';
import InputColors from './InputColors';

const {Story} = story.components;
const {optionTypes, defaultOptions} = graphs.graphs.ScatterPlot;

export default class Customize extends React.Component {

  render() {
    const options = Object.assign({}, defaultOptions, this.props.story.options);
    const optionInputs = optionTypes.map((option, index) => {
      let input;
      switch (option.type) {
        case 'number':
          input = <InputNumber
            option={option}
            value={options[option.name]}
            setOption={this.props.setOption}/>;
          break;
        case 'checkbox':
          input = <InputCheckBox
            option={option}
            value={options[option.name]}
            setOption={this.props.setOption}/>;
          break;
        case 'colors': {
          input = <InputColors
            option={option}
            value={options[option.name]}
            storyPoints={this.props.story.storyPoints}
            dataKey={this.props.story.options.dataKey}
            setOption={this.props.setOption}/>;
          break;
        }
      }
      return (
        <div key={index}>
          <h5>{option.label}</h5>
          {input}
        </div>
      );
    });
    return (
      <div className="container">
        <h2>2. Customize</h2>
        <div className="row">
          <div className="col col--5">
            {optionInputs}
          </div>
          <div className="col col--7">
            <Story story={this.props.story}/>
          </div>
        </div>
      </div>
    );
  }
}