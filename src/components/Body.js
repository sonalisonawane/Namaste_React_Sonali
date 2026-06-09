import RestaurantCard from "./RestaurantCard";
import search_icon from "../../Assets/search_icon.png";

import useListRestaurants from "../utils/useListRestaurants/useListRestaurant";

export const Body = () => {

 const{listOfRestaurant,clickHandler} = useListRestaurants();

  
    return (
        <div className="body">

            <div className="search">
                <input type="text" placeholder="Search Dishes" />

                <img
                    id="search-icon"
                    src={search_icon}
                    alt="search-icon"
                />

                <button
                    className="filter-btn"
                    onClick={clickHandler}
                >
                    Top Rated Restaurants
                </button>
            </div>

            <div className="restaurant-container">

                {
                    listOfRestaurant.map((restaurant) => (
                        <RestaurantCard
                            key={restaurant?.info?.id}
                            resData={restaurant?.info}
                        />
                    ))
                }

            </div>

        </div>
    );
};

export default Body;