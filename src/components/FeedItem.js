import React from 'react';

function FeedItem(props) {
  return (
    <div className="row marketing">
      <div className="col-lg-12">
        <a href={props.feed.link}>
          <h4>{props.feed.title}</h4>
          <p>{props.feed.description}</p>
        </a>
      </div>
    </div>
  );
}

export default FeedItem;