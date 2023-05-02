import React from "react";
import Header from "../Pages/Shared/Header/Header";
import Footer from "../Pages/Shared/Footer/Footer";
import PageMainSection from "./PageMainSection/PageMainSection";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <PageMainSection></PageMainSection>
      <Footer></Footer>
    </div>
  );
};

export default Main;
