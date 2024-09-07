import React from "react";
import { useState } from "react";
import {
  FaCamera,
  FaMicrophone,
  FaRegImage,
  FaRegSmileWink,
} from "react-icons/fa";
import EmojiPicker from "emoji-picker-react";

const Bottom = () => {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  return (
    <div className="p-5 flex mt-auto items-center justify-between border-t-gray-600 border-t gap-5">
      <div className="flex gap-5">
        <FaRegImage />
        <FaCamera />
        <FaMicrophone />
      </div>
      <input
        onChange={(e) => {
          setText(e.target.value);
        }}
        value={text}
        className="border-none outline-none text-white bg-gray-950 py-2 px-3  rounded-lg"
        type="text"
        placeholder="Type a message"
      />
      <div>
        <FaRegSmileWink
          onClick={() => {
            setOpen(!open);
          }}
          className=" text-black bg-white text-2xl rounded-full border-none"
        />
      </div>
      <div className="relative max-w-10 bg-red-600">
        <div className="absolute bottom-12 z-10  left-0">
          <EmojiPicker
            onEmojiClick={(e) => {
              setText((prev) => prev + e.emoji);
            }}
            open={open}
          />
        </div>
      </div>

      <button className=" bg-blue-700 py-1 rounded-lg hover:bg-blue-400 duration-200 px-3">
        Send
      </button>
    </div>
  );
};

export default Bottom;
