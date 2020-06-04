import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { authCallbackError, authCallbackSucess } from 'actions';

import { getInfoFromUrlHash } from 'modules/url';

import { Authorize } from 'containers';

const AuthorizeRoute = () => {
  const [redirect, setRedirect] = useState(false);
  const isLogged = useSelector((state) => state.auth.isLogged);
  const dispatch = useDispatch();

  const TIME_OUT_TIME_MS = 3000;

  useEffect(() => {
    const hashData = getInfoFromUrlHash(window.location.hash);

    if (hashData.error) {
      dispatch(authCallbackError(hashData.error));

      return;
    }

    dispatch(authCallbackSucess(hashData));
  }, [dispatch]);

  useEffect(() => {
    if (isLogged) {
      setTimeout(() => setRedirect(true), TIME_OUT_TIME_MS);
    }
  }, [isLogged]);

  if (redirect) return <Redirect to={{ pathname: '/dashboard' }} />;

  return <Authorize />;
};

export default AuthorizeRoute;
