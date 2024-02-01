import { useEffect, useState } from "react";
import { MENU_LIST_API } from "./constants";

// Custom hook

const useResturantMenu = (resId) => {
  const [resDetails, setResDetails] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MENU_LIST_API + resId);
    const json = await data.json();
    setResDetails(json?.data);
  };

  return resDetails;
};

export default useResturantMenu;
