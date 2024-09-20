import MyImg from "../../../assets/avatar.png";
import ImageCentar from "./ImageCentar";

const MyFriendText = () => {
  return (
    <div className="w-[70%]">
      <img
        className="block w-10 rounded-full bg-slate-950  "
        src={MyImg}
        alt=""
      />
      <div className="flex flex-col text-right">
        <ImageCentar />

        <p className="bg-gray-950  p-5 rounded-md text-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea vel eum,
          repellendus placeat autem eveniet laboriosam reiciendis ratione unde
          nam eos. Voluptates maiores molestiae provident totam adipisci natus
          unde eum. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Laboriosam est a facilis nisi optio repellendus delectus, at minus
          nobis tenetur. Excepturi quos aut ullam consequatur reiciendis optio
          laudantium, culpa nobis.
        </p>
        <span className=" p-2 text-sm text-gray-400"> 1 min ago</span>
      </div>
    </div>
  );
};

export default MyFriendText;
