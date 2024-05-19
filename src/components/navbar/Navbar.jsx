import "./navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import { DarkModeContext } from "../../context/darkmodecontext";
import { useContext } from "react";
import { type } from "@testing-library/user-event/dist/type";


const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchOutlinedIcon />
        </div>
        <div className="items">
          <div className="item">
            <DarkModeOutlinedIcon className="icon" onClick={() => dispatch({ type: "TOGGLE" })} />
          </div>
          <div className="item">
            <img
              src="https://postimg.cc/mz1v4JXP"
              alt=""
              className="donny"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
