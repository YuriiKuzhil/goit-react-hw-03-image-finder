import PropTypes from 'prop-types';
import { ListItem, Image } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({
  imageUrl,
  imageTag,
  largeImageURL,
  getItemContent,
  id,
}) => {
  return (
    <ListItem>
      <Image
        src={imageUrl}
        alt={imageTag}
        largeImageURL={largeImageURL}
        onClick={() => getItemContent(largeImageURL, imageTag)}
        id={id}
      />
    </ListItem>
  );
};
ImageGalleryItem.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  imageTag: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  getItemContent: PropTypes.func.isRequired,
};
export default ImageGalleryItem;
