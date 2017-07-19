import React from 'react';
import {Link, browserHistory} from 'react-router';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
  }

  handleLogoutClick() {
    this.props.logout();
    browserHistory.push('/login');
  }

  render() {
    return (
      <div>
        <div className="header">
          <div className="header__logo">
            <img src="/images/logo.png"/>
          </div>
          {this.props.isAuthenticated &&
          <div className="header__nav">
            <Link className="header__item button button--border" to="/">
              Create new
            </Link>
            <button onClick={this.handleLogoutClick} className="header__item button">Logout</button>
          </div>
          }
        </div>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}