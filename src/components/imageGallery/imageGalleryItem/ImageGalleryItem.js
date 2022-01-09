import PropTypes from 'prop-types';
import { ListItem, Image } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({
  imageUrl,
  imageTag,
  largeImageURL,
  getItemContent,
}) => {
  return (
    <ListItem>
      <Image
        src={imageUrl}
        alt={imageTag}
        largeImageURL={largeImageURL}
        onClick={() => getItemContent(largeImageURL, imageTag)}
      />
    </ListItem>
  );
};
ImageGalleryItem.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  imageTag: PropTypes.string.isRequired,
};
export default ImageGalleryItem;
