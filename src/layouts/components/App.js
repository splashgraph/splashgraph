import React from 'react';
import {Link} from 'react-router';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <div className="header">
          <div className="header__logo">
            <img src="/images/logo.png"/>
          </div>
          <div className="header__nav">
            <Link className="header__item button button--border" to="/">
              Create new
            </Link>
          </div>
        </div>
        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
}