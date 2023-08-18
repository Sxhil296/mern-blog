import { formatISO9075 } from "date-fns";
import React from "react";
import { Link } from "react-router-dom";

const Post = ({ _id, title, summary, cover, content, createdAt, author }) => {
  return (
    <div className="post">
      <div className="image">
        <Link to={`/post/${_id}`}>
          <img src={"http://localhost:4000/" + cover} alt="cover image" />
        </Link>
      </div>
      <div className="texts">
        <Link to={`/post/${_id}`}>
          <h2>{title}</h2>
        </Link>
        <p className="info">
          <a href="/" className="author">
            {author.username}
          </a>
          <span className="time">{formatISO9075(new Date(createdAt))}</span>
        </p>
        <p className="summary">{summary}</p>
      </div>
    </div>
  );
};

export default Post;
