import React from "react";

const Login = () => {
  return (
    <div className="min-h-screen  flex-[1] flex justify-center items-center">
      <div className="bg-white p-8 flex flex-col justify-evenly  rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
          Welcome Back
        </h1>
        <form className="space-y-6">
          <div className="flex flex-col space-y-2">
            <input
              type="email"
              placeholder="Email"
              className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="password"
              placeholder="Password"
              className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white rounded-lg p-2 hover:opacity-90 transition duration-200"
          >
            Sign In
          </button>
        </form>
        <p className="text-center text-gray-500 mt-4">
          Don’t have an account?{" "}
          <a href="/register" className="text-blue-500 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
