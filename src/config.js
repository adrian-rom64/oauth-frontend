
import { urlQuery } from './utils';

const getGithubUrl = () => {
  const baseUrl = 'https://github.com/login/oauth/authorize';
  const params = { client_id: process.env.REACT_APP_GITHUB_CLIENT_ID };
  return `${baseUrl}?${urlQuery(params)}`;
};

const getFacebookUrl = () => {
  const url = `https://www.facebook.com/${process.env.REACT_APP_FACEBOOK_API_VERSION}/dialog/oauth`;
  const params = {
    client_id: process.env.REACT_APP_FACEBOOK_APP_ID,
    redirect_uri: `${process.env.REACT_APP_SITE_URL}/auth/facebook`,
    state: 'placeholder',
  };
  return `${url}?${urlQuery(params)}`;
};

const getSpotifyUrl = () => {
  const baseUrl = 'https://accounts.spotify.com/authorize';
  const params = {
    client_id: process.env.REACT_APP_SPOTIFY_CLIENT_ID,
    response_type: 'code',
    redirect_uri: `${process.env.REACT_APP_SITE_URL}/auth/spotify`,
    state: 'placeholder',
  };
  return `${baseUrl}?${urlQuery(params)}`;
};

export default {
  siteUrl: process.env.REACT_APP_SITE_URL,
  apiUrl: process.env.REACT_APP_API_URL,
  githubUrl: getGithubUrl(),
  facebookUrl: getFacebookUrl(),
  spotifyUrl: getSpotifyUrl(),
};
