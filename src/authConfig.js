// authConfig.js
const authConfig = {
  domain: import.meta.env.VITE_AUTH_DOMAIN,       // e.g. dev-xyz.us.auth0.com
  clientId: import.meta.env.VITE_AUTH_CLIENT_ID,
  authorizationParams: {
    redirect_uri: window.location.origin,
    audience: import.meta.env.VITE_AUTH_AUDIENCE || "https://qaimle.com/api",
    scope: "openid profile email"
  }
};

export default authConfig;
