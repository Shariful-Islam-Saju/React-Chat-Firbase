import React from "react";
import Login from "./Login";
import Register from "./Register";

const Account = () => {
  return (
    <div className="flex justify-between md:flex-row flex-col w-[90vw] rounded-lg  gap-3   bg-gray-900">
      <Login />
      <Register />
    </div>
  );
};

export default Account;
