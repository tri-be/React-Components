import React, { Component } from 'react'
import styled from 'styled-components';

const modalRoot = document.getElementById("modal-root");

render() {
	return ReactDom.createPortal(
		<StyledModal
        id={this.props.id}
        className={`wrapper ${this.props.class}`}
        role="dialog"
        size={this.props.size}
        onTransitionEnd={this.transitionEnd}
        fadeType={this.state.fadeType}
		>
       	<div className="box-dialog">
          <div className="box-header">
            <h4 className="box-title">Title Of Modal</h4>
            <button onClick={this.handleClick} className="close">
              ×
            </button>
          </div>
          <div className="box-content">{this.props.children}</div>
          <div className="box-footer">
            <button onClick={this.handleClick} className="close">
              Close
            </button>
          </div>
        </div>
        <div
          className={`background`}
          onMouseDown={this.handleClick}
          ref={this.background}
        />
        </StyledModal>,
      modalRoot
    );
}