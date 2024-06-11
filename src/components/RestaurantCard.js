import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
  }) => {
    
    return (
      <div className="res-card">
        <img 
          src={
            CDN_URL +
            cloudinaryImageId
          }
        />
        <div className="font-bold  my-3">{name}</div>
        <div className="text-gray-700 font-light" >{cuisines.join(", ")}</div>
        <div className=" mt-1 font-mono font-bold">{avgRating+"⭐️"}</div>
      </div>
    );
  };
  export default RestaurantCard