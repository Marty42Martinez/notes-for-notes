import { WebAuth } from 'auth0-js';

const auth0 = new WebAuth({
  domain: 'dev-3lv1b9hm.auth0.com',
  clientID: 'p6V4gEZfKINr1zotLEMKo0V13pYpXQ5e',
  redirectUri: 'http://localhost:7890/callback',
  responseType: 'token id_token',
  scope: 'openid profile'
});

export const login = () => {
  auth0.authorize();
};
