import { useState } from "react";
import ResturantCategoryItem from "./ResturantCategoryItem";

const ResturantCategory = ({category, expand, setExpand}) => {
  const selectedCategory = category.card.card;
  return (
    <div className="w-6/12 mx-auto my-8 p-4 shadow-2xl">
      <div
        className="m-2 flex justify-between cursor-pointer"
        onClick={() => {
          setExpand();
        }}
      >
        <span className="font-bold text-xl">
          {selectedCategory.title} ({selectedCategory?.itemCards?.length})
        </span>
        <span>{expand ? "🔼" : "🔽"}</span>
      </div>

      <div>
        {expand &&
          selectedCategory?.itemCards.map((item) => (
            <ResturantCategoryItem
              key={item.card.info.id}
              info={item?.card?.info}
            />
          ))}
      </div>
    </div>
  );
};

export default ResturantCategory;
