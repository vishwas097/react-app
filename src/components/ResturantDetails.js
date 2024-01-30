import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useResturantMenu from "../utils/useResturantMenu";

const ResturantDetails = () => {
  const { resId } = useParams();

  const resDetails = useResturantMenu(resId);

  if (resDetails == null) return <Shimmer />;

  const {name, avgRating, areaName, costForTwoMessage} = resDetails;

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
