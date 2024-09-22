import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaMinus, FaPlus } from "react-icons/fa";
import ListPerson from "./ListPerson";
import AddUser from "./addUser/AddUser";

const ChatList = () => {
  const [showMore, setShowMore] = useState(false);
  return (
    <div className="flex-[1] min-w-80 ">
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
          {showMore ? <FaMinus /> : <FaPlus />}
        </div>
      </div>{" "}
      {/* this is user list */}
      <div className="overflow-y-scroll scroll-m-0 max-h-[412px] ">
        <ListPerson />
        <ListPerson />
        <ListPerson />
        <ListPerson />
        <ListPerson />
        <ListPerson />
        <ListPerson />
      </div>
      {showMore && <AddUser />}
      {/* This is User List end */}
    </div>
  );
};

export default ChatList;
