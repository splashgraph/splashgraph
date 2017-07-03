import React, {Component} from 'react';
import {browserHistory} from 'react-router';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  componentWillUpdate(nextProps) {
    if (nextProps.isLoaded && !this.props.isLoaded) {
      browserHistory.push('/');
    }
  }

  handleLoginClick() {
    this.props.login(this.state.email, this.state.password);
  }

  handleEmailChange(event) {
    this.setState({
      email: event.target.value
    });
  }

  handlePasswordChange(event) {
    this.setState({
      password: event.target.value
    });
  }

  render() {
    return (
      <div className="container section">
        <div className="row row--center">
          <div className="col col--sm-4">
            <h2>Login</h2>
            <div className="form-group">
              <label className="form-group__label">Email:</label>
              <input
                type="text"
                className="form-group__input"
                onChange={this.handleEmailChange}
                value={this.state.email}
              />
            </div>
            <div className="form-group">
              <label className="form-group__label">Password:</label>
              <input
                type="password"
                className="form-group__input"
                onChange={this.handlePasswordChange}
                value={this.state.password}
              />
            </div>
            <button
              className="button button--primary"
              disabled={this.props.isLoading || !this.state.email || !this.state.password}
              onClick={this.handleLoginClick}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    )
  }
}