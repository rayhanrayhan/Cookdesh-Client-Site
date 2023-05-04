import React from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";

import { HiHandThumbUp } from "react-icons/hi2";

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
        <div>
          <div className="card w-96 bg-base-100 hover:shadow-2xl hover:shadow-slate-600-100 shadow-inner ease-in-out duration-300">
            <figure>
              <img src={picture} alt="" />
            </figure>
            <div className="card-body ">
              <h2 className="card-title text-red-600  font-bold">{name}</h2>
              <p>
                Experience:{" "}
                <span className="text-red-600 font-semibold">
                  {years_of_experience}
                </span>
              </p>
              <p>{description}</p>
              <p className="text-normal">
                Numbers of recipes:{" "}
                <span className="text-red-600 font-semibold">
                  {num_of_recipes}
                </span>
              </p>
              <div className="card-actions justify-end">
                {/* <div className="badge badge-outline">Fashion</div> */}
                <Link to={`chef/${id}`}>
                  <button className="btn btn-outline btn-info px-6 my-2">
                    View Recipee
                  </button>
                </Link>
              </div>
            </div>
            <div className="card-footer border p-4 flex gap-1 justify-end items-center ">
              <p>{likes}</p>
              <HiHandThumbUp className="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheifDataMainPage;
