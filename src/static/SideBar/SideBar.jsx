import "./SideBar.css";
import logo from "../../assets/svg/language4.svg";
import { RxHamburgerMenu } from "react-icons/rx";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  return (
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
          <RxHamburgerMenu className="burgerMenu" />
          <button>Call Us</button>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
