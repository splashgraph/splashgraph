import React from 'react';
import {browserHistory} from 'react-router';

import story from '../../story';
const {Story} = story.components;

export default class Publish extends React.Component {
  constructor(props) {
    super(props);

    this.publish = this.publish.bind(this);
  }

  componentWillUpdate(nextProps) {
    if (!nextProps.isLoading && this.props.isLoading) {
      if (nextProps.isLoaded) {
        browserHistory.push('/create/completed');
      }
    }
  }

  publish() {
    this.props.createStory(this.props.story);
  }

  render() {
    return (
      <div>
        <h2>3. Publish</h2>
        <div className="row">
          <div className="col col--5">
            <h5>Title</h5>
            <input type="text" value={this.props.story.title} onChange={event => this.props.setTitle(event.target.value)}/>
            <h5>Description</h5>
            <textarea value={this.props.story.description} onChange={event => this.props.setDescription(event.target.value)}/>
            <br/>
            <button onClick={this.publish}>Publish</button>
          </div>
          <div className="col col--7">
            <Story story={this.props.story}/>
          </div>
        </div>
      </div>
    );
  }
}
