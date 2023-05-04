import React from "react";
import logo from "./../../../assets/logo.png";
import { Link } from "react-router-dom";

const Navber = () => {
  return (
    <div className="bg-[#363a3b] bg-opacity-40 fixed w-full z-50">
      <div className="   flex justify-between items-center w-9/12 mx-auto  ">
        {/* logo  */}
        <div className="">
          <Link href="">
            <img className="  w-24 pt-2" src={logo} alt="Cookdesh" />
          </Link>
        </div>

        {/* nav link  */}
        <div className="">
          <ul className="flex gap-4 text-white font-bold">
            {/* Add justify-center here */}
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/login">Login</Link>
          </ul>
        </div>
        {/* profile img  */}
        <div>
          <div className="flex-none gap-2">
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={logo} />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
              >
                <li></li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navber;
