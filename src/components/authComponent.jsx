import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { jwtDecode } from "jwt-decode";

const AuthButtons = () => {
  const {
    loginWithRedirect,
    logout,
    isAuthenticated,
    user,
    isLoading,
    getAccessTokenSilently,
  } = useAuth0();
  const [token, setToken] = useState(null);
  const [roles, setRoles] = useState("");

  useEffect(() => {
    const fetchToken = async () => {
      if (isAuthenticated) {
        try {
          const accessToken = await getAccessTokenSilently({
            audience: import.meta.env.VITE_AUTH_AUDIENCE,
            scope: "openid profile email",
          });

          setToken(accessToken);

          const decoded = jwtDecode(accessToken);
          console.log("Decoded JWT:", decoded);

          const userRoles = decoded["https://qaimle.com/roles"] || [];
          setRoles(userRoles);

          // Sync with backend
          await fetch("http://localhost:3000/users/sync", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${accessToken}`,
            },
            body: JSON.stringify({
              sub: user?.sub,
              email: user?.email,
              name: user?.name,
            }),
          });
        } catch (err) {
          console.error("Error getting access token or syncing user:", err);
        }
      }
    };
    fetchToken();
  }, [isAuthenticated, getAccessTokenSilently, user]);

  if (isLoading) return <p>Loading...</p>;

  return (
    <div>
      {isAuthenticated ? (
        <>
          <p>Welcome, {user?.nickname}</p>

          <p>
            Roles:{" "}
            {roles.length > 0 ? roles.join(", ") : "No roles assigned"}
          </p>

          <button
            onClick={() =>
              logout({ logoutParams: { returnTo: window.location.origin } })
            }
          >
            Log out
          </button>
        </>
      ) : (
        <button onClick={() => loginWithRedirect()}>Log In / Sign Up</button>
      )}
    </div>
  );
};

export default AuthButtons;
