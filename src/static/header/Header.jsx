import "./Header.css";
import logo from "../../assets/svg/language4.svg";
import SideBar from "../SideBar/SideBar";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const getToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div>
      <div className="generalHeaderContainer">
        <div className="generalHeaderWrapper">
          <div className="headerLogo">
            <img src={logo} alt="logo" />
          </div>
          <div className="headerNav">
            <NavLink className="link" to="/">
              <nav>Home</nav>
            </NavLink>
            <NavLink className="link" to="/courses">
              <nav>Courses</nav>
            </NavLink>
            <NavLink className="link" to="/about">
              <nav>About Us</nav>
            </NavLink>
            <NavLink className="link" to="/teacher">
              <nav>Teachers</nav>
            </NavLink>
            <NavLink className="link" to="/contact">
              <nav>Contact</nav>
            </NavLink>
            <div>
              <button>Call Us</button>
            </div>
          </div>
          <div className="burgerMenu">
            <RxHamburgerMenu onClick={getToggle} />
          </div>
        </div>
      </div>

      {toggle ? <SideBar /> : null}
    </div>
  );
};

export default Header;
