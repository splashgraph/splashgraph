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
    const templates = map(graphs.graphs, (graph, index) => {
      return (
        <div className="col col--sm-3" key={index}>
          <div className="card">
            <div className="card__header">
              <h3>{graph.info.title}</h3>
            </div>
            <div className="card__footer">
              <button className="button button--primary" onClick={() => this.pickTemplate(graph)}>Pick</button>
            </div>
          </div>
        </div>
      );
    });
    return (
      <div>
        <div className="banner">
          <h1 className="banner__title">Pick a template</h1>
        </div>
        <div className="container">
          <div className="row row--center section">
            {templates}
          </div>
        </div>
      </div>
    );
  }
}