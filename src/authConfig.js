// authConfig.js
const authConfig = {
    clientId: import.meta.env.VITE_AUTH_CLIENT_ID,
    domain: import.meta.env.VITE_AUTH_DOMAIN,      // e.g. dev-xyz.us.auth0.com
    authorizationParams: {
      redirect_uri: window.location.origin,
      audience: import.meta.env.VITE_AUTH_AUDIENCE,  // Optional: only if you have a custom API
      scope: "openid profile email"
    },
    tokenManager: {
      storage: "localStorage", // Store tokens in localStorage instead of sessionStorage
      autoRenew: false, // Disable token auto-renewal for debugging
    },
    // devMode: true, // Add this line to enable verbose logging
    disableHttpsCheck: true,
    // postLoginRedirectUri: "/", // Redirect to home after login
    
  };

  console.log(authConfig);

  
  
  export default authConfig;
  