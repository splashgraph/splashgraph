import React from 'react';
import uniqBy from 'lodash/uniqBy';

export default class InputList extends React.Component {
  constructor(props) {
    super(props);
    this.addItem = this.addItem.bind(this);
  }

  setItem(index, value) {
    const newItem = Object.assign({}, this.props.value[index], value);
    const newList = Object.assign([], this.props.value, {
      [index]: newItem
    });
    this.props.setOption(this.props.option.name, newList);
  }

  addItem() {
    const newList = this.props.value.concat([{label: '', field: ''}]);
    this.props.setOption(this.props.option.name, newList);
  }

  render() {
    const items = this.props.value.map((item, index) => {
      const setField = event => this.setItem(index, {field: event.target.value});
      const setLabel = event => this.setItem(index, {label: event.target.value});
      return (
        <li key={index}>
          <input type="text" value={item.label} onChange={setLabel}/><input type="text" value={item.field} onChange={setField}/>
        </li>
      );
    });
    return (
      <div>
        <ul>
          {items}
        </ul>
        <button onClick={this.addItem}>Add</button>
      </div>
    );
  }
}