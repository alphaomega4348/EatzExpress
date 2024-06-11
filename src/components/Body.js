import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
import { Shimmer } from "./Shimmer";
import Snake from "./Snake";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [List, setList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

  const onlineStatus = useOnlineStatus();

  if (!onlineStatus) {
    return <Snake />;
  }

  const { loggedInUser, setUserName } = useContext(UserContext);

  if (List.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="my-2 flex gap-4 justify-center items-center">
   
        <input
          type="text"
          className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none hover:border-blue-500 transition duration-200 ease-in-out"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
            const filteredRestaurants = List.filter((res) =>
              res?.info?.name.toLowerCase().includes(e.target.value.toLowerCase())
            );
            setFilteredList(filteredRestaurants);
            console.log(filteredList);
          }}
        />
        <button
          onClick={() => {
            const filterList = List.filter((res) => res.info.avgRating > 4);
            setFilteredList(filterList);
          }}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          View Top Restaurants
        </button>
        <label>Username:</label>
        <input
          type="text"
          className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none hover:border-blue-500 transition duration-200 ease-in-out"
          value={loggedInUser}
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>
      <div className="res-container">
        {
          filteredList.map((restaurant) => (
            <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id} className="restaurant-link">
              <RestaurantCard {...restaurant.info} />
            </Link>
          ))
        }
      </div>
    </div>
  );
};
export default Body;
