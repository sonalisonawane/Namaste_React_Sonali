import {Link} from "react-router-dom";
import logo from '../../Assets/logo.png';
import useOnlineStatus from "../utils/useOnlineStatus/useOnlineStatus";



const Header=()=>{
    const onlineStatus = useOnlineStatus();
    return( 
    <div className="flex justify-between bg-amber-600 items-center font-bold">
    <Link to="/">
     <div className="logo-container">
         <img className="w-25 h-25" src={logo}></img>
    </div>
    </Link>
   
         <ul className="flex item-center justify-between">
             <li className="p-5">{onlineStatus?"online:🟢 ":"offline : 🔴"}</li>
             <li className="p-5"><Link to="/">Home</Link></li>
             <li className="p-5"><Link to="/about">About Us</Link></li>
             <li className="p-5"><Link to="/contact">Contact Us</Link></li>
             <li className="p-5">Cart</li>
         </ul>
   
     </div>
     )
 }
 export default Header;