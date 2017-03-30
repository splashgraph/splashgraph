import React from 'react';
import {Link} from 'react-router';
import findIndex from 'lodash/findIndex';


const paths = [{
  path: '/create/build',
  label: 'Build'
}, {
  path: '/create/customize',
  label: 'Customize'
}, {
  path: '/create/publish',
  label: 'Publish'
}];

export default class CreateView extends React.Component {
  render() {
    const progressSections = paths.map((path, index) => {
      const isDone = index <= findIndex(paths, {path: this.props.location.pathname});
      return (
        <Link key={index} to={path.path} className={`progress__section ${isDone ? '' : 'progress__section--undone'}`}>
          <div className="progress__dot">{index + 1}</div>
          <div className="progress__title">{path.label}</div>
        </Link>
      );
    });
    return (
      <div>
        <div className="section section--sm u--bg-dark">
          <div className="progress">
            {progressSections}
          </div>
        </div>
        <div className="container">
          {this.props.children}
        </div>
      </div>
    )
  }
}
