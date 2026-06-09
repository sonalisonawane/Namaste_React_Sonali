import {useEffect,useState} from 'react';


const useListRestaurants = () => {

    const [listOfRestaurant, setListOfRestaurant] = useState([]);
    const [allRestaurants, setAllRestaurants] = useState([]);
    
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
      const data = await fetch("https://proxy.corsfix.com/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.6837923&lng=73.8082866&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
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
                setListOfRestaurant(restaurants);
                setAllRestaurants(restaurants);
}
function clickHandler() {

  const filteredList = allRestaurants.filter(
      (res) => res?.info?.avgRating > 4.5
  );

  setListOfRestaurant(filteredList);
}

return{listOfRestaurant,allRestaurants,clickHandler}

}

export default useListRestaurants;