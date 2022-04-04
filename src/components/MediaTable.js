// import PropTypes from 'prop-types';
import {CircularProgress, ImageList} from '@mui/material';
import {useMedia} from '../hooks/ApiHooks';
import {useWindowSize} from '../hooks/WindowHooks';
import MediaRow from './MediaRow';

const MediaTable = () => {
  const {mediaArray, Loading} = useMedia();
  const windowSize = useWindowSize();
  console.log(mediaArray);
  return (
    <>
      {Loading ? (
        <CircularProgress />
      ) : (
        <ImageList
          variant="masonry"
          cols={windowSize.width > 768 ? 3 : 2}
          gap={8}
        >
          {mediaArray.map((item, index) => {
            return <MediaRow key={index} file={item} />;
          })}
        </ImageList>
      )}
    </>
  );
};

MediaTable.propTypes = {};

export default MediaTable;
