import React from 'react';

import StoryPoint from './StoryPoint';
import graphs from '../../graphs';
const {Graph} = graphs.components;

export default class Builder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0
    };

    this.setDimension = this.setDimension.bind(this);
    this.setData = this.setData.bind(this);
    this.add = this.add.bind(this);
    this.generateJSON = this.generateJSON.bind(this);
  }

  setDimension(column, dimension) {
    this.props.setDimension(this.state.currentIndex, dimension.field, column);
  }

  setData(data, columns) {
    this.props.setData(this.state.currentIndex, data, columns);
    if (!this.props.story.options.dataKey) {
      this.props.setDataKey(prompt('Input data key:'));
    }
  }

  setStoryPointDesc(description) {
    this.props.setStoryPointDesc(this.state.currentIndex, description);
  }

  add() {
    const newStoryPoint = Object.assign({}, this.props.story.storyPoints[this.props.story.storyPoints.length - 1], {
      title: '',
      description: ''
    });
    this.props.addStoryPoint(newStoryPoint);
    this.goTo(this.props.story.storyPoints.length);
  }

  remove(removeIndex) {
    this.props.removeStoryPoint(removeIndex);
    if (this.state.currentIndex > 0) {
      this.goTo(this.state.currentIndex - 1);
    }
  }

  generateJSON() {
    console.log(JSON.stringify(this.state.story));
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
      const text = index === this.state.currentIndex ? <strong>{index}</strong> : index;
      return (
        <li key={index}>
          <a onClick={() => this.goTo(index)}>{text}</a>
          <button onClick={() => this.remove(index)}>Remove</button>
        </li>
      );
    });

    return (
      <div className="container">
        <h2>1. Build</h2>
        <div className="row">
          <div className="col col--5">
            <StoryPoint
              storyPoint={this.getCurrent()}
              templateName={this.props.story.templateName}
              setDimension={this.setDimension}
              setData={this.setData}
              setTitle={title => this.props.setTitle(this.state.currentIndex, title)}
              setDescription={description => this.props.setDescription(this.state.currentIndex, description)}
            />
          </div>
          <div className="col col--7">
            <Graph
              storyPoint={this.getCurrent()}
              options={this.props.story.options}
              templateName={this.props.story.templateName}
            />
          </div>
        </div>
        <div>
          <ul>
            {storyPoints}
          </ul>
          <button onClick={this.add}>Add</button>
        </div>
      </div>
    )
  }
}
