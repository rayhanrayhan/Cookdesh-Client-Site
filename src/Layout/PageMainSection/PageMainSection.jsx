import React, { useEffect, useState } from "react";
import CheifDataMainPage from "./CheifDataMainPage";

const PageMainSection = () => {
  const [cheifList, setCheifList] = useState([]);

  useEffect(() => {
    fetch(
      "https://cook-desh-clint-server-mdrayhanuddinremon02-gmailcom.vercel.app/cheif"
    )
      .then((res) => res.json())
      .then((data) => setCheifList(data))
      .catch((error) => console.error(error));
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-6 w-full  md:w-9/12 md:mx-auto  gap-6 mt-6  container ">
      {cheifList.map((chef) => (
        <CheifDataMainPage key={chef.id} chef={chef}></CheifDataMainPage>
      ))}
    </div>
  );
};

export default PageMainSection;
