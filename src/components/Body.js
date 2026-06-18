import RestaurantCard from "./RestaurantCard";
import search_icon from "../../Assets/search_icon.png";

import useListRestaurants from "../utils/useListRestaurants/useListRestaurant";

export const Body = () => {

 const{listOfRestaurant,clickHandler} = useListRestaurants();

  
    return (
        <div className="body">
            <div className="flex">
            <input id="search-restaurants" type="text" placeholder="Search Dishes" className="m-6 py-3 pl-10 w-2xl shadow-xl/30" />
            <img id="search-icon" src={search_icon} alt="search-icon" className="border-2 mt-18px size-2.5"/>
            <button className="w-50 h-10 mt-5  bg-amber-500 rounded-sm  text-gray-200" onClick={clickHandler}>
                    Top Rated Restaurants
            </button>
            </div>

            <div className="flex flex-wrap items-center justify-around">

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