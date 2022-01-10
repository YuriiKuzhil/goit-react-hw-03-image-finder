import React, { Component } from 'react';
import { Toaster } from 'react-hot-toast';
import './App.css';
import Searchbar from './components/searchbar';
import ImageGallery from './components/imageGallery';
import Modal from './components/modal';

class App extends Component {
  state = {
    imageName: '',
    showModal: false,
    modalContent: null,
  };

  handleFormSubmit = imageName => {
    this.setState({ imageName });
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };
  getModalContent = modalContent => {
    this.setState({ modalContent });
  };
  render() {
    const { showModal, modalContent } = this.state;

    return (
      <div className="App">
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery
          getModalContent={this.getModalContent}
          imageName={this.state.imageName}
          openModal={this.toggleModal}
        />
        <Toaster position="bottom-right" />
        {showModal && <Modal onClose={this.toggleModal} data={modalContent} />}
      </div>
    );
  }
}

export default App;
