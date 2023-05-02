import React from "react";
import Header from "../Pages/Shared/Header/Header";
import Footer from "../Pages/Shared/Footer/Footer";
import LeftNavigateBar from "../Pages/Shared/LeftNavigateBar/LeftNavigateBar";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <div className="w-9/12 mx-auto mt-8">
        <div className="grid grid-cols-5">
          <div className="col-span-2">
            <LeftNavigateBar></LeftNavigateBar>
          </div>
          <div className="col-span-3">
            <h2>Middle is comming</h2>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
