import React from "react";
import Login from "./Login";
import Register from "./Register";

const Account = () => {
  return (
    <div className="flex justify-between w-[90vw] h-[90vh] p-2">
      <Login />
      <Register />
    </div>
  );
};

export default Account;
