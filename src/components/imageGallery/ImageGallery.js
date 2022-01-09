import PropTypes from 'prop-types';
import React, { Component } from 'react';
import toast from 'react-hot-toast';
import { ImageGalleryList } from './ImageGallery.styled';
import ImageGalleryItem from './imageGalleryItem';
import ButtonLoadMore from '../buttonLoadMore';
import imageFinderApi from '../../services/imageFinderApi';

class ImageGallery extends Component {
  static propTypes = {
    imageName: PropTypes.string.isRequired,
  };
  state = {
    fetchImages: [],
    page: 1,
    showButton: false,
    // modalContent: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const { page } = this.state;
    const prevName = prevProps.imageName;
    const nextName = this.props.imageName;

    if (prevName !== nextName) {
      this.setState({ galleryItems: [], page: 1 });
    }
    if (prevName !== nextName || prevState.page !== page) {
      this.getImages();
      return;
    }
  }
  getImages = async () => {
    const { page, fetchImages } = this.state;
    const query = this.props.imageName;
    const data = await imageFinderApi(query, page);

    try {
      if (data.total === 0) {
        toast.error('Images has not been found!');
        this.setState({
          fetchImages: [],
          page: 1,
          showButton: false,
        });
        return;
      }
      const quantityOfPage = data.total / 12;
      if (quantityOfPage > page) {
        this.setState({ showButton: true });
      }
      this.setState({
        fetchImages: page === 1 ? data.hits : [...fetchImages, ...data.hits],
      });
    } catch {
      toast.error('Something wrong!');
    }
  };

  loadMoreImages = () => {
    this.setState(({ page }) => ({
      page: page + 1,
    }));
  };

  openModal = event => {
    if (event.target.nodeName === 'IMG') {
      this.props.openModal();
    }
  };

  getItemContent = (largeImageURL, tags) => {
    const modalContent = {
      largeImageURL,
      tags,
    };

    this.props.getModalContent(modalContent);
  };

  render() {
    const { fetchImages, showButton } = this.state;

    return (
      <>
        <ImageGalleryList onClick={this.openModal}>
          {fetchImages.map(({ id, tags, webformatURL, largeImageURL }) => (
            <ImageGalleryItem
              key={id}
              imageUrl={webformatURL}
              imageTag={tags}
              largeImageURL={largeImageURL}
              getItemContent={this.getItemContent}
            />
          ))}
        </ImageGalleryList>
        {showButton && (
          <ButtonLoadMore onloadMoreImages={this.loadMoreImages} />
        )}
      </>
    );
  }
}

export default ImageGallery;
