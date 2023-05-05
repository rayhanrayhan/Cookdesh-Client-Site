import React from "react";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import "./ChefDetailsInfo.css";
import { HiHandThumbUp } from "react-icons/hi2";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaStar } from "react-icons/fa";
import { Rating, Star } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const ChefDetailsInfo = () => {
  const signleChefInfo = useLoaderData();
  const [showToast, setShowToast] = useState(false);
  const [disabledButtons, setDisabledButtons] = useState([]);

  const myStyles = {
    itemShapes: Star,
    activeFillColor: "#f89223",
    inactiveFillColor: "#fbf1a9",
  };

  const handleFavorite = (recipeIndex) => {
    if (!disabledButtons.includes(recipeIndex)) {
      // add recipeIndex to the list of disabled buttons
      setDisabledButtons([...disabledButtons, recipeIndex]);
      setShowToast(true);
      toast.success("Recipe added to favorites!");
    }
  };

  return (
    <div>
      <div>
        <div
          className="bg-gray-100 md:bg-transparent"
          style={{
            backgroundImage:
              "url('https://i.ibb.co/CJTpjvL/abstract-blur-defocused-hotel-lobby-interior.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center center",
          }}
        >
          <div className="md:w-9/12 mx-auto md:grid md:grid-cols-2 p-4 md:p-28 shadow-inner hover:shadow-lg ">
            {/* img div  */}
            <div>
              <img src={signleChefInfo.picture} alt="" />
              <h1 className="text-5xl text-white hover:bg-yellow-500 md:hover:bg-transparent font-bold text-center">
                {signleChefInfo.name}
              </h1>
            </div>
            {/* details div  */}
            <div className="md:py-20">
              <h1 className="text-3xl font-semibold text-red-600">
                {signleChefInfo.rank}
              </h1>

              <p className="font-serif my-2 hover:p-3 hover:text-white hover:bg-red-900 ease-in-out-300 transition-all">
                <span className="text-red-600 font-medium hover:text-yellow-600">
                  Chef Bio:
                </span>
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
        </div>

        {/* card setting */}

        <section className="">
          <div className=" md:w-10/12 mx-auto my-10  ">
            <div className="md:grid grid-cols-3 ">
              {/* card details  */}
              <div className="card card-compact border w-96 bg-base-100 shadow-xl">
                <figure>
                  <img className="p-6" src={signleChefInfo.recipes[0].img} />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">
                    {signleChefInfo.recipes[0].name}
                  </h2>

                  <p>Ingredients: {signleChefInfo.recipes[0].ingredients}</p>
                  <p className="border p-2 ">
                    Cooking Method: {signleChefInfo.recipes[0].cooking_method}
                  </p>
                  <div className="card-actions justify-between items-center">
                    <Rating
                      className="max-w-[80px]"
                      readOnly
                      value={signleChefInfo.recipes[0]?.rating}
                      itemStyles={myStyles}
                    />
                    <div>
                      <button
                        onClick={() => handleFavorite(0)}
                        className="btn btn-primary"
                        disabled={disabledButtons.includes(0)}
                      >
                        {disabledButtons.includes(0) ? "Saved" : "Favorite"}
                      </button>
                      {showToast && <ToastContainer />}
                    </div>
                  </div>
                </div>
              </div>

              {/* 2nd card  */}
              <div className="card card-compact border w-96 bg-base-100 shadow-xl">
                <figure>
                  <img className="p-6" src={signleChefInfo.recipes[1].img} />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">
                    {signleChefInfo.recipes[1].name}
                  </h2>

                  <p>Ingredients: {signleChefInfo.recipes[1].ingredients}</p>
                  <p className="border p-2 ">
                    Cooking Method: {signleChefInfo.recipes[1].cooking_method}
                  </p>
                  <div className="card-actions justify-between items-center">
                    <Rating
                      className="max-w-[80px]"
                      readOnly
                      value={signleChefInfo.recipes[1]?.rating}
                      itemStyles={myStyles}
                    />
                    <div>
                      <button
                        onClick={() => handleFavorite(1)}
                        className="btn btn-primary"
                        disabled={disabledButtons.includes(1)}
                      >
                        {disabledButtons.includes(1) ? "Saved" : "Favorite"}
                      </button>
                      {showToast && <ToastContainer />}
                    </div>
                  </div>
                </div>
              </div>

              {/* 3rd card */}
              <div className="card card-compact border w-96 bg-base-100 shadow-xl">
                <figure>
                  <img className="p-6" src={signleChefInfo.recipes[2].img} />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">
                    {signleChefInfo.recipes[2].name}
                  </h2>

                  <p>Ingredients: {signleChefInfo.recipes[2].ingredients}</p>
                  <p className="border p-2 ">
                    Cooking Method: {signleChefInfo.recipes[2].cooking_method}
                  </p>
                  <div className="card-actions justify-between items-center">
                    <Rating
                      className="max-w-[80px]"
                      readOnly
                      value={signleChefInfo.recipes[2]?.rating}
                      itemStyles={myStyles}
                    />
                    <div>
                      <button
                        onClick={() => handleFavorite(2)}
                        className="btn btn-primary"
                        disabled={disabledButtons.includes(2)}
                      >
                        {disabledButtons.includes(2) ? "Saved" : "Favorite"}
                      </button>
                      {showToast && <ToastContainer />}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ChefDetailsInfo;
