import { useState } from "react";
import ResturantCategoryItem from "./ResturantCategoryItem";

const ResturantCategory = (props) => {
  const [expand, setExpand] = useState(props.index == 0 ? true : false);
  const category = props.category.card.card;
  return (
    <div className="w-6/12 mx-auto my-10 p-4 shadow-2xl">
      <div
        className="m-2 flex justify-between"
        onClick={() => {
          setExpand(!expand);
        }}
      >
        <span className="font-bold text-xl">
          {category.title} ({category?.itemCards?.length})
        </span>
        <span>{expand ? "🔼" : "🔽"}</span>
      </div>

      <div>
        {expand &&
          category?.itemCards.map((item) => (
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
