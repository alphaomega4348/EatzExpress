import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utils/mockData";
 const Body = () => {
    return (
      <div>
        <div className="filter">
          <button className="filter-btn">View Top Resturants</button>
        </div>
      
      <div className="res-container">
        {restaurantList.map((restaurant) => {
          return <RestaurantCard key={restaurant.info.id} {...restaurant.info} />;
        })}
      </div>
      </div>
    );
  };
export default Body;