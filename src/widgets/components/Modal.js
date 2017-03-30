import React from 'react';
import CSSTransitionGroup from 'react-addons-css-transition-group';

export default class Modal extends React.Component {
  render() {
    return (
      <div>
        <CSSTransitionGroup
          transitionName="fade"
          transitionEnterTimeout={300}
          transitionLeaveTimeout={300}
        >
          {this.props.isActive &&
          <div className="modal">
            <div className="modal__backdrop"/>
            <div className="modal__content">
              {this.props.children}
            </div>
          </div>
          }
        </CSSTransitionGroup>
      </div>
    )
  }
}