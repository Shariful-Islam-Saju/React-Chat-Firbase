import React from "react";
import Login from "./Login";
import Register from "./Register";

const Account = () => {
  return (
    <div className="flex overflow-hidden justify-between w-[90vw] h-[90vh]   gap-3  bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500">
      <Login />
      <Register />
    </div>
  );
};

export default Account;
