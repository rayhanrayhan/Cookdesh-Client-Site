import React from "react";
import Navber from "../Navber/Navber";

const Header = () => {
  return (
    <div>
      <Navber></Navber>

      {/* this is header  */}
      <div className="bg-red-600">
        <h2>This is header</h2>
      </div>
    </div>
  );
};

export default Header;
