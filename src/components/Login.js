import React, { useState, useEffect } from "react";
import LOGO from "../images/LOGO.png";

const Login = () => {
  const CLIENT_ID = "d8bdc8257b2a46cbbe92d51c547c47a6";
  const REDIRECT_URI = "http://localhost:3000/search";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";

  const [token, setToken] = useState("");
  const [searchKey, setSearchKey] = useState("");
  const [artists, setArtists] = useState("");

  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");

    if (!token && hash) {
      token = hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"))
        .split("=")[1];

      window.location.hash = "";
      window.localStorage.setItem("token", token);
    }

    setToken(token);
  }, []);

  const logout = () => {
    setToken("");
    window.localStorage.removeItem("token");
  };
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        {!token ? (
          <div className="flex items-center justify-center">
            <a
              className="flex items-center  text-gray-600 border-gray-400 px-36 border-2 py-3 text-lg rounded-md"
              href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
            >
              Login
            </a>
            <img src={LOGO} className="h-12 ml-[-50px]" alt="Spotify Logo" />
          </div>
        ) : (
          <a
            className="flex items-center  text-gray-600 border-gray-400 px-36 border-2 py-3 text-lg rounded-md cursor-pointer"
            onClick={logout}
          >
            Logout
          </a>
        )}
      </div>
    </>
  );
};

export default Login;
