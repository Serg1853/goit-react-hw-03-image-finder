import React, { Component } from 'react'
import { StyledModal } from './Styled'

export default class Modal extends Component {
  componentDidMount() {
      window.addEventListener('keydown', this.handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
  componentWillUnmount() {
      window.removeEventListener('keydown', this.handleKeyDown);
      document.body.style.overflow = 'auto';
  }

  handleKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.closeModal();
    }
  };
  handleOveryaClick = event => {
    if (event.target === event.currentTarget) {
      this.props.closeModal();
    }
  };
  render() {
    return (
      <StyledModal onClick={this.handleOveryaClick}>
        <div className="modal">
          <img src="" alt="" />
          <h2>Modal window</h2>
        </div>
      </StyledModal>
    );
  }
}
