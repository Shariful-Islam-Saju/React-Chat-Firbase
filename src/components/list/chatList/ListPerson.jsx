import React from "react";
import myImage from "../../../assets/avatar.png";

const ListPerson = () => {
  return (
    <div className="flex items-center gap-5 p-5 cursor-pointer  border-b-gray-600 border-b">
      <img
        className="w-10 h-10 rounded-full object-cover bg-gray-950 "
        src={myImage}
        alt=""
      />
      <div className="flex flex-col gap-2">
        <span className="font-medium">Jane</span>
        <p className="text-sm ">Hello</p>
      </div>
    </div>
  );
};

export default ListPerson;
