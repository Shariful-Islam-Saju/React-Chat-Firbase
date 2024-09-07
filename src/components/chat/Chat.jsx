import Top from "./Top";
import Centar from "./Centar";
import Bottom from "./Bottom";
const Chat = () => {
  return (
    <div className="flex-[2] flex flex-col border-r-gray-600 border-r h-full">
      {/* Top section */}

      <Top />
      {/* Centar Section */}
      <Centar />
      {/* Bottom Section */}
      <Bottom />
    </div>
  );
};

export default Chat;
