import React from "react";
import { useLoaderData } from "react-router-dom";
import "./ChefDetailsInfo.css";
import { HiHandThumbUp } from "react-icons/hi2";

const ChefDetailsInfo = () => {
  const signleChefInfo = useLoaderData();

  return (
    <div className="">
      <div className=" bg-slate-100 md:w-9/12 mx-auto md:grid md:grid-cols-2 p-28 shadow-inner hover:shadow-lg ">
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
        <div className=" md:w-10/12 mx-auto my-10 ">
          <div className="md:grid grid-cols-3 ">
            {/* card details  */}
            <div className="card card-compact border w-96 bg-base-100 shadow-xl">
              <figure>
                <img className="p-6" src={signleChefInfo.recipes[0].img} />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{signleChefInfo.recipes[0].name}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>

                <p>Ingredients: {signleChefInfo.recipes[0].ingredients}</p>
                <p className="border p-2 ">
                  Cooking Method: {signleChefInfo.recipes[0].cooking_method}
                </p>
                <div className="card-actions justify-end">
                  <p>{signleChefInfo.recipes[0]?.rating}</p>
                  <button className="btn btn-primary ">Favorite</button>
                </div>
              </div>
            </div>

            {/* 2nd card  */}
            <div className="card card-compact border w-96 bg-base-100 shadow-xl">
              <figure>
                <img className="p-6" src={signleChefInfo.recipes[1].img} />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{signleChefInfo.recipes[1].name}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>

                <p>Ingredients: {signleChefInfo.recipes[1].ingredients}</p>
                <p className="border p-2 ">
                  Cooking Method: {signleChefInfo.recipes[1].cooking_method}
                </p>
                <div className="card-actions justify-end">
                  <p>{signleChefInfo.recipes[1]?.rating}</p>
                  <button className="btn btn-primary ">Favorite</button>
                </div>
              </div>
            </div>

            {/* 3rd card */}
            <div className="card card-compact border w-96 bg-base-100 shadow-xl">
              <figure>
                <img className="p-6" src={signleChefInfo.recipes[2].img} />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{signleChefInfo.recipes[2].name}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>

                <p>Ingredients: {signleChefInfo.recipes[2].ingredients}</p>
                <p className="border p-2 ">
                  Cooking Method: {signleChefInfo.recipes[2].cooking_method}
                </p>
                <div className="card-actions justify-end">
                  <p>{signleChefInfo.recipes[2]?.rating}</p>
                  <button className="btn btn-primary ">Favorite</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ChefDetailsInfo;