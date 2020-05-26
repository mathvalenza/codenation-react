import React, { useState } from 'react';

import Story from '../../components/Story';

import './Stories.scss';

const Stories = ({ stories, getUserHandler }) => {
  const [showStory, setShowStory] = useState(false);
  const [selectedUser, setSelectedUser] = useState({});
  const [selectedStory, setSelectedHistory] = useState({});

  const getStoryById = (id) => stories.find((story) => story.id === id);

  const handleStory = (story, userData) => {
    const selectedStory = getStoryById(story.id);

    setSelectedUser(userData);
    setSelectedHistory(selectedStory);
    setShowStory(!showStory);
  };

  return (
    <React.Fragment>
      <section className="stories" data-testid="stories">
        <div className="container">
          {stories.map((story, index) => {
            const userData = getUserHandler(story.userId);

            return (
              userData && (
                <button
                  key={story.id}
                  onClick={() => handleStory(story, userData)}
                  className={`user__thumb ${
                    index === 0 && 'user__thumb--hasNew'
                  }`}
                >
                  <div className="user__thumb__wrapper">
                    <img src={userData.avatar} alt={userData.name} />
                  </div>
                </button>
              )
            );
          })}
        </div>
      </section>

      {showStory && (
        <Story
          story={selectedStory}
          user={selectedUser}
          handleClose={() => setShowStory(false)}
        />
      )}
    </React.Fragment>
  );
};

export default Stories;
