import { IoIosArrowDropdownCircle } from "react-icons/io";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex((prevIndex) => (prevIndex === data.id ? null : data.id));
  };

  return (
    <div className="mx-auto my-4 w-6/12 p-4 bg-gray-200 rounded-md shadow-md">
      <div className="flex justify-between cursor-pointer" onClick={handleClick}>
        <span className="text-lg font-semibold text-gray-700">
          {data.title} ({data.itemCards.length})
        </span>
        <span className="text-gray-500 text-lg">
          <IoIosArrowDropdownCircle />
        </span>
      </div>
      {showItems && <ItemList items={data.itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
