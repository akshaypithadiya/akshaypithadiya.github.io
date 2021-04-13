import React from 'react';
import { Link } from 'react-router-dom';
import './Post.scss';

const Post = (props) => {
  const { title, date, link } = props;
  return (
    <div className="Post">
      <div className="title-and-date">
        <span className="title">{title}</span>
        <span className="date">
          <i>{date}</i>
        </span>
      </div>
      <br />
      <span>
        <Link to={link} className="read">
          READ <ion-icon name="arrow-forward-outline"></ion-icon>
        </Link>
      </span>
    </div>
  );
};

export default Post;
