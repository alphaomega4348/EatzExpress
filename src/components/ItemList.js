import { useDispatch } from "react-redux";
import { FaPlus } from "react-icons/fa";
import { MENU_CLOUDINARY } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({items}) => {

    const dispatch=useDispatch()

    const handleAddItem=()=>{
      dispatch(addItem("pizza"))
    }
  return (
    <div>
      {items.map((item, index) => (
        <div key={item.card.info.id} className={`flex justify-between items-start bg-white p-4 rounded shadow-lg w-full ${index < items.length - 1 ? 'border-b border-gray-400' : ''}`}>
          <div>
            <span className="block text-lg font-semibold text-gray-700 mb-1">{item.card.info.name}</span>
            <span className="block text-lg font-semibold text-gray-700 mb-4">₹ {item.card.info.price/100 || item.card.info.defaultPrice/100}</span>
            <span className="block text-sm text-gray-500 mb-4">{item.card.info.description}</span>
          </div>
          <div className="mr-2 flex flex-col items-end">
            <img className=" w-32 object-contain mb-2" src={MENU_CLOUDINARY + item.card.info.imageId} alt="" />
            <div className="relative">
              <button className="w-28 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleAddItem}>Add</button>
              <FaPlus className="absolute top-0 right-0 mt-[0.5px] mr-[1px] text-sm"/>
            </div>
          </div>
        </div>
      ))}
    </div> 
  )
}

export default ItemList