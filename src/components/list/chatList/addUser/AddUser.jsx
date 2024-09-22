import React from "react";

const AddUser = () => {
  return (
    <div className="bg-black/85 p-6 absolute top-0 bottom-0 left-0 right-0 m-auto w-max h-max rounded-lg shadow-lg">
      <form className="flex mb-4">
        <input
          type="text"
          placeholder="Username"
          className="flex-grow p-2 rounded-md text-black mr-3"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-800"
        >
          Search
        </button>
      </form>
      <div className="bg-white p-4 rounded-lg flex justify-between items-center shadow-md">
        <div className="flex items-center">
          <div className="bg-gray-800 text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold">
            A
          </div>
          <span className="ml-3 text-black font-medium text-lg">Jane Doe</span>
        </div>
        <button className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-800">
          Add User
        </button>
      </div>
    </div>
  );
};

export default AddUser;
