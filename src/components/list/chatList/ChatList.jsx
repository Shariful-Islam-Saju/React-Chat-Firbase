import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaMinus, FaPlus } from "react-icons/fa";
import myImage from "../../../assets/avatar.png";

const ChatList = () => {
  const [showMore, setShowMore] = useState(true);
  return (
    <div className="flex-[1] overflow-y-scroll scroll-m-0">
      <div className="flex items-center gap-5 p-5">
        <div className="flex-[1] bg-gray-950 flex items-center gap-5 rounded-md py-1 px-2">
          <CiSearch className="text-xl font-bold" />
          <input
            className="bg-transparent border-none outline-none text-white flex-[1]"
            type="text"
            placeholder="Search"
          />
        </div>
        <div
          onClick={() => {
            setShowMore(!showMore);
          }}
          className="flex items-center justify-center p-2 rounded-md  bg-gray-950 "
        >
          {showMore ? <FaPlus /> : <FaMinus />}
        </div>
      </div>{" "}
      {/* this is user list */}
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
      </div>{" "}
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
      </div>{" "}
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
      </div>{" "}
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
      </div>{" "}
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
      </div>{" "}
      {/* This is User List end */}
    </div>
  );
};

export default ChatList;
