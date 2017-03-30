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
      <div className="row">
        <div className="col col--sm-5 col--md-4 u--border-right section">
          <div className="form-group">
            <label className="form-group__label">Title:</label>
            <input className="form-group__input" type="text" value={this.props.story.title} onChange={event => this.props.setTitle(event.target.value)}/>
          </div>
          <div className="form-group">
            <label className="form-group__label">Description:</label>
            <textarea className="form-group__input form-group__input--textarea" value={this.props.story.description} onChange={event => this.props.setDescription(event.target.value)}/>
          <br/>
          </div>
          <button className="button button--primary" onClick={this.publish}>Publish</button>
        </div>
        <div className="col col--sm-7 col--md-8 section">
          <Story story={this.props.story}/>
        </div>
      </div>
    );
  }
}
