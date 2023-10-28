import { ModalStyle, Overlay } from './Modal.styled';
import { Component } from 'react';



export class Modal extends Component {
 

  componentDidMount = () => {
    window.addEventListener('keydown', this.onEscapeCloseModal);
    
  };

  componentWillUnmount = () => {
    window.removeEventListener('keydown', this.onEscapeCloseModal);
  };

  onEscapeCloseModal = event => {
    if (event.code === 'Escape') {
      this.props.onClose();
    }
  };

  onClickOverlay = event => {
    if (event.target === event.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    const {
      selectedPhoto: { largeImageURL, tags },
    } = this.props;

    return (
      <Overlay onClick={this.onClickOverlay}>
        <ModalStyle>
          <img src={largeImageURL} alt={tags} />
        </ModalStyle>
      </Overlay>
      
    );
  }
}
