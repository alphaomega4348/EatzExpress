import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
 const Body = () => {
  const [List,setList]=useState([]);
  const dummy=List;
  const [searchText,setSearchText]=useState([""]);
  const fetchData= async() => {
    const data= await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
      const json=await data.json();
      console.log(json)   
      setList(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
  }
  useEffect(()=>{
    fetchData();
  },[])

  if(List.length === 0){
    return <Shimmer/>
  }
  
    return (
      <div className="body">
        <div className="filter">
        <div className="search-container">
            <input type="text" className="search-input" value={searchText} onChange={(e)=>{
              setSearchText(e.target.value)
            }}/>
            <button 
            onClick={()=>{
          const filteredRestaurants=    List.filter((res)=>(
                  res.info.name.toLowerCase().includes(searchText.toLowerCase() ) 
          ))
              setList(filteredRestaurants)
              
                
            }} 
            
            className="search-button"> Search</button>
        </div>
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