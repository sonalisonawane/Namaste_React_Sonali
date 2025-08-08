import React from "react";
import ReactDOM from "react-dom/client";
import logo from './Assets/logo.png';
import search_icon from "./Assets/search_icon.png";
const Header=()=>{
   return( 
   <div className="header">
    <div className="logo-container">
        <img className="logo" src={logo}></img>
   </div>
   <div className="nav-items">
        <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
        </ul>
   </div>
    </div>)
}
const RestaurantCard =()=>{
    return(
        <div className="res-card">
            <img className="card-image" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/c627e55c996978a070c10079ae57f706" alt="meghana" />
            <h3>Meghana Foods</h3>
            <h4>Biryani,North Indian, Asian</h4>
            <h5>5 Stars</h5>
            <p>30 mins</p>
        </div>
    )
}
const Body = () =>{
    return(
        <div className="body">
            <div className="search">
                <input type="text" placeholder="Search Dishes" />
                <img id="search-icon" src={search_icon} alt="search-icon" />
            </div>
            <div className="restaurant-container">
             <RestaurantCard/>
             <RestaurantCard/>
             <RestaurantCard/>
             <RestaurantCard/>
             <RestaurantCard/>
             <RestaurantCard/>
            </div>
        </div>
    )
}
const AppLayout = ()=>{
    return(
        <div className="App">
          <Header/>
          <Body/>
          {/* //Footer   */}
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>)