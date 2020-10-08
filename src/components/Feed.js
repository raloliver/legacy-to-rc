import React from 'react';
import FeedItem from './FeedItem';

function Feed(props) {
  return (
    <div>
      {props.feeds.map((item) => {
        return <FeedItem key={item.id} feed={item} />
      })}
    </div>
  );
}

export default Feed;