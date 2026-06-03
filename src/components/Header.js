import {Link} from "react-router-dom";
import logo from '../../Assets/logo.png';

export default Header=()=>{
    return( 
    <div className="header">
     <div className="logo-container">
         <img className="logo" src={logo}></img>
    </div>
    <div className="nav-items">
         <ul>
             <li><Link to="/">Home</Link></li>
             <li><Link to="/about">About Us</Link></li>
             <li><Link to="/contact">Contact Us</Link></li>
             <li>Cart</li>
         </ul>
    </div>
     </div>
     )
 }