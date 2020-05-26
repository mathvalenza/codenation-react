import React, { useState, useEffect } from 'react';

import UserProfile from '../../containers/UserProfile';
import UserPosts from '../../containers/UserPosts';

import Loading from '../../components/Loading';

const ProfileRoute = () => {
  const [name, setName] = useState('');
  const [id, setUserId] = useState('');
  const [avatar, setAvatar] = useState('');
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [userPosts, setUserPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const { pathname } = window.location;
    const userName = pathname.split('/')[2];

    function getUser() {
      fetch(
        `https://5e7d0266a917d70016684219.mockapi.io/api/v1/users?search=${userName}`
      )
        .then((response) => response.json())
        .then((profileData) => {
          const userData = profileData[0];

          setAvatar(userData.avatar);
          setEmail(userData.email);
          setName(userData.name);
          setUserName(userData.userName);
          setUserId(userData.id);
        });
    }
    getUser();
  }, []);

  useEffect(() => {
    if (id) {
      fetch(
        `https://5e7d0266a917d70016684219.mockapi.io/api/v1/users/${id}/posts`
      )
        .then((response) => response.json())
        .then((posts) => {
          setUserPosts(posts);
          setIsLoading(false);
        });
    }
  }, [id]);

  return (
    <div data-testid="profile-route">
      <UserProfile
        name={name}
        avatar={avatar}
        userName={userName}
        email={email}
      />

      {isLoading ? <Loading /> : <UserPosts posts={userPosts} />}
    </div>
  );
};

export default ProfileRoute;
