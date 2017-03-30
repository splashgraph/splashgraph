import React from 'react';
import {Link} from 'react-router';

export default class CreateView extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li><Link to="/create/build">1. Build</Link></li>
          <li><Link to="/create/customize">2. Customize</Link></li>
          <li><Link to="/create/publish">3. Publish</Link></li>
        </ul>
        <div className="container">
          {this.props.children}
        </div>
      </div>
    )
  }
}
