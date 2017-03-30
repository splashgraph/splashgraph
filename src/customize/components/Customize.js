import React from 'react';
import {max} from 'd3';

import story from '../../story';
import graphs from '../../graphs';
import InputCheckBox from './InputCheckbox';
import InputNumber from './InputNumber';
import InputColors from './InputColors';
import InputList from './InputList';

const {Story} = story.components;

export default class Customize extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultOptions: {},
      optionTypes: []
    };
  }

  componentDidMount() {
    const {optionTypes, defaultOptions} = graphs.graphs[this.props.story.templateName];
    this.setState({
      optionTypes,
      defaultOptions
    });
  }

  render() {
    const options = Object.assign({}, this.state.defaultOptions, this.props.story.options);
    const optionInputs = this.state.optionTypes.map((option, index) => {
      let input;
      switch (option.type) {
        case 'number':
          input = (
            <InputNumber
              option={option}
              value={options[option.name]}
              setOption={this.props.setOption}
            />
          );
          break;
        case 'checkbox':
          input = (
            <InputCheckBox
              option={option}
              value={options[option.name]}
              setOption={this.props.setOption}
            />
          );
          break;
        case 'colors': {
          input = (
            <InputColors
              option={option}
              value={options[option.name]}
              storyPoints={this.props.story.storyPoints}
              dataKey={this.props.story.options.dataKey}
              setOption={this.props.setOption}
            />
          );
          break;
        }
        case 'list':
          input = (
            <InputList
              option={option}
              value={options[option.name]}
              setOption={this.props.setOption}
            />
          );
          break;
      }
      return (
        <div key={index}>
          {input}
        </div>
      );
    });
    return (
      <div className="container">
        <h2 classsName="form-group__label">2. Customize</h2>
        <div className="row">
          <div className="col col--3">
            {optionInputs}
          </div>
          <div className="col col--7 col--offset-2">
            <Story story={this.props.story}/>
          </div>
        </div>
      </div>
    );
  }
}
