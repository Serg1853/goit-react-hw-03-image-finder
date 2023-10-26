import axios from 'axios';
import { Component } from 'react';
import Modal from './Modal/Modal';
import { ContainerApp } from './StyledApp';
import Searchbar from './Searchbar/Searchbar';

export class App extends Component {
  state = {
    posts: null,
    isLoading: false,
    error: null,
    isOpenModal: false,
  };

  openModal = () => {
    this.setState({
      isOpenModal: true,
       });
  };
  closeModal = () => {
    this.setState({
      isOpenModal: false,
      });
  };

  fetchPost = async () => {
    try {
      this.setState({ isLoading: true });
      const { data } = await axios();
      this.setState({ posts: data });
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  render() {
    return (
      <ContainerApp>
        <Searchbar/>
        <button onClick={this.openModal}>Open modal</button>
        {this.state.isOpenModal && (
          <Modal
            closeModal={this.closeModal}
            modalData={this.state.modalData}
          />
        )}
      </ContainerApp>
    );
  }
}
