import { Link } from "react-router-dom";
import { AppLogo_url } from "../utils/constant.js";
import { useState } from "react";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/hooks/useOnlineStatus.js";
 
 export const Header = () => {
    const [btnName, setBtnName] = useState("Login"); //for login button toggle
    const onlineStatus = useOnlineStatus()

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
                    <button className="login" 
                    onClick={()=>{btnName==="Login"? setBtnName("Logout"):setBtnName("Login")}}>{btnName}</button>
                </ul>
            </div>
        </div>
    );
}

export default Header;