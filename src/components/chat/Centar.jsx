import MyFriendText from "./centarText/MyFriendText";
import MyText from "./centarText/MyText";
import ScrollView from "./ScrollView";

const Centar = () => {
  return (
    <div className="flex flex-col gap-5 p-5 flex-[1] overflow-y-auto h-full">
      {/* person text */}
      <MyFriendText />
      {/* own text */}
      <MyText />
      <MyFriendText />
      <MyText />
      <MyFriendText />
      <MyText />
      <MyFriendText />
      <MyText />
      <MyFriendText />
      <ScrollView />
    </div>
  );
};

export default Centar;
