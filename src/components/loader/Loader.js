import { TailSpin } from 'react-loader-spinner';
import { LoaderContainer } from './Loader.styled';
const Loader = () => {
  return (
    <LoaderContainer>
      <TailSpin color="#3f51b5" />
    </LoaderContainer>
  );
};
export default Loader;
