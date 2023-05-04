import React from "react";

import Header from "../../Shared/Header/Header";
import PageMainSection from "../../../Layout/PageMainSection/PageMainSection";
import SectionOne from "../../Sections/SectionOne";
import SectionTwo from "../../Sections/SectionTwo";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <SectionOne></SectionOne>
      <PageMainSection></PageMainSection>
      <SectionTwo></SectionTwo>
    </div>
  );
};

export default Home;
