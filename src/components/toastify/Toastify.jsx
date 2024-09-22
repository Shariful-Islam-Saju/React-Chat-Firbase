import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const Toastify = () => {
  return (
    <div>
      <ToastContainer
        position="bottom-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition:Flip
      />
    </div>
  );
};

export default Toastify;
