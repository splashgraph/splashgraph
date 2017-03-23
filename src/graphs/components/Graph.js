import React from 'react';

import graphs from '../graphs';

class Graph extends React.Component {

  componentDidMount() {
    const template = graphs[this.props.template];
    this.graph = new template(this.svg);
    this.graph.draw(this.props.storyPoint.data, this.props.storyPoint.dimensions, this.props.options);
  }

  componentWillUpdate(nextProps) {
    this.graph.draw(nextProps.storyPoint.data, nextProps.storyPoint.dimensions, nextProps.options);
  }

  render() {
    return (
      <div>
        <svg ref={svg => this.svg = svg}/>
      </div>
    );
  }
}

export default Graph;
