import { useEffect } from "react";
import { useParams } from "react-router-dom";

const RestaurantMenu = ()=>{
    const {id} = useParams();
    console.log(id)
    useEffect(()=>{
        fetchHandler();
    },[])

    const fetchHandler = async () => {
        try{
        const response = await fetch(`https://corsproxy.io/?url=${encodeURIComponent(
            `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.6837923&lng=73.8082866&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`)}`);
        const text = await response.text();
        console.log("Raw Response",text);
        if(!text){
            console.log("Empty response received");
            return;
        }
        const json = JSON.parse(text);
        console.log(json,"json");
        }catch(error){
            console.log("Error:",error);
        }
       
    }
    return(
    <>
    <h1></h1>
    <p>Ratings . Rs 350 for two</p>
    <ul className="menu">
        <li className="menu-items">Margherita</li>
        <li className="menu-items">Veggie Feast</li>
        <li className="menu-items">Tandoori Paneer</li>
        <li className="menu-items">Country Feast</li>
    </ul>
    </>
    )
}
export default RestaurantMenu;