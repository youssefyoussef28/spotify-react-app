import { useState, useEffect } from "react";
import axios from "axios";
import Cards from "./Cards";
import { Link, useParams } from "react-router-dom";

const Search = () => {
  const [token, setToken] = useState("");
  const [searchKey, setSearchKey] = useState("");
  const [items, setItems] = useState(null);
  const [loading, setLoading] = useState(false);

  //   The search Function triggered upon Pressing the button

  const searchArtists = async (e) => {
    e.preventDefault();

    const { data } = await axios.get("https://api.spotify.com/v1/search", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        q: searchKey,
        type: "artist",
      },
    });

    setItems(data.artists.items);
    console.log(data.artists.items);
  };

  useEffect(() => {
    // setToken(window.localStorage.getItem("token", token));
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

  return (
    <>
      <div className="flex flex-row justify-center h-1/3 w-full border-2 p-20 ">
        <div>
          {token ? (
            <form className="" onSubmit={searchArtists}>
              <label
                html="default-search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only"
              >
                Search
              </label>
              <div className="relative">
                {/* ICON */}
                <div className="flex absolute inset-y-0 right-24 items-center pl-3 pointer-events-none">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                </div>
                {/* INPUT */}
                <input
                  type="search"
                  id="default-search"
                  className="block p-4 pl-10 w-96 text-md text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-green-500 focus:border-green-500 placeholder-slate-500"
                  placeholder="Search for an Artist..."
                  onChange={(e) => {
                    setSearchKey(e.target.value);
                  }}
                />
                {/* Button */}
                <button
                  type="submit"
                  className="text-white absolute right-2.5 bottom-2.5 bg-green-500 hover:bg-green-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
                >
                  Search
                </button>
              </div>
            </form>
          ) : (
            <div className="text-3xl text-gray-800 text-center">
              Please Sign in to access the Search Feature
            </div>
          )}
        </div>
      </div>
      <div className="mx-auto container flex justify-center">
        {/* flex flex-wrap justify-center items-center */}
        <div className="flex flex-col md:flex-row md:flex-wrap  justify-center items-center   gap-4">
          {items &&
            items.map((item) => (
              <a href={`/albums/${item.id}`}>
                {" "}
                <Cards
                  key={item.key}
                  images={item.images}
                  name={item.name}
                  followers={item.followers}
                  popularity={item.popularity}
                />
              </a>
            ))}
        </div>
      </div>
    </>
  );
};

export default Search;
