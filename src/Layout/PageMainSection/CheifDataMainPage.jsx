import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const CheifDataMainPage = ({ chef }) => {
  const { id, name, picture } = useParams();
  return (
    <div>
      <div>
        <div className="">
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img src={chef.picture} alt="" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{chef.name}</h2>
              <p>{chef.description}</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">Fashion</div>
                <button className="btn glass text-pink-600">
                  View Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheifDataMainPage;
