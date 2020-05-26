import React, { useCallback, useState } from 'react';

import { Link } from 'react-router-dom';

import './Story.scss';

const Story = ({ story, user, handleClose }) => {
  const [videoMetadata, setVideoMetadata] = useState(null);
  const [currentTime, setCurrentTime] = useState(null);

  const updateProgress = useCallback(() => {
    if (
      videoMetadata &&
      videoMetadata.duration !== null &&
      currentTime !== null
    ) {
      const pastTime = (currentTime / videoMetadata.duration) * 100;

      return `${pastTime.toFixed(2)}%`;
    }

    return '0%';
  }, [videoMetadata, currentTime]);

  return (
    <section className="story" data-testid="story">
      <div className="container">
        <header className="story__header">
          <div className="user">
            <Link to={`/users/${user.username}`} className="user__thumb">
              <img src={user.avatar} alt={user.name} />
            </Link>
            <Link to={`/users/${user.username}`} className="user__name">
              {user.name}
            </Link>
          </div>
          <button className="story__close" onClick={() => handleClose()}>
            <i className="fas fa-times" />
          </button>
        </header>

        <div className="story__progress">
          <div
            style={{ width: updateProgress() }}
            className="story__progress__elapsed"
          />
        </div>
      </div>

      {story && story.videoUrl && (
        <div className="container">
          <section className="story__video__wrapper">
            <video
              autoPlay
              loop
              playsInline
              className="video-player"
              onTimeUpdate={(e) => setCurrentTime(e.target.currentTime)}
              src={story.videoUrl}
              onLoadedMetadata={(e) => {
                setVideoMetadata({
                  videoHeight: e.target.videoHeight,
                  videoWidth: e.target.videoWidth,
                  duration: e.target.duration
                });
              }}
            />
          </section>
        </div>
      )}
    </section>
  );
};

export default Story;
