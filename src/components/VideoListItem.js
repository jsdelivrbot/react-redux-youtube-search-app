import React, { PropTypes } from 'react';
const VideoListItem = ({ video, onVideoSelect }) => {
  const { snippet } = video;
  const imageUrl = snippet.thumbnails.default.url;
  const { title } = snippet;

  return (
    <li className='list-group-item' onClick={ () => onVideoSelect(video)}>
      <div className='video-list media'>
        <div className="media-left">
          <img className='media-object' src={ imageUrl } alt={ title } />
        </div>
        <div className="media-body">
          <div className="media-heading">
            { title }
          </div>
        </div>
      </div>
    </li>
  );
};

VideoListItem.propTypes = {
  video: PropTypes.object.isRequired
};

export default VideoListItem;
