import React from "react";
import { Link } from "react-router-dom";
import { HiHandThumbUp } from "react-icons/hi2";
import LazyLoad from "react-lazyload";

const CheifDataMainPage = ({ chef }) => {
  const {
    id,
    name,
    picture,
    description,
    years_of_experience,
    likes,
    num_of_recipes,
  } = chef;

  return (
    <div>
      <div>
        <div className="bg-base-100 hover:shadow-2xl hover:shadow-slate-600-100 shadow-inner ease-in-out duration-300">
          <figure className="sm:w-full">
            <LazyLoad offset={120}>
              <img src={picture} alt="" className="w-full" />
            </LazyLoad>
          </figure>
          <div className="p-4">
            <h2 className="text-red-600 font-bold text-lg mb-2">{name}</h2>
            <p className="text-sm mb-2">
              Experience:{" "}
              <span className="text-red-600 font-semibold">
                {years_of_experience}
              </span>
            </p>
            <p className="text-sm mb-4">{description}</p>
            <p className="text-sm mb-2">
              Numbers of recipes:{" "}
              <span className="text-red-600 font-semibold">
                {num_of_recipes}
              </span>
            </p>
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <HiHandThumbUp className="text-base mr-2" />
                <p className="text-sm">{likes}</p>
              </div>
              <Link to={`chef/${id}`}>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  View Recipee
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheifDataMainPage;
