export const config = {
  spotify: {
    authorizationURL: 'https://accounts.spotify.com/authorize',
    clientId: process.env.REACT_APP_CLIENT_ID,
    redirectUrl: `${window.location.origin}/authorize`,
    webAPI: 'https://api.spotify.com/v1',
    scopes: ['user-read-email', 'user-read-private', 'streaming']
  }
};
