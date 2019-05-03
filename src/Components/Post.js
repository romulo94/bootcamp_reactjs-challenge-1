import React from 'react';
import PropTypes from 'prop-types';
import PostHeader from './PostHeader';

const Post = props => (
  <div className="post">
    <PostHeader name={props.data.name} time={props.data.time} avatar={props.data.avatar} />
    <span>{props.data.content}</span>
  </div>
);

Post.prototype = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
};

export default Post;
