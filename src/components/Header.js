import { useContext } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaCartShopping } from "react-icons/fa6"; 
import Title from "./Title.js";
import useOnlineStatus from "../utils/useOnlineStatus.js";
import UserContext from "../utils/UserContext.js";
const Header = () => {
  const onlineStatus = useOnlineStatus() ? "🟢" : "🔴";

  const { loggedInUser } = useContext(UserContext);

  //Subscribing to store using a selector
  const cartItems=useSelector((store)=>store.cart.items)  

  return (
    <div className="header">
      <Title />
      <div className="flex justify-center items-center mt-2.5">
        <span className="font-bold text-green-600 text-xl mx-2">Hello,</span>
        <span className="font-bold text-green-600  text-xl">
          {loggedInUser}
        </span>
        
      </div>
      <div className=" nav-items">
        <ul className="mt-6">
          <li>{onlineStatus}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <div className="nav-login-cart">
          <Link to='/login'><button> Login</button></Link>
            <Link to="/cart">
             <FaCartShopping/>
            </Link>
            <div className="nav-cart-count">{cartItems.length}</div>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Header;
