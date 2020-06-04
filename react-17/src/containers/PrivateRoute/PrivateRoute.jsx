import React from 'react';
import { useSelector } from 'react-redux';

import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ comp: Component, ...rest }) => {
  const isLogged = useSelector((state) => state.auth.isLogged);

  return (
    <Route
      {...rest}
      render={(props) =>
        !isLogged ? <Redirect to="/" /> : <Component {...props} />
      }
    />
  );
};

export default PrivateRoute;
