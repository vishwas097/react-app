import { useDispatch } from "react-redux";
import { REST_LOGO } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ResturantCategoryItem = (props) => {
  const data = props.info;
  const dispatch = useDispatch();

  const hanldeEvent = (item) => {
    dispatch(addItem(item));
  };

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
        <img src={REST_LOGO + data.imageId} className="w-48 rounded-lg" />
          <button
            className="p-2 mx-10 rounded-lg bg-black text-white shadow-lg"
            onClick={() => hanldeEvent(data)}
          >
            Add +
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResturantCategoryItem;
