import React, { PropTypes } from 'react';
import VideoListItem from './VideoListItem';
const VideoList = ({ videos }) => {
  return (
    <ul>
      {
        videos.map(video => <VideoListItem key={ video.etag } video={ video } />)
      }
    </ul>
  );
};

VideoList.propTypes = {
  videos: PropTypes.array.isRequired,
};

export default VideoList;
