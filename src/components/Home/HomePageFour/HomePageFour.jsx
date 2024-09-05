import { FaArrowRight } from "react-icons/fa";
import HomePageFourImage from "../../../assets/webp/language4-home-pic2.webp";
import BeLangComp from "../../block/BeLangComp";
import "./HomePageFour.css";
// import styled from
// import {NavLink} from "react-router-dom";

const HomePageFour = () => {
  return (
    <div className="generalHomePageFourContainer">
      <div className="HomePageFourWrapper">
        <div className="HomePageFourImage">
          <img src={HomePageFourImage} alt="imageFour" />
        </div>
        <div className="HomePageFourText">
          <span>
            {" "}
            <BeLangComp />
          </span>
          <h2 className="HomePagnpm eFourHeaderText">
            Quis vulputate nibh aliquet <br />
            libero, mi ultricies arcu, arcu.
          </h2>
          <p className="HomePageFourBodyText">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices{" "}
            <br />
            posuere cubilia Curae; Donec velit neque, auctor sit amet <br />{" "}
            aliquam vel, ullamcorper sit amet ligula.
          </p>

          <a href="/teacher" style={{ textDecoration: "none" }}>
            <button>
              <nav style={{ marginRight: "10px" }}>Read more</nav>
              <FaArrowRight />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};
export default HomePageFour;
