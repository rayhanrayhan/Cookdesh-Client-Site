import React from "react";

import Header from "../../Shared/Header/Header";
import PageMainSection from "../../../Layout/PageMainSection/PageMainSection";
import SectionOne from "../../Sections/SectionOne";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <SectionOne></SectionOne>
      <PageMainSection></PageMainSection>
    </div>
  );
};

export default Home;
