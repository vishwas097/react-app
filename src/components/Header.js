import { HEADER_LOGO } from "../utils/constants";
import { Link } from "react-router-dom";
const Header = () => {
    return (
      <div className="header">
        <div className="logo-container">
          <img
            className="logo"
            alt="logo"
            src={HEADER_LOGO}
          />
          
        </div>
        <div className="nav-items">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="about">About US</Link>
            </li>
            <li>
              <Link to="contact">Contact US</Link>
            </li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;