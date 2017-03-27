import React from 'react';

import Data from './Data';
import Dimensions from './Dimensions';
import Text from './Text';

export default class StoryPoint extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTab: 'data',
    };
    this.goToTab = this.goToTab.bind(this);
  }

  goToTab(tabName) {
    this.setState({
      currentTab: tabName
    });
  }

  render() {
    const {data, columns, dimensions, title, description} = this.props.storyPoint;
    let tab;
    switch (this.state.currentTab) {
      case 'data':
        tab = (
          <Data
            data={data}
            columns={columns}
            setData={this.props.setData}
          />
        );
        break;
      case 'dimensions':
        tab = (
          <Dimensions
            data={data}
            columns={columns}
            dimensions={dimensions}
            templateName={this.props.templateName}
            setDimension={this.props.setDimension}
          />
        );
        break;
      case 'text':
        tab = (
          <Text
            title={title}
            description={description}
            setTitle={this.props.setTitle}
            setDescription={this.props.setDescription}
          />
        );
        break;
      default:
        break;
    }
    return (
      <div>
        <div className="row row--autofill">
          <div className="col" onClick={() => this.goToTab('data')}>Data</div>
          <div className="col" onClick={() => this.goToTab('dimensions')}>Dimensions</div>
          <div className="col" onClick={() => this.goToTab('text')}>Text</div>
        </div>
        {tab}
      </div>
    );
  }
}
