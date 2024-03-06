import { useContext } from "react";
import { REST_LOGO } from "../utils/constants";
import UserContext from "../utils/userContext";

const ResturantCard = (props) => {
  const { loggedInUser } = useContext(UserContext);
  const { name, cuisines, avgRating, costForTwo } = props.resData.info;
  return (
    <div data-testid="resCard"
    className="m-4 p-4 rounded-lg bg-gray-100 w-60 hover:bg-gray-200">
      <img
        className="rounded-2xl"
        src={REST_LOGO + props.resData.info.cloudinaryImageId}
      />
      <h2>{name}</h2>
      <h5 className="resturant-cuisines">{cuisines?.join(", ")}</h5>
      <h5>{avgRating} stars</h5>
      <h5>{costForTwo}</h5>
    </div>
  );
};

export const withPromotedResturant = (ResturantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute m-2 p-2 bg-black text-white rounded-xl">
          Promoted
        </label>
        <ResturantCard {...props} />
      </div>
    );
  };
};

export default ResturantCard;
