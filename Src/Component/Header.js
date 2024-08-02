import { useState } from "react";
import { LOGO_URL } from "../../Utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../Utils/useOnlineStatus";

const Header= () => {
    const [btnName,setBtnName]=useState("Login");
    const onlineStatus=useOnlineStatus();
    return (
        <div className="flex justify-between border border-solid border-black ">
        <div className="logo-container">
            <img className="w-40" alt ="Logo" src={LOGO_URL} />
        </div>
        <div className="flex items-center px-4 border-spacing-1 ">
            <ul className= "flex p-4 m-4">
            {/* <li>Home</li>
               <li>About Us</li>
               <li>Contact us</li> */}
               <li className="px-4">{onlineStatus? "online" : "offline"}</li>
                <li className="px-4"><Link to = "/">Home</Link></li>
                <li className="px-4"><Link to="/about">About Us</Link></li>
                <li className="px-4"><Link to ="/contact">Contact us</Link></li>
                <li className="px-4"><Link to ="/grocery">Grocery</Link></li>
                <li className="px-4">cart</li>
                <button className="login" onClick={() =>
                    { 
                        btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")
                    }
                }>
                 {btnName}
                </button>
            </ul>
        </div>
        </div>
    );
};

export default Header;