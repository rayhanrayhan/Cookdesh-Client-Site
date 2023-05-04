import React from "react";
import logo from "./../../../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = ({ isLoggedIn, userName }) => {
  return (
    <div className="bg-[#363a3b] bg-opacity-40 fixed w-full z-50">
      <div className="flex justify-between items-center w-11/12 mx-auto lg:w-9/12">
        {/* logo  */}
        <div className="">
          <Link to="/">
            <img className="w-24 pt-2" src={logo} alt="Cookdesh" />
          </Link>
        </div>

        {/* nav link  */}
        <div className="">
          <ul className="flex gap-4 text-white font-bold">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/blog">Blog</Link>
            {isLoggedIn ? (
              <li className="relative">
                <button className="btn btn-ghost">
                  {userName && (
                    <span className="hidden md:inline">{userName}</span>
                  )}
                  <svg
                    className="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0-8a4.99 4.99 0 0 0-4.8 3.6 1 1 0 0 0 .8 1.4h8.6a1 1 0 0 0 .8-1.4A4.99 4.99 0 0 0 12 7z"></path>
                  </svg>
                </button>
                <ul className="absolute right-0 py-2 bg-white shadow rounded-md w-48">
                  <li>
                    <a href="#" className="block px-4 py-2 text-gray-800">
                      Settings
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 text-gray-800">
                      Logout
                    </a>
                  </li>
                </ul>
              </li>
            ) : (
              <Link to="/login">Login</Link>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
