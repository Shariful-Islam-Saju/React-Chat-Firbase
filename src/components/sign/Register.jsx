import { useState, useEffect } from "react";
import AvatarImg from "../../assets/avatar.png";
import { Flip, toast } from "react-toastify";

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
  function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e);
    const form = Object.fromEntries(formData.entries());

    console.log(form);

    toast.success("Account Create", {
      position: "bottom-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
      transition: Flip,
    });
  }
  return (
    <div className="min-h-screen flex-[1] flex justify-center items-center">
      <div className="bg-white p-8 flex  justify-evenly flex-col rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-semibold text-gray-800 mb-2 text-center">
          Create An Account
        </h1>
        <form onSubmit={handleSubmit} className="space-y-3">
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
              name="profileImg"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <input
              type="text"
              placeholder="Username"
              name="name"
              className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              className="border border-gray-300 text-black rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500  via-purple-500 to-pink-500 text-white rounded-lg p-2 hover:opacity-90 transition duration-200"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
