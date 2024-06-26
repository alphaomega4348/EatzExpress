import React from "react";
import { useDispatch } from "react-redux";
import { FaPlus, FaMinus } from "react-icons/fa";
import { MENU_CLOUDINARY } from "../utils/constants";
import { addItem, removeItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  const handleRemoveItem = (item) => {
    dispatch(removeItem(item));
  };

  return (
    <div className="w-full">
      {items.map((item, index) => (
        <div
          key={item.card.info.id}
          className={`flex justify-between items-start bg-white p-4 rounded shadow-lg w-full mb-4`}
        >
          <div>
            <span className="block text-lg font-semibold text-gray-700 mb-1">
              {item.card.info.name}
            </span>
            <span className="block text-lg font-semibold text-gray-700 mb-2">
              ₹ {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
            </span>
            <span className="block text-sm text-gray-500 mb-2">
              {item.card.info.description}
            </span>
          </div>
          <div className="mr-2 flex flex-col items-end">
            <img
              className="w-32 h-32 object-contain mb-2"
              src={MENU_CLOUDINARY + item.card.info.imageId}
              alt={item.card.info.name}
            />
            <div className="flex items-center space-x-2">
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                onClick={() => handleRemoveItem(item)}
              >
                <FaMinus />
              </button>
              <span className="text-lg font-semibold">{item.quantity || 1}</span>
              <button
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded"
                onClick={() => handleAddItem(item)}
              >
                <FaPlus />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
