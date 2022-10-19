import "./App.css";
import { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Search from "./components/Search";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Albums from "./components/Albums";

function App() {
  return (
    <>
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/search" element={<Search />} />
            <Route path="/albums/:id" element={<Albums />} />
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
