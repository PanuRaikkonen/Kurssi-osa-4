import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {mediaUrl} from '../utils/variables';
import {ImageListItemBar, IconButton, makeStyles} from '@material-ui/core';
import PageviewIcon from '@material-ui/icons/Pageview';

const useStyles = makeStyles((theme) => ({
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));

const MediaRow = ({file}) => {
  const classes = useStyles();
  return (
    <>
      <img src={mediaUrl + file.thumbnails.w320} alt={file.title} />
      <ImageListItemBar
        title={file.title}
        subtitle={file.description}
        actionIcon={
          <>
            <IconButton
              aria-label={`info about ${file.title}`}
              component={Link}
              to="/single"
              state={{file}}
              className={classes.icon}
            >
              <PageviewIcon fontSize="large" />
            </IconButton>
          </>
        }
      />
    </>
  );
};

MediaRow.propTypes = {
  file: PropTypes.object,
};

export default MediaRow;
