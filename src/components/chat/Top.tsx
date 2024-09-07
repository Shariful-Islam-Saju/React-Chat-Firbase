import React from "react";
import { FaInfo, FaVideo } from "react-icons/fa";
import { IoCallSharp } from "react-icons/io5";
import userImg from "../../assets/avatar.png";


const Top = () => {
  return (
    <div className="p-5 flex items-center justify-between border-b border-b-gray-500">
      <div className="flex items-center gap-5">
        <img
          className="w-14 h-14 rounded-full object-cover"
          src={userImg}
          alt=""
        />
        <div className="flex flex-col gap-1">
          <span className="text-lg font-bold">Jana Doe</span>
          <p className="text-sm text-gray-400">Lorem ipsum dolor sit.</p>
        </div>
      </div>

      <div className="flex gap-5">
        <IoCallSharp />
        <FaVideo />
        <FaInfo />
      </div>
    </div>
  );
};

export default Top;
