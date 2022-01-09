import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, ModalContainet } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };
  handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  };
  render() {
    const { tags, largeImageURL } = this.props.data;

    return createPortal(
      <Overlay onClick={this.handleBackdropClick}>
        <ModalContainet>
          <img src={largeImageURL} alt={tags} />
        </ModalContainet>
      </Overlay>,
      modalRoot,
    );
  }
}
export default Modal;
