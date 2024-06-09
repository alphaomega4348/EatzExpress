import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null);
    const { resId } = useParams();

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.0759837&lng=72.8776559&restaurantId=" + resId
        );
        const json = await data.json();
        setResInfo(json.data);
    };

    if (resInfo === null) return <Shimmer />;

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
                    {itemCards.map((item, index) => (
                        <div key={index} className="menu-item">
                            <div className="menu-item-details">
                                <div className="item-title">{item.card.info.name}</div>
                                <div className="item-cost">Rs. {(item.card.info.price || item.card.info.defaultPrice) / 100}</div>
                                <div className="item-desc">{(item.card.info.ratings?.aggregatedRating?.rating || 0) + "⭐️"}</div>
                            </div>
                            <div className="menu-img-wrapper">
                                <img
                                    className="menu-item-img"
                                    src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/" + item.card.info.imageId}
                                    alt={item.card.info.name}
                                />
                                <button className="add-btn">Add to Cart</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default RestaurantMenu;
