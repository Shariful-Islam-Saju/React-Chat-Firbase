import Chat from "./components/chat/Chat";
import Detail from "./components/detail/Detail";
import List from "./components/list/List";
import Account from "./components/sign/Account";
import Toastify from "./Toastify";

function App() {
  const user = false;

  return (
    <div className=" container w-[90vw] h-[90vh] bg-gray-800/90  text-white border mt-7 border-white rounded-md  flex  ">
      {user ? (
        <>
          <List />
          <Chat />
          <Detail />
        </>
      ) : (
        <Account />
      )}

      <Toastify />
    </div>
  );
}

export default App;
