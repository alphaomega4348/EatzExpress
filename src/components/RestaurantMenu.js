import {MenuShimmer} from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {

    const { resId } = useParams();
    const resInfo=useRestaurantMenu(resId);   
   

    if (resInfo === null) return <MenuShimmer />;

    const { name, cuisines, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info || {};
    const itemCards = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards || [];
    return (
        <div className="restaurant-menu-content">
            <div className="menu-items-container">
                <div className="menu-title-wrap">
                    <h1>{name}</h1>
                    <h4>{cuisines?.join(", ")} - {costForTwoMessage}</h4>
                </div>
                <div className="menu-items-list">
                    {itemCards.map((item, index) => {
                        const rating = item.card.info.ratings?.aggregatedRating?.rating || 0;
                        let ratingClass = '';
                        if (rating >= 4) ratingClass = 'rating-green';
                        else if (rating >= 3) ratingClass = 'rating-orange';
                        else if (rating >= 2) ratingClass = 'rating-yellow';
                        else if (rating > 0) ratingClass = 'rating-red';
                       return( <div key={index} className="menu-item">
                            <div className="menu-item-details">
                                <div className="item-title">{item.card.info.name}</div>
                                <div className="item-cost">Rs. {(item.card.info.price || item.card.info.defaultPrice) / 100}</div>
                                <div className="item-desc">{item.card.info.description||""}</div>
                                {rating > 0 && <div className={`item-rating ${ratingClass}`}>{rating + "⭐️"}</div>}
                            </div>
                            <div className="menu-img-wrapper">
                                <img
                                    className="menu-item-img"
                                    src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/" + item.card.info.imageId}
                                    alt={item.card.info.name}
                                />
                                <button className="add-btn">Add</button>
                            </div>
                        </div>)
})}
                </div>
            </div>
        </div>
    );
};

export default RestaurantMenu;
