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
    </>
  );
}

export default App;
