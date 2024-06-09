import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
const RestaurantMenu = () => {
    const[resInfo,setresInfo]=useState(null)
    const {resId}=  useParams();
        useEffect(()=>{
            fetchMenu()
        },[])
    const fetchMenu= async ()=>{
       const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.0759837&lng=72.8776559&restaurantId="+resId)
       const json = await data.json()
       setresInfo(json.data)
    }
    if (resInfo===null) return <Shimmer/> 
         
        const {name,cuisines,costForTwoMessage }=resInfo?.cards[2]?.card?.card?.info || {};
       const {itemCards}=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
        return  (
            <div className='menu'>
                <h1>{name}</h1>
                <h4>{cuisines.join(", ")} - {costForTwoMessage}</h4> 
                <ul className="menu-items">
                {itemCards.map((item, index) => (
                <li key={index} className="menu-item">
                    <div className="item-name">{item.card.info.name}</div>
                    <div className="item-rating">{item.card.info.ratings.aggregatedRating.rating}⭐️</div>
                    <div className="item-price">Price: Rs. {item.card.info.price/100 || item.card.info.defaultPrice/100 } </div>
                    <button className="add-to-cart">Add to Cart</button>
                </li>
            ))}
                </ul>
            </div>
        )
}
export default RestaurantMenu



