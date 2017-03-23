import React from 'react';

import graphs from '../../graphs';
const {Graph} = graphs.components;

export default class Story extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0
    };
  }

  goTo(index) {
    this.setState({
      currentIndex: index
    });
  }

  getCurrent() {
    return this.props.story.storyPoints[this.state.currentIndex];
  }

  render() {
    const storyPoints = this.props.story.storyPoints.map((storyPoint, index) => {
      return <li key={index} onClick={() => this.goTo(index)}>{index}</li>;
    });
    return (
      <div>
        <Graph
          storyPoint={this.getCurrent()}
          options={this.props.story.options}
          template={this.props.story.template}
        />
        <ul>
          {storyPoints}
        </ul>
      </div>
    );
  }
}
