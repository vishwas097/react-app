import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";

const ResturantDetails = () => {
  const { resId } = useParams();
  const [resDetails, setResDetails] = useState(null);
  const [foodList, setFoodList] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9260193&lng=77.5167955&restaurantId="+resId
    );
    const json = await data.json();
    setResDetails(json?.data?.cards[0].card?.card?.info);
    setFoodList(json?.data?.cards[2].groupedCard.cardGroupMap.REGULAR);
  };

  if (resDetails == null) return <Shimmer />;

  const {name, avgRating, areaName, costForTwoMessage} = resDetails;
  console.log(foodList);

  return (
    <div>
      <h2>{name}</h2>
      <h5>{avgRating} stars</h5>
      <h5>{areaName}</h5>
      <h5>{costForTwoMessage}</h5>
    </div>
  );
};

export default ResturantDetails;
