import React from "react";

const Login = () => {
  return (
    <div className="flex-[1]">
      <h1>Welcome Back,</h1>
      <form>
        <input type="text" placeholder="email" />
        <input type="text" placeholder="password" />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default Login;
