// import PropTypes from 'prop-types';
import {useMedia} from '../hooks/ApiHooks';
import MediaRow from './MediaRow';
import {
  ImageList,
  ImageListItem,
  ListSubheader,
  makeStyles,
  useMediaQuery,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: '100%',
    height: '100%',
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));

const MediaTable = () => {
  const classes = useStyles();
  const matches = useMediaQuery('(min-width:697px)');
  const {mediaArray} = useMedia();
  console.log(mediaArray);
  return (
    <div className={classes.root}>
      <ImageList
        rowHeight={180}
        className={classes.gridList}
        cols={matches ? 3 : 2}
      >
        <ImageListItem key="Subheader" cols={3} style={{height: 'auto'}}>
          <ListSubheader component="div">All Media</ListSubheader>
        </ImageListItem>
        {mediaArray.map((item) => (
          <ImageListItem key={item.file_id}>
            <MediaRow file={item} />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
};

MediaTable.propTypes = {};

export default MediaTable;
