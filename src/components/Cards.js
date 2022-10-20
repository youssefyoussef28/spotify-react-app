import React from "react";
import { Link, NavLink, useParams } from "react-router-dom";
import defaultImage from "../images/default.jpg";
import StarRatings from "react-star-ratings";

const Cards = (props) => {
  return (
    <>
      {" "}
      <div
        key={props.key}
        className="bg-white rounded-lg border border-gray-200 shadow-md max-w-xs"
      >
        <div className="h-full">
          {props.images.length ? (
            <img
              className="rounded-t-sm  object-cover aspect-square"
              src={props.images[0].url}
              alt="Artist Image"
            />
          ) : (
            <img
              className="rounded-t-sm  object-cover aspect-square"
              src={defaultImage}
              alt="default Image"
            />
          )}
        </div>
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {props.name}
          </h5>

          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Followers: {props.followers.total}
          </p>
          <div>
            {console.log("props ", props)}
            <StarRatings
              rating={props.popularity / 5}
              starDimension="20px"
              starSpacing="2px"
              starRatedColor="rgb(255, 255,0)'"
            />{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
