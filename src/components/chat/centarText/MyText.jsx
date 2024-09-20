import ImageCentar from "./ImageCentar";

const MyText = () => {
  return (
    <div className="w-[70%] ml-auto">
      <p className=" p-5 rounded-md text-left bg-blue-600">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea vel eum,
        repellendus placeat autem eveniet laboriosam reiciendis ratione unde nam
        eos. Voluptates maiores molestiae provident totam adipisci natus unde
        eum.
      </p>
      <ImageCentar />
      <span className=" p-2 text-sm text-gray-400"> 1 min ago</span>
    </div>
  );
};

export default MyText;
