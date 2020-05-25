import React, { useState, useEffect } from 'react';

import Stories from '../../containers/Stories';
import Loading from '../../components/Loading';

import Posts from '../../containers/Posts';

import './FeedRoute.scss';

const FeedRoute = () => {
  const [stories, setStories] = useState([]);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://5e7d0266a917d70016684219.mockapi.io/api/v1/stories')
      .then((res) => res.json())
      .then((data) => {
        setStories(data);
        setLoading(false);
      });
  }, []);

  function getUserHandler() {
    console.log('getUserHandler');
  }

  return (
    <div data-testid="feed-route">
      <div className="feed">
        {loading ? (
          <Loading />
        ) : (
          <React.Fragment>
            <Stories stories={stories} />
            <Posts posts={posts} getUserHandler={getUserHandler} />
          </React.Fragment>
        )}
      </div>
    </div>
  );
};

export default FeedRoute;
