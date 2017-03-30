import React from 'react';

export default class Completion extends React.Component {
  getLink() {
    const {protocol, hostname, port} = window.location;
    return `${protocol}//${hostname}${port ? ':' + port : ''}/stories/${this.props.story._id}`;
  }

  render() {
    return (
      <div>
        <div className="banner">
          <h1 className="banner__title">High five!</h1>
          <div className="banner__lead">
            Your freshly baked story has arrived. You can visit it using the link below.
            <br/>
            <br/>
            <div className="border border--dashed">
              <a href={this.getLink()}>{this.getLink()}</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}