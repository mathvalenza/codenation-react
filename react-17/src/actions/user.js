import UserConstants from 'constants/user';

export const getUserRequest = () => ({
  type: UserConstants.GET_USER_REQUEST
});

export const getUserSuccess = (payload) => {
  const userProfile = {
    email: payload.email,
    name: payload.display_name,
    thumb: payload.images.length ? payload.images[0].url : ''
  };

  return {
    type: UserConstants.GET_USER_SUCCESS,
    payload: { ...userProfile }
  };
};

export const getUserFailed = ({ message }) => ({
  type: UserConstants.GET_USER_FAILED,
  payload: { message }
});

export const logout = () => ({
  type: UserConstants.USER_LOGOUT,
  payload: {}
});
