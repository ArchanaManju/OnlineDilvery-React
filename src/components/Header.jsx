import { Link } from "react-router-dom";
import { AppLogo_url } from "../utils/constant.js";
import { useState, useContext } from "react";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/hooks/useOnlineStatus.js";
import LoggedInUserContext from "../utils/LoggedInUserContext.js";
import { useSelector } from "react-redux";

 export const Header = () => {
    const [btnName, setBtnName] = useState("Login"); //for login button toggle
    const onlineStatus = useOnlineStatus()
 const user = useContext(LoggedInUserContext);

 // this is selector function to get the cart items from redux store
 // subscribe to the store changes
 const cartItems = useSelector((store) => store.cart.items);

    return (
        <div className="flex justify-between bg-orange-100 shadow-lg m-2 rounded-sm" >   
            <div className="logo-container" >    
                <img className="w-56 rounded-sm" alt="logo" src={AppLogo_url}/>
                </div>
            <div className="flex items-center">    
                <ul className="flex p-4 m-4" >
                    <li className="px-4">Online Status :{onlineStatus?  "🟢" : "🔴" }</li>
                    <li className="px-4"><Link to ='/'>Home</Link></li>
                    {/* dont use <a> anchor tag since it does entier page re load  
                    <li><a href="/about"/>About Us</li>*/}
                    <li className="px-4"><Link to = '/about'>About Us</Link></li>
                    <li className="px-4"><Link to = '/contact'>Contact Us</Link></li>
                    <li className="px-4"><Link to = '/grocery'>Grocery</Link></li>
                    <li className="px-4 font-bold"><Link to = '/cart'>Cart-({cartItems.length})</Link></li>
                    <button className="login" 
                    onClick={()=>{btnName==="Login"? setBtnName("Logout"):setBtnName("Login")}}>{btnName}</button>
                    <li className="px-4 font-bold">{user.name}</li>
                </ul>
            </div>
        </div>
    );
}

export default Header;