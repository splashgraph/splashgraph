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
      return <Story story={this.state.story}/>;
    }
    return <div>Story loading...</div>;
  }
}