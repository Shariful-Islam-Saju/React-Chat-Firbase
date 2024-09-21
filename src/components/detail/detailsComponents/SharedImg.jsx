import React from "react";
import profileImg from "../../../assets/avatar.png";
import { IoMdDownload } from "react-icons/io";
const SharedImg = () => {
  return (
    <div className="flex flex-col gap-5 ">
      <div className="flex justify-between items-center ">
        <div className=" flex items-center justify-center ">
          <img
            className="w-10 h-10 m-1 rounded-full mr-8 object-cover"
            src={profileImg}
            alt=""
          />
          <span className="text-sm text-gray-500 ">photo_2024_4.png</span>
        </div>{" "}
        <IoMdDownload className="w-5 h-5 mr-1 rounded-md object-cover" />
      </div>
    </div>
  );
};

export default SharedImg;
