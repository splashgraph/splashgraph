import React from 'react';

export default class Text extends React.Component {
  render() {
    return (
      <div>
        <div className="form-group">
          <label className="form-group__label">Title:</label>
          <input className="form-group__input" type="text" value={this.props.title} onChange={event => this.props.setTitle(event.target.value)}/>
        </div>
        <div className="form-group">
          <label className="form-group__label">Description:</label>
          <textarea className="form-group__input form-group__input--textarea" value={this.props.description} onChange={event => this.props.setDescription(event.target.value)}/>
        </div>
      </div>
    );
  }
}
