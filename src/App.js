import "./App.css";
import { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Search from "./components/Search";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  // const CLIENT_ID = "d8bdc8257b2a46cbbe92d51c547c47a6";
  // const REDIRECT_URI = "http://localhost:3000";
  // const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  // const RESPONSE_TYPE = "token";

  // const [token, setToken] = useState("");
  // const [searchKey, setSearchKey] = useState("");
  // const [artists, setArtists] = useState("");

  // useEffect(() => {
  //   const hash = window.location.hash;
  //   let token = window.localStorage.getItem("token");

  //   if (!token && hash) {
  //     token = hash
  //       .substring(1)
  //       .split("&")
  //       .find((elem) => elem.startsWith("access_token"))
  //       .split("=")[1];

  //     window.location.hash = "";
  //     window.localStorage.setItem("token", token);
  //   }

  //   setToken(token);
  // }, []);

  // const logout = () => {
  //   setToken("");
  //   window.localStorage.removeItem("token");
  // };

  // The search Function triggered upon Pressing the button

  // const searchArtists = async (e) => {
  //   e.preventDefault();
  //   const { data } = await axios.get("https://api.spotify.com/v1/search", {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //     params: {
  //       q: searchKey,
  //       type: "artist",
  //     },
  //   });
  //   console.log(data);
  //   setArtists(data.artists.items);
  // };

  // const renderArtists = () => {
  //   return artists.map((artist) => {
  //     <div
  //       key={artist.id}
  //       class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
  //     >
  //       <a href="#">
  //         {artist.images.length ? (
  //           <img class="rounded-t-lg" src={artist.images[0].url} alt="" />
  //         ) : (
  //           <div>No Image available</div>
  //         )}
  //       </a>
  //       <div class="p-5">
  //         <a href="#">
  //           <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
  //             {artist.name}
  //           </h5>
  //         </a>
  //         <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
  //           {artist.followers}
  //         </p>
  //       </div>
  //     </div>;
  //   });
  // };

  // console.log(renderArtists);

  return (
    <>
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/search" element={<Search />} />
          </Routes>
        </Router>
      </div>
      {/* <div>
        {!token ? (
          <a
            href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
          >
            Login to spotify
          </a>
        ) : (
          <a className="p-4 cursor-pointer" onClick={logout}>
            Logout
          </a>
        )}
        
        {token ? (
          <form onSubmit={searchArtists}>
            <input
              type="text"
              onChange={(e) => {
                setSearchKey(e.target.value);
              }}
            />
            <button type="submit">Search</button>
          </form>
        ) : (
          <div>Please Sign in</div>
        )}
        {renderArtists}
      </div> */}
    </>
  );
}

export default App;
