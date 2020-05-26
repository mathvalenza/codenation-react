import React from 'react';

import User from '../../components/User';
import Loading from '../../components/Loading';

import './UsersList.scss';

const UersList = ({ users }) => {
  return (
    <section className="users-list" data-testid="users-list">
      {users && users.length > 0 ? (
        users.map((user, index) => <User infoUser={user} key={index} />)
      ) : (
        <Loading />
      )}
    </section>
  );
};

export default UersList;
