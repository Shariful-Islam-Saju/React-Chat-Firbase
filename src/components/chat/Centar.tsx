import React from "react";
import MyFriendText from "./centarText/MyFriendText";
import MyText from "./centarText/MyText";
const Centar = () => {
  return (
    <div className=" overflow-y-scroll flex flex-col gap-5 p-5 flex-[1] ">
      {/* person text */}
      <MyFriendText />

      {/* own text */}

      <MyText />
    </div>
  );
};

export default Centar;
