import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import CardAlbum from "./CardAlbum";

const Albums = () => {
  let { id } = useParams();
  const [token, setToken] = useState("");
  const [albums, setAlbums] = useState([]);

  //   Fetching The Albums
  const searchAlbums = async (e) => {
    // e.preventDefault();
    const { data } = await axios.get(
      `https://api.spotify.com/v1/artists/${id}/albums`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    setAlbums(data);
    console.log(albums);
  };

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
    searchAlbums();
  }, []);

  return (
    <>
      <div className="flex flex-wrap justify-center items-center gap-4 p-10">
        {albums.items &&
          albums.items.map((item) => (
            <CardAlbum
              key={item.id}
              images={item.images}
              name={item.name}
              releaseDate={item.release_date}
              tracks={item.total_tracks}
              link={item.href}
            />
          ))}
      </div>
    </>
  );
};

export default Albums;
