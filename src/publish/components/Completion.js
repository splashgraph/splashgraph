import React from 'react';

export default class Completion extends React.Component {
  getLink() {
    const {protocol, hostname, port} = window.location;
    return `${protocol}//${hostname}${port ? ':' + port : ''}/stories/${this.props.story._id}`;
  }

  render() {
    return (
      <div className="container">
        <h1>High five! Your freshly baked story has arrived.</h1>
        You can visit it using the link below:<br/>
        <a href={this.getLink()}>{this.getLink()}</a>
      </div>
    );
  }
}