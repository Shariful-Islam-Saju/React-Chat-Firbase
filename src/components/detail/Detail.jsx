import DetailsHeader from "./detailsComponents/DetailsHeader";
import Options from "./detailsComponents/Options";

const Detail = () => {
  return (
    <div className="flex-[1] min-w-[300px]">
      <DetailsHeader />
      <Options />
    </div>
  );
};

export default Detail;
