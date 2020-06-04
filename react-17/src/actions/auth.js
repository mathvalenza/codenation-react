import AuthConstants from 'constants/auth';

export const authCallbackError = (errorMessage) => ({
  type: AuthConstants.AUTH_CALLBACK_ERROR,
  payload: errorMessage
});

export const authCallbackSucess = (credentials) => ({
  type: AuthConstants.AUTH_CALLBACK_SUCCESS,
  payload: { ...credentials }
});
