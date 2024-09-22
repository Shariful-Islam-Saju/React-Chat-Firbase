import React from "react";
import Login from "./Login";
import Register from "./Register";

const Account = () => {
  return (
    <div className="flex overflow-hidden justify-between w-[90vw] h-[90vh]   gap-3   bg-gray-900">
      <Login />
      <Register />
    </div>
  );
};

export default Account;
