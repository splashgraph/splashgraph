import React from 'react';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <div className="site-header">
          <div className="site-header__logo">TaleGraph</div>
          <div className="site-header__nav">
          </div>
        </div>
        <div className="main">
          {this.props.children}
        </div>
      </div>
    );
  }
}