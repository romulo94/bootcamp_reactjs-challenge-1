import React from 'react';
import PropTypes from 'prop-types';

const PostHeader = props => (
  <div className="postHeader">
    <img className="avatar" src={props.avatar} alt="avatar" />
    <div className="info">
      <strong>{props.name}</strong>
      <p className="time">{props.time}</p>
    </div>
  </div>
);

PostHeader.prototype = {
  name: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

export default PostHeader;
