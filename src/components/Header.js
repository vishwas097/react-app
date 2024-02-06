import { HEADER_LOGO } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";
import { useContext } from "react";
import Cart from "./Cart";
import { useSelector } from "react-redux";
const Header = () => {
  const online = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart?.items);
  return (
    <div className="header flex justify-center items-center bg-[#f1f6f1] sticky top-0">
      <div>
        <img className="w-30  h-[6.5rem] p-4" alt="logo" src={HEADER_LOGO} />
      </div>
      <div className="flex">
        <ul className="flex m-5 justify-between">
          <li className="m-2 p-2">
            <span>Online: {online ? "✅" : "❗"}</span>
          </li>
          <li className="m-2 p-2">
            <Link className="cursor-pointer" to="/">
              Home
            </Link>
          </li>
          <li className="m-2 p-2">
            <Link className="cursor-pointer" to="about">
              About US
            </Link>
          </li>
          <li className="m-2 p-2">
            <Link className="cursor-pointer" to="contact">
              Contact US
            </Link>
          </li>

          <li className="m-2 p-2">
            <Link className="cursor-pointer" to="cart">
              <span className="font-bold text-xl">
                {cartItems.length > 0 && (
                  <span className="bg-green-400 p-1 px-2 rounded-md text-sm">
                    {cartItems.length}
                  </span>
                )}{" "}
                Cart
              </span>
            </Link>
          </li>
          <li className="m-2 p-2 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
