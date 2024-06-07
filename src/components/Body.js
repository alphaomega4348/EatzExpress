import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utils/mockData";
import { useState } from "react";
 const Body = () => {
  const [List,setList]=useState(restaurantList);
    return (
      <div>
        <div className="filter">
          <button onClick={()=>{
            filterList=List.filter((res)=>res.info.avgRating
            >4)
            setList(filterList)
          }}
           className="filter-btn">View Top Resturants</button>
        </div>
      
      <div className="res-container">
        {List.map((restaurant) => {
          return <RestaurantCard key={restaurant.info.id} {...restaurant.info} />;
        })}
      </div>
      </div>
    );
  };
export default Body;