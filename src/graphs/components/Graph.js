import React from 'react';

import graphs from '../graphs';

class Graph extends React.Component {

  componentDidMount() {
    const Template = graphs[this.props.templateName];
    this.graph = new Template(this.svg);
    this.graph.draw(this.props.storyPoint.data, this.props.storyPoint.dimensions, this.props.options);
  }

  componentWillUpdate(nextProps) {
    this.graph.draw(nextProps.storyPoint.data, nextProps.storyPoint.dimensions, nextProps.options);
  }

  render() {
    return (
      <div>
        <svg ref={svg => this.svg = svg}/>
        <div className="row">
          <div className="col col--md-7">
            <h4>{this.props.storyPoint.title}</h4>
            {this.props.storyPoint.description}
          </div>
        </div>
      </div>
    );
  }
}

export default Graph;
