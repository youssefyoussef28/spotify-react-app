import defaultImage from "../images/default.jpg";

const CardAlbum = (props) => {
  return (
    <>
      {" "}
      <div
        key={props.key}
        className=" bg-white rounded-lg border border-gray-200 shadow-md  w-[28rem] p-3"
      >
        <div className="h-f">
          {props.images.length ? (
            <img
              className="rounded-t-sm  object-cover aspect-square  h-fit"
              src={props.images[0].url}
              alt=""
            />
          ) : (
            <img
              className="rounded-t-sm  object-cover aspect-square max-h-fit"
              src={defaultImage}
              alt="default Image"
            />
          )}
        </div>
        <div className="p-5">
          <h5 className="mb-2 h-14 text-xl font-light tracking-tight text-gray-900 p-3">
            {props.name}
          </h5>

          <p className="mb-3 font-normal text-gray-700 p-3">
            {props.releaseDate}
          </p>
          <p className="mb-3 font-normal text-gray-700 p-3">
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
