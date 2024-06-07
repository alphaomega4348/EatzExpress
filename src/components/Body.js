import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utils/mockData";
 const Body = () => {
    return (
      <div className="res-container">
        {restaurantList.map((restaurant) => {
          return <RestaurantCard key={restaurant.info.id} {...restaurant.info} />;
        })}
      </div>
    );
  };
export default Body;