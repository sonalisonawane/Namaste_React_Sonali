import RestaurantCard from "./RestaurantCard";
import search_icon from "../../Assets/search_icon.png";
import { useEffect, useState } from "react";

export const Body = () => {

    const [listOfRestaurant, setListOfRestaurant] = useState([]);
    const [allRestaurants, setAllRestaurants] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const data = await fetch(
                "https://proxy.corsfix.com/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.6837923&lng=73.8082866&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
            );

            const json = await data.json();

            const restaurants =
                json?.data?.cards
                    ?.find(
                        (card) =>
                            card?.card?.card?.gridElements
                                ?.infoWithStyle?.restaurants
                    )
                    ?.card?.card?.gridElements?.infoWithStyle
                    ?.restaurants || [];

            console.log(restaurants);

            setListOfRestaurant(restaurants);
            setAllRestaurants(restaurants);

        } catch (error) {
            console.error(error);
        }
    };

    function clickHandler() {

        const filteredList = allRestaurants.filter(
            (res) => res?.info?.avgRating > 4.5
        );

        setListOfRestaurant(filteredList);
    }

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