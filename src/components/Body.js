import ResturantCard, { withPromotedResturant } from "./ResturantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfResturants, setListOfResturants] = useState([]);
  const [filteredListOfResturants, setFilteredListOfResturants] = useState([]);
  const [isTopRated, setIsTopRated] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const online = useOnlineStatus();
  const ResturantCardPromoted = withPromotedResturant(ResturantCard);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9260193&lng=77.5167955&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setListOfResturants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredListOfResturants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  if (!online) return <h1>You are offline!</h1>;

  return listOfResturants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="bg-gray-100">
      <div className="flex justify-center items-center">
        <div className="m-4">
          <input
            className="border border-solid border-black"
            type="text"
            value={searchInput}
            onChange={(e) => {
              setSearchInput(e?.target?.value);
            }}
          />
          <button
            className="px-4 py-2 mx-4 bg-green-200 rounded-lg"
            onClick={() => {
              setFilteredListOfResturants(
                listOfResturants.filter((rest) =>
                  rest.info.name
                    .toLowerCase()
                    .includes(searchInput.toLowerCase())
                )
              );
            }}
          >
            Search
          </button>
        </div>
        <div className="p-4">
          {isTopRated ? (
            <button
              className="px-4 py-2 mx-4 bg-green-200 rounded-lg"
              onClick={() => {
                setFilteredListOfResturants(listOfResturants);
                setIsTopRated(false);
              }}
            >
              Show All Resturants
            </button>
          ) : (
            <button
              className="px-4 py-2 mx-4 bg-gray-200 rounded-lg"
              onClick={() => {
                setIsTopRated(true);
                setFilteredListOfResturants(
                  listOfResturants.filter((item) => item.info.avgRating > 4.5)
                );
              }}
            >
              Filter top resturants
            </button>
          )}
        </div>
      </div>
      <div>
        <div className="mx-4 px-2 justify-center">
          <label className="font-bold text-lg">
            Restaurants with online food delivery in Bangalore
          </label>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredListOfResturants?.map((rest) => (
          <Link
            to={"/resturants/" + rest?.info?.id}
            key={rest?.info?.id}
            className="no-decoration"
          >
            {rest?.info?.avgRating > 4.5 ? (
              <ResturantCardPromoted resData={rest} />
            ) : (
              <ResturantCard resData={rest} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
