import React from 'react';

import client from '../../helpers/apiClient';
import Story from './Story';

export default class StoryContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    client.get(`/stories/${this.props.params.storyId}`)
      .then(result => {
        this.setState({
          story: result.data
        });
      });
  }

  render() {
    if (this.state.story) {
      return (
        <div className="container">
          <div className="row">
            <div className="col col--sm-7 col--md-8 section">
              <Story story={this.state.story}/>
            </div>
            <div className="col col--sm-5 col--md-4 u--bg-lighter">
              <h2>{this.state.story.title}</h2>
              <p>{this.state.story.description}</p>
            </div>
          </div>
        </div>
      );
    }
    return <div>Story loading...</div>;
  }
}