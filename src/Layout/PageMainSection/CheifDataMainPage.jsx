import React from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";

const CheifDataMainPage = ({ chef }) => {
  const { id, name, picture, description, years_of_experience } = chef;

  return (
    <div>
      <div>
        <div className="">
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img src={picture} alt="" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{name}</h2>
              <p>Experience: {years_of_experience}</p>
              <p>{description}</p>
              <div className="card-actions justify-end">
                {/* <div className="badge badge-outline">Fashion</div> */}
                <Link to={`chef/${id}`}>
                  <p>View Recipee</p>
                </Link>
              </div>
            </div>
            <div className="card-footer border p-4 ">
              <p>This is the footer section of the card.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheifDataMainPage;
