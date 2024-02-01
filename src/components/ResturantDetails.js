import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useResturantMenu from "../utils/useResturantMenu";
import ResturantCategory from "./ResturantCategory";

const ResturantDetails = () => {
  const { resId } = useParams();

  const resDetails = useResturantMenu(resId);

  if (resDetails == null) return <Shimmer />;
  const categories =
    resDetails?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (category) =>
        category.card.card["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  const { name, avgRating, areaName, costForTwoMessage, cuisines } =
    resDetails.cards[0].card?.card?.info;

  return (
    <div className="text-center bg-gray-50">
      <div>
        <h2 className="font-bold text-2xl py-6">{name}</h2>
        <div>
          <span className="font-bold">
            {cuisines.join(", ")} - {costForTwoMessage}
          </span>
        </div>
        <div className="m-6">
          {categories.map((category, index) => (
            <ResturantCategory
              key={category?.card?.card?.title}
              category={category}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResturantDetails;
