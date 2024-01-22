import ResturantCard from "./ResturantCard";
// import list from "../utils/constants";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfResturants, setListOfResturants] = useState([]);
  const [filteredListOfResturants, setFilteredListOfResturants] = useState([]);
  const [isTopRated, setIsTopRated] = useState(false);
  const [searchInput, setSearchInput] = useState("");

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

  return listOfResturants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search">
        <div className="input">
          <input
            type="text"
            value={searchInput}
            onChange={(e) => {
              setSearchInput(e?.target?.value);
            }}
          />
          <button
            className="filter-btn"
            onClick={() => {
              setFilteredListOfResturants(
                listOfResturants.filter((rest) =>
                  rest.info.name.toLowerCase().includes(searchInput.toLowerCase())
                )
              );
            }}
          >
            Search
          </button>
        </div>
        <div className="filter">
          {isTopRated ? (
            <button
              className="filter-btn"
              onClick={() => {
                setFilteredListOfResturants(listOfResturants);
                setIsTopRated(false);
              }}
            >
              Show All Resturants
            </button>
          ) : (
            <button
              className="filter-btn"
              onClick={() => {
                setIsTopRated(true);
                setFilteredListOfResturants(
                  listOfResturants.filter((item) => item.info.avgRating > 4)
                );
              }}
            >
              Filter top resturants
            </button>
          )}
        </div>
      </div>
      <div className="resturant-container">
        {filteredListOfResturants?.map((rest) => (
          <ResturantCard key={rest?.info?.id} resData={rest} />
        ))}
      </div>
    </div>
  );
};

export default Body;
