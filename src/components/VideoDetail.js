import React, { PropTypes } from 'react';
const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>
  }
  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;
  const { title, description } = video.snippet;
  return (
    <div className='video-detail col-md-8'>
      <div className='embed-responsive embed-responsive-16by9'>
        <iframe src={url} className="embed-responsive-item"></iframe>
      </div>
      <div className="details">
        <div>{ title }</div>
        <div>{ description }</div>
      </div>
    </div>
  );
};

VideoDetail.propTypes = {
  video: PropTypes.any,
};

export default VideoDetail;
