import React from "react";
import Navber from "../Navber/Navber";
import banner from "./../../../assets/banner.png";
import "./Header.css";
const Header = () => {
  return (
    <div>
      <Navber></Navber>
      {/* banner section  */}

      {/* this is header  */}
      <div style={{ position: "relative" }}>
        <img className="bg-opacity-0" src={banner} alt="" />
        <h3 className="CookdeshTitle">CookDesh</h3>
        {/* welcome message  */}
        <h3 className="text-3xl font-semibold hover:text-red-600  my-5 text-center  ">
          WELCOME TO <br />
          <span className=" md:text-6xl font-serif hover:text-green-800">
            COOKDESH
          </span>
          <br /> RESTAURANT
        </h3>
        <p className=" description md:text-sm text-center w-9/12 md:font-semibold hover:text-red-700 mx-auto">
          Welcome to CookDesh Restaurant, located in Deptford, New Jersey, just
          minutes from Cherry Hill and Philadelphia. We are your proud hosts for
          elegant weddings, fine dining and memorable events, and have been for
          the last three decades. We proudly extend to you our reputation for
          great food, professional and friendly staff, spacious accommodations
          and a popular lounge.
        </p>
        <div></div>
      </div>
    </div>
  );
};

export default Header;
