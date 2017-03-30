import React from 'react';
import {Link} from 'react-router';

export default class CreateView extends React.Component {
  render() {
    return (
      <div>
        <div className="progress">
          <Link to="/create/build" className="progress__section">
            <div className="progress__dot">1</div>
            <div className="progress__title">Build</div>
          </Link>
          <Link to="/create/customize" className="progress__section">
            <div className="progress__dot">2</div>
            <div className="progress__title">Customize</div>
          </Link>
          <Link to="/create/publish" className="progress__section">
            <div className="progress__dot">3</div>
            <div className="progress__title">Publish</div>
          </Link>
        </div>
        <div>
          {this.props.children}
        </div>
      </div>
    )
  }
}
