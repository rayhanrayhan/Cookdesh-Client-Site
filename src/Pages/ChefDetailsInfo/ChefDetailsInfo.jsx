import React from "react";
import { useLoaderData } from "react-router-dom";
import "./ChefDetailsInfo.css";
import { HiHandThumbUp } from "react-icons/hi2";

const ChefDetailsInfo = () => {
  const signleChefInfo = useLoaderData();

  return (
    <div className="">
      <div className=" bg-slate-100 w-9/12 mx-auto grid md:grid-cols-2 p-28 shadow-inner hover:shadow-lg ">
        {/* img div  */}
        <div>
          <img src={signleChefInfo.picture} alt="" />
          <h1 className=" text-5xl font-bold text-center">
            {signleChefInfo.name}
          </h1>
        </div>
        {/* details div  */}
        <div className="md:py-20">
          <h1 className=" text-3xl font-semibold text-red-600">
            {signleChefInfo.rank}
          </h1>

          <p className="font-serif my-2">
            <span className="text-red-600 font-medium">Chef Bio:</span>
            {signleChefInfo.chef_bio}
          </p>

          <h4 className="text-1xl ">
            Years Of Experience:{" "}
            <span className="text-red-600 font-bold">
              {signleChefInfo.years_of_experience}
            </span>
          </h4>

          <div className="md:flex md:justify-between">
            <h4 className="text-1xl ">
              Years Of Experience:{" "}
              <span className="text-red-600 font-bold">
                {signleChefInfo.num_of_recipes}
              </span>
            </h4>
            <div className="md:flex items-center gap-1">
              <p>{signleChefInfo.likes}</p>
              <HiHandThumbUp className="" />
            </div>
          </div>
        </div>
      </div>

      {/* card setting */}

      <section>
        <div>
          <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure>
              <img src="" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{signleChefInfo.recipes[0].name}</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ChefDetailsInfo;
