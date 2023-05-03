import React, { useEffect, useState } from "react";
import CheifDataMainPage from "./CheifDataMainPage";

const PageMainSection = () => {
  const [cheifList, setCheifList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/cheif")
      .then((res) => res.json())
      .then((data) => setCheifList(data))
      .catch((error) => console.error(error));
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-6 w-9/12 mx-auto gap-20 mt-6">
      {cheifList.map((chef) => (
        <CheifDataMainPage key={chef.id} chef={chef}></CheifDataMainPage>
      ))}
    </div>
  );
};

export default PageMainSection;
