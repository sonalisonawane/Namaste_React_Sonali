import { Link } from "react-router-dom";
import RestaurantCard, { withDiscountInfo } from "./RestaurantCard";
import search_icon from "../../Assets/search_icon.png";
import useListRestaurants from "../utils/useListRestaurants/useListRestaurant";

export const Body = () => {
  const { allRestaurants, clickHandler } = useListRestaurants();

  const DiscountedRestaurants = withDiscountInfo(RestaurantCard);

  return (
    <div className="body">
      <div className="flex">
        <input
          id="search-restaurants"
          type="text"
          placeholder="Search Dishes"
          className="ml-25.25 mt-5 py-3 pl-10 w-2xl drop-shadow-xl bg-amber-600/45 rounded-lg"
        />
        <img
          id="search-icon"
          src={search_icon}
          alt="search-icon"
          className="mt-7 w-9.5 h-9.5 mr-2.5 -ml-13 z-2"
        />
        <button
          className="w-50 h-10 mt-5 mx-4.5 bg-amber-500 rounded-sm text-gray-200"
          onClick={clickHandler}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="grid grid-cols-4 items-start gap-6.25 justify-center mx-20 my-10">
        {allRestaurants.map((restaurant) => (
          <Link
            key={restaurant?.info?.id}
            to={"/restaurant-menu/" + restaurant.info.id}
          >
            { restaurant?.info?.aggregatedDiscountInfoV3 &&
Object.keys(restaurant.info.aggregatedDiscountInfoV3).length > 0 ? (
              <DiscountedRestaurants resData={restaurant?.info} />
            ) : (
              <RestaurantCard resData={restaurant?.info} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;