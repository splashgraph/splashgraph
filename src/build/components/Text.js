import React from 'react';

export default class Text extends React.Component {
  render() {
    return (
      <div>
        <h5>Title</h5>
        <input className="form-group__input" type="text" value={this.props.title} onChange={event => this.props.setTitle(event.target.value)}/>
        <h5>Description</h5>
        <textarea className="form-group__input form-group__input--textarea" value={this.props.description} onChange={event => this.props.setDescription(event.target.value)}/>
      </div>
    );
  }
}
