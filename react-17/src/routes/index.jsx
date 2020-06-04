import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { PrivateRoute } from '../containers';

import LoginRoute from './LoginRoute';
import AuthorizeRoute from './AuthorizeRoute';
import DashboardRoute from './DashboardRoute';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={LoginRoute} />

      <Route exact path="/authorize" component={AuthorizeRoute} />

      <PrivateRoute path="/dashboard" comp={DashboardRoute} />
    </Switch>
  );
};

export default Routes;
