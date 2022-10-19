import { useState, useEffect } from "react";
import axios from "axios";
import Cards from "./Cards";

const Search = () => {
  const [token, setToken] = useState("");
  const [searchKey, setSearchKey] = useState("");
  const [items, setItems] = useState(null);
  const [loading, setLoading] = useState(false);

  //   The search Function triggered upon Pressing the button

  const searchArtists = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log("loading before: ", loading);
    const { data } = await axios.get("https://api.spotify.com/v1/search", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        q: searchKey,
        type: "artist",
      },
    });
    setLoading(false);
    console.log("loading after", loading);
    console.log(data.artists.items);
    setItems(data.artists.items);
    console.log(items);
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
      <div className="flex flex-row justify-center h-1/3 w-full border-2 p-20 border-orange-500">
        <div>
          {token ? (
            <form className="" onSubmit={searchArtists}>
              <label
                for="default-search"
                class="mb-2 text-sm font-medium text-gray-900 sr-only"
              >
                Search
              </label>
              <div class="relative">
                {/* ICON */}
                <div class="flex absolute inset-y-0 right-24 items-center pl-3 pointer-events-none">
                  <svg
                    aria-hidden="true"
                    class="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                </div>
                {/* INPUT */}
                <input
                  type="search"
                  id="default-search"
                  class="block p-4 pl-10 w-96 text-md text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-green-500 focus:border-green-500 placeholder-slate-500"
                  placeholder="Search for an Artist..."
                  onChange={(e) => {
                    setSearchKey(e.target.value);
                  }}
                />
                {/* Button */}
                <button
                  type="submit"
                  class="text-white absolute right-2.5 bottom-2.5 bg-green-500 hover:bg-green-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
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
      <div className="mx-auto container">
        <div className="flex flex-wrap justify-center items-center gap-4">
          {items &&
            items.map((item) => (
              <Cards
                key={item.key}
                images={item.images}
                name={item.name}
                followers={item.followers}
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default Search;

{
  /* <div className="flex flex-row justify-center h-screen w-full border-2 p-20">
<div>
  {token ? (
    <form className="" onSubmit={searchArtists}>
      <label
        for="default-search"
        class="mb-2 text-sm font-medium text-gray-900 sr-only"
      >
        Search
      </label>
      <div class="relative">
        <div class="flex absolute inset-y-0 right-24 items-center pl-3 pointer-events-none">
          <svg
            aria-hidden="true"
            class="w-5 h-5 text-gray-500 dark:text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          class="block p-4 pl-10 w-96 text-md text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-green-500 focus:border-green-500 placeholder-slate-500"
          placeholder="Search for an Artist..."
          onChange={(e) => {
            setSearchKey(e.target.value);
          }}
        />
        <button
          type="submit"
          class="text-white absolute right-2.5 bottom-2.5 bg-green-500 hover:bg-green-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
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
<div>
  <Cards />
</div>
</div> */
}