import React from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import SharedImg from "./SharedImg";

const Options = () => {
  return (
    <div className="flex flex-col p-5 gap-3 ">
      <div>
        <div className="flex items-center justify-between">
          <span> Chat Setting</span>
          <FaArrowUp className="w-7 h-7 p-2 rounded-full cursor-pointer bg-slate-800" />
        </div>
      </div>
      <div>
        <div className="flex items-center justify-between">
          <span> Privacy & Help</span>
          <FaArrowUp className="w-7 h-7 p-2 rounded-full cursor-pointer bg-slate-800" />
        </div>
      </div>
      <div>
        <div className="flex items-center justify-between">
          <span> Shared Photos</span>
          <FaArrowDown className="w-7 h-7 p-2 rounded-full cursor-pointer bg-slate-800" />
        </div>

        <div className="max-h-[190px] overflow-hidden">
          <SharedImg />
          <SharedImg />
          <SharedImg />
          <SharedImg />
          <SharedImg />
          <SharedImg />
          <SharedImg />
        </div>
      </div>
      <div>
        <div className="flex items-center justify-between">
          <span> Shared File</span>
          <FaArrowUp className="w-7 h-7 p-2 rounded-full cursor-pointer bg-slate-800" />
        </div>
      </div>{" "}
      <button className="bg-red-500 py-1 rounded-md">Block User</button>
    </div>
  );
};

export default Options;
