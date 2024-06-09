import { Link } from "react-router-dom";
import Title from "./Title.js";
import useOnlineStatus from "../utils/useOnlineStatus.js";
const Header = () => {
  const onlineStatus = useOnlineStatus() ? "✅" : "🔴";
    return (
      <div className="header">
        <Title/>
        <div className="nav-items">
          <ul>
            <li>{onlineStatus}</li>
            <li> <Link to="/">Home</Link> </li>
            <li> <Link to="/about">About</Link> </li>
            <li> <Link to="/contact">Contact</Link> </li>
            <li> <Link to="/cart">Cart</Link> </li>
          </ul>
        </div>
      </div>
    );
  };

export default Header;