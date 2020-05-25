import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';

import { render, fireEvent, waitForElement } from '@testing-library/react';

import Loading from '../components/Loading';
import Post from '../components/Post';
import Story from '../components/Story';
import SuccessMessage from '../components/SuccessMessage';
import Topbar from '../components/Topbar';
import User from '../components/User';

import App from '../containers/App';
import Posts from '../containers/Posts';
import Stories from '../containers/Stories';
import UserForm from '../containers/UserForm';
import UserPosts from '../containers/UserPosts';
import UserProfile from '../containers/UserProfile';

import FeedRoute from '../routes/FeedRoute';
import NewUserRoute from '../routes/NewUserRoute';
import ProfileRoute from '../routes/ProfileRoute';
import UsersRoute from '../routes/UsersRoute';

import comments from './mocks/comments';
import likes from './mocks/likes';
import postsMock from './mocks/posts';
import stories from './mocks/stories';
import usersMock from './mocks/users';

const history = createMemoryHistory();

describe('React Instagram APP', () => {
  describe('Folder Strucutre and data-test-id attributes', () => {
    it('should should render properly the <Loading> component', () => {
      const { getByTestId } = render(<Loading />);

      const container = getByTestId('loading');

      expect(container).toBeDefined();
    });

    it('should should render properly the <Post> component', () => {
      const propsMock = {
        postInfo: { comments: [] },
        userInfo: {}
      };

      const { getByTestId } = render(
        <Router history={history}>
          <Post {...propsMock} />
        </Router>
      );
      const container = getByTestId('post');

      expect(container).toBeDefined();
    });

    it('should should render properly the <Story> component', () => {
      const propsMock = {
        story: {},
        user: { username: 'Vinna' },
        handleClose: {}
      };
      const { getByTestId } = render(
        <Router history={history}>
          <Story {...propsMock} />
        </Router>
      );
      const container = getByTestId('story');

      expect(container).toBeDefined();
    });

    it('should should render properly the <SuccessMessage> component', () => {
      const { getByTestId } = render(
        <Router history={history}>
          <SuccessMessage />
        </Router>
      );
      const container = getByTestId('success-message');

      expect(container).toBeDefined();
    });

    it('should should render properly the <Topbar> component', () => {
      const { getByTestId } = render(
        <Router history={history}>
          <Topbar />
        </Router>
      );
      const container = getByTestId('topbar');

      expect(container).toBeDefined();
    });

    it('should should render properly the <User> component', () => {
      const propsMock = {
        infoUser: {
          avatar: '',
          name: '',
          username: ''
        }
      };

      const { getByTestId } = render(
        <Router history={history}>
          <User {...propsMock} />
        </Router>
      );
      const container = getByTestId('user');

      expect(container).toBeDefined();
    });

    it('should should render properly the <App> component', () => {
      const { getByTestId } = render(
        <Router history={history}>
          <App />
        </Router>
      );
      const container = getByTestId('app');

      expect(container).toBeDefined();
    });

    it('should should render properly the <Posts> component', () => {
      const propsMock = {
        posts: []
      };

      const { getByTestId } = render(
        <Router history={history}>
          <Posts {...propsMock} />
        </Router>
      );
      const container = getByTestId('posts');

      expect(container).toBeDefined();
    });

    it('should should render properly the <Stories> component', () => {
      const propsMock = {
        stories: []
      };

      const { getByTestId } = render(
        <Router history={history}>
          <Stories {...propsMock} />
        </Router>
      );

      const container = getByTestId('stories');

      expect(container).toBeDefined();
    });

    it('should should render properly the <UserForm> component', () => {
      const { getByTestId } = render(
        <Router history={history}>
          <UserForm />
        </Router>
      );
      const container = getByTestId('user-form');

      expect(container).toBeDefined();
    });

    it('should should render properly the <UserPosts> component', () => {
      const propsMock = {
        posts: []
      };

      const { getByTestId } = render(
        <Router history={history}>
          <UserPosts {...propsMock} />
        </Router>
      );
      const container = getByTestId('user-posts');

      expect(container).toBeDefined();
    });

    it('should should render properly the <UserProfile> component', () => {
      const propsMock = {
        avatar: '',
        name: '',
        username: ''
      };

      const { getByTestId } = render(
        <Router history={history}>
          <UserProfile {...propsMock} />
        </Router>
      );
      const container = getByTestId('user-profile');

      expect(container).toBeDefined();
    });
  });
});
