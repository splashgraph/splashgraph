import React from 'react';
import map from 'lodash/map';
import {browserHistory} from 'react-router';

import graphs from '../../graphs';

export default class Templates extends React.Component {
  pickTemplate(graph) {
    this.props.setupStory(graph.info.name);
    browserHistory.push('/create/build');
  }

  render() {
    const templates = map(graphs.graphs, graph => {
      return (
        <div className="col col--4" key={graph.info.name}>
          <h4>{graph.info.name}</h4>
          <p>{graph.info.description}</p>
          <button onClick={() => this.pickTemplate(graph)}>Pick Template</button>
        </div>
      );
    });
    return (
      <div className="container">
        <h1>Pick a template</h1>
        <div className="row">
          {templates}
        </div>
      </div>
    )
  }
}