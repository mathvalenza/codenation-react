import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

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
  const { username: userNameParam } = useParams();

  useEffect(() => {
    function getUser() {
      fetch(
        `https://5e7d0266a917d70016684219.mockapi.io/api/v1/users?search=${userNameParam}`
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
  }, [userNameParam]);

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
