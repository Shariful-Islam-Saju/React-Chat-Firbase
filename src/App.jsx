import Chat from "./components/chat/Chat";
import Detail from "./components/detail/Detail";
import List from "./components/list/List";

function App() {
  return (
    <div className=" container w-[90vw] h-[90vh] bg-gray-900  text-white border border-white rounded-md  flex ">
      <List />
      <Chat />
      <Detail />
    </div>
  );
}

export default App;
