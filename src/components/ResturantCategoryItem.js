import { REST_LOGO } from "../utils/constants";

const ResturantCategoryItem = (props) => {
  const data = props.info;
  return (
    <div className=" border-b-4 m-6">
      <div className="flex p-4 justify-between">
        <div className="w-10/12 text-left">
          <p className="text-sm">{data.isVeg ? "🟩" : "🟥"} </p>
          <span className="text-md font-medium">
            {data.name} - {data.isVeg ? "Veg" : "Non Veg"}
          </span>
          <p className="text-md font-medium">
            ₹{data.price ? data.price / 100 : data.defaultPrice / 100}
          </p>
          <p className="font-light">{data.description}</p>
        </div>
        <div>
          <img src={REST_LOGO + data.imageId} className="w-20 rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default ResturantCategoryItem;
