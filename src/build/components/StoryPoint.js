import React from 'react';

import Data from './Data';
import Dimensions from './Dimensions';
import Text from './Text';

const tabNames = {
  data: 'Data',
  dimensions: 'Dimensions',
  text: 'Text'
};

export default class StoryPoint extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTab: tabNames.data,
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
      case tabNames.data:
        tab = (
          <Data
            data={data}
            columns={columns}
            setData={this.props.setData}
          />
        );
        break;
      case tabNames.dimensions:
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
      case tabNames.text:
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
    const tabs = [tabNames.data, tabNames.dimensions, tabNames.text].map((tab, index) => {
      return (
        <div
          className={`tab__item ${this.state.currentTab === tab ? 'tab__item--active' : ''}`}
          onClick={() => this.goToTab(tab)}>
          {tab}
        </div>
      );
    });
    return (
      <div className="tab">
        <div className="tab__nav">
          {tabs}
        </div>
        <div className="tab__content">
          {tab}
        </div>
      </div>
    );
  }
}
