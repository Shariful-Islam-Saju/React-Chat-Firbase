import Chat from "./components/chat/Chat";
import Detail from "./components/detail/Detail";
import List from "./components/list/List";
import Account from "./components/sign/Account";

function App() {
  const user = false;
  return (
    <div className=" container w-[90vw] h-[90vh] bg-gray-900  text-white border mt-7 border-white rounded-md  flex  ">
      {user ? (
        <>
          <List />
          <Chat />
          <Detail />
        </>
      ) : (
        <Account />
      )}
    </div>
  );
}

export default App;
