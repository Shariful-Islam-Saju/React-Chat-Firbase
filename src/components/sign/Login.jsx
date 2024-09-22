import { Flip, toast } from "react-toastify";

const Login = () => {
  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const { email, password } = Object.fromEntries(formData.entries());
    // try {
    // } catch (error) {}

    toast.success("Sign In SuccessFul", {
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
    <div className="min-h-screen  flex-[1] flex justify-center items-center">
      <div className="bg-white p-8 flex flex-col justify-evenly  rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
          Welcome Back
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col space-y-2">
            <input
              type="email"
              placeholder="Email"
              name="email"
              className="border border-gray-300 rounded-lg p-2 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              className="border border-gray-300 rounded-lg p-2 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500  via-purple-500 to-pink-500 text-white rounded-lg p-2 hover:opacity-90 transition duration-200"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
