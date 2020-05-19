import React from 'react';

import User from '../../components/User';
import Loading from '../../components/Loading';

import './UsersList.scss';

const UersList = ({ users }) => {
  return <section className="users-list" data-testid="user-list"></section>;
};

export default UersList;
