import { HEADER_LOGO } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";
import { useContext } from "react";
const Header = () => {
  const online = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);

  return (
    <div className="header flex  justify-center items-center bg-[#f1f6f1]">
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
          <li className="m-2 p-2">Cart</li>
          <li className="m-2 p-2 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
