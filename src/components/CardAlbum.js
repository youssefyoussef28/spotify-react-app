const CardAlbum = (props) => {
  return (
    <>
      {" "}
      <div
        key={props.key}
        className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md"
      >
        <div className="h-full">
          <a href="#">
            {props.images.length ? (
              <img
                className="rounded-t-sm  object-fill"
                src={props.images[0].url}
                alt=""
              />
            ) : (
              <div>No Image available</div>
            )}
          </a>
        </div>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-light tracking-tight text-gray-900 dark:text-white">
              {props.name}
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {props.releaseDate}
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {props.tracks} Tracks
          </p>
          <p className="border-t-2  font-normal text-gray-700 text-center p-3">
            <a href={props.link}>Preview on Spotify</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default CardAlbum;
