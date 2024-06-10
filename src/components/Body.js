import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import {Shimmer} from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
 const Body = () => {
  const [List,setList]=useState([]);
  const [filteredList,setfilteredList]=useState([]);
  const [searchText,setSearchText]=useState([""]);
  useEffect(()=>{
    fetchData();
  },[])
  const fetchData= async() => {
    const data= await fetch(
      // https://thingproxy.freeboard.io/fetch/
      "https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
      const json=await data.json(); 
      setList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
      setfilteredList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }
    const onlineStatus=useOnlineStatus();

    if(!onlineStatus){
      return <h1>Looks Like you are offline!! Please Check your Internet connection</h1>
    }


  if(List.length === 0){
    console.log("hi1");
    return <Shimmer/>
  }
  
    return (
      <div className="body">
        <div className="filter">
        <div className="search-container">
        <input placeholder="Search for restaurants"
    type="text" 
    className="search-input" 
    value={searchText} 
    onChange={(e)=>{
        setSearchText(e.target.value);
        const filteredRestaurants = List.filter((res) => (
            res?.info?.name.toLowerCase().includes(e.target.value.toLowerCase())
        )); 
        setfilteredList(filteredRestaurants);
        console.log(filteredList)
    }}
/>
        </div>
          <button onClick={()=>{
           const filterList=List.filter((res)=>res.info.avgRating
            >4)
            setfilteredList(filterList)
          }}
           className="filter-btn">View Top Resturants</button>
        </div>
      
      <div className="res-container">
        {filteredList.map((restaurant) => {
          return filteredList.length===0?(<h1>Oops No Such Restaurants</h1> ) :( <Link key={restaurant.info.id} to ={"/restaurants/"+restaurant.info.id} className="restaurant-link">
          <RestaurantCard  {...restaurant.info} />
      </Link>)
        })}
      </div> 
      </div>
    );
  };
export default Body;