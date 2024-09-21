import React from "react";

import profileImg from "../../../assets/avatar.png";
const DetailsHeader = () => {
  return (
    <div className=" flex flex-col py-3 items-center px-5 gap-3 border">
      <img className="w-14 h-14 rounded-full object-cover" src={profileImg} alt="" />
      <h2>Shariful Islam</h2>
      <p>Hello, My name is Shariful Islam.</p>
    </div>
  );
};

export default DetailsHeader;
