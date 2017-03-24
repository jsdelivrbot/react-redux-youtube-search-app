import React, { PropTypes } from 'react';
import VideoListItem from './VideoListItem';
const VideoList = ({ videos, onVideoSelect }) => {
  return (
    <ul className='col-md-4'>
      {
        videos.map(video =>
          <VideoListItem
            onVideoSelect={ onVideoSelect }
            key={ video.etag }
            video={ video } />
        )
      }
    </ul>
  );
};

VideoList.propTypes = {
  videos: PropTypes.array.isRequired,
};

export default VideoList;
