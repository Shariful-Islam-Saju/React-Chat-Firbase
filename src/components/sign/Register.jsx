import { useState, useEffect } from "react";
import AvatarImg from "../../assets/avatar.png";

const Register = () => {
  const [avatar, setAvatar] = useState({
    file: null,
    url: "",
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setAvatar({
        file,
        url: URL.createObjectURL(file),
      });
    } else {
      alert("Please upload a valid image file.");
    }
  };

  useEffect(() => {
    return () => {
      if (avatar.url) {
        URL.revokeObjectURL(avatar.url);
      }
    };
  }, [avatar.url]);

  return (
    <div className="flex-[1] justify-center   w-full items-center">
      <div className="bg-white p-8 flex h-[87vh] jue flex-col rounded-lg shadow-md ">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Create An Account
        </h1>
        <form className="space-y-6">
          <div className="flex flex-col items-center">
            <label htmlFor="file" className="cursor-pointer">
              <div className="relative">
                <img
                  src={avatar.url || AvatarImg}
                  alt="Avatar Preview"
                  className="w-32 h-32 rounded-full object-cover border border-gray-300"
                />
                <span className="absolute bottom-0 right-0 bg-blue-500 p-1.5 rounded-full text-white text-sm">
                  Upload
                </span>
              </div>
            </label>
            <input
              type="file"
              id="file"
              accept="image/*"
              style={{ display: "none" }}
              onChange={handleImageChange}
            />
          </div>
          <div className="flex flex-col space-y-2">
            <input
              type="text"
              placeholder="Username"
              className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
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
            className="w-full bg-blue-500 text-white rounded-lg p-2 hover:bg-blue-600 transition duration-200"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
