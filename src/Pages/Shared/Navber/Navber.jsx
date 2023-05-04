import React, { useContext, useState } from "react";
import logo from "./../../../assets/logo.png";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providor/AuthProvider";

const Navbar = ({ isLoggedIn, userName }) => {
  const { user, logOut } = useContext(AuthContext);
  const [show, setShow] = useState(false);

  return (
    <div className="bg-[#363a3b] bg-opacity-40 fixed w-full z-50">
      <div className="md:flex justify-between items-center w-11/12 mx-auto lg:w-9/12">
        {/* logo  */}
        <div className="">
          <Link to="/">
            <img className="w-24  pt-2" src={logo} alt="Cookdesh" />
          </Link>
        </div>

        {/* nav link  */}
        <div className="">
          <ul className="flex justify-around gap-4 text-white font-bold">
            <Link to="/">Home</Link>
            <Link to="/blog">Blog</Link>
            {user ? (
              <li>
                <div
                  className="relative z-10"
                  onMouseEnter={() => setShow(true)}
                  onMouseLeave={() => setShow(false)}
                >
                  <img
                    className="w-14 h-14 rounded-full"
                    src={user?.photoURL}
                    alt=""
                  />

                  <ul
                    className={
                      show
                        ? "absolute scale-100 transition-all duration-300 z-50 right-0 py-2 bg-white shadow rounded-md w-48"
                        : "absolute scale-0  transition-all duration-300  z-50 right-0 py-2 bg-white shadow rounded-md w-48"
                    }
                  >
                    <li>
                      <a href="#" className="block px-4 py-2 text-gray-800">
                        {user?.displayName}
                      </a>
                    </li>
                    <li>
                      <button
                        onClick={() => logOut()}
                        className="block px-4 py-2 text-gray-800"
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
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
