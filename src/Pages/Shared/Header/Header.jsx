import React from "react";

import "./Header.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <div className="header-banner">
        <div className="banner-content">
          <h1 className="text-3xl md:text-7xl font-bold py-12">
            <span className="text-white "> WELCOME TO</span> <br />
            <span className="hover:text-green-700">COOKDESH</span>
            <br /> RESTAURANT
          </h1>
          <p className=" text-xs font-medium my-6 mr-8">
            Welcome to CookDesh Restaurant, located in Deptford, New Jersey,
            just minutes from Cherry Hill and Philadelphia. <br /> We are your
            proud hosts for elegant weddings, fine dining and memorable events,{" "}
            <br />
            and have been for the last three decades. We proudly extend to you
            our reputation for great food, <br /> professional and friendly
            staff, spacious accommodations and a popular lounge.
          </p>
          <Link to="/register" className="btn btn-primary ">
            Join With Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
