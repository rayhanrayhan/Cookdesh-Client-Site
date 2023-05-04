import React, { useContext } from "react";
import Header from "../Pages/Shared/Header/Header";
import Footer from "../Pages/Shared/Footer/Footer";

import { Outlet } from "react-router-dom";
import Navber from "../Pages/Shared/Navber/Navber";
import { AuthContext } from "../Providor/AuthProvider";
import { RiseLoader } from "react-spinners";

const Main = () => {
  const { loading, user } = useContext(AuthContext);
  let content;
  if (loading) {
    content = <RiseLoader color="#36d7b7" />;
  } else if (!loading) {
    content = <Outlet></Outlet>;
  }

  return (
    <div>
      <Navber></Navber>
      {content}
      <Footer></Footer>
    </div>
  );
};

export default Main;
