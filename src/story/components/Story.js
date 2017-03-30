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
      return (
        <div
          className={`pagination__item ${index === this.state.currentIndex ? 'pagination__item--active' : ''}`}
          key={index} onClick={() => this.goTo(index)}
        >
          {index + 1}
        </div>
      );
    });
    return (
      <div>
        <div className="pagination">
          {storyPoints}
        </div>
        <Graph
          storyPoint={this.getCurrent()}
          options={this.props.story.options}
          templateName={this.props.story.templateName}
        />
      </div>
    );
  }
}
