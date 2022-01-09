import PropTypes from 'prop-types';
import { Button } from './ButtonLoadMore.styled';

const ButtonLoadMore = ({ onloadMoreImages }) => {
  return <Button onClick={onloadMoreImages}>Load more</Button>;
};
ButtonLoadMore.propTypes = {
  onloadMoreImages: PropTypes.func.isRequired,
};
export default ButtonLoadMore;
