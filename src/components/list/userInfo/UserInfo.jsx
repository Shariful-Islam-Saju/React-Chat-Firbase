import React from "react";
import { FaRegEdit, FaVideo } from "react-icons/fa";
import { IoIosMore } from "react-icons/io";
import myImage from "../../../assets/avatar.png";
const UserInfo = () => {
  return (
    <div className="p-5 flex items-center justify-between">
      <div className="flex items-center gap-5">
        <img
          className="w-12 h-12 rounded-full object-cover"
          src={myImage}
          alt=""
        />
        <h2 className="font-medium">Saju</h2>
      </div>
      <div className="flex gap-5">
        <IoIosMore  className="w-5 h-5 cursor-pointer" />
        <FaVideo  className="w-5 h-5 cursor-pointer" />
        <FaRegEdit className="w-5 h-5 cursor-pointer" />
      </div>
    </div>
  );
};

export default UserInfo;
