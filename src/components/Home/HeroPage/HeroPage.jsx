import "./HeroPage.css";
import HeroImage from "../../../assets/webp/ImageOne.webp";
import { FaLongArrowAltRight } from "react-icons/fa";
import BeLangComp from "../../../components/block/BeLangComp";
// import { Link } from "react-dom";

const HeroPage = () => {
  return (
    <div className="heroContainer">
      <div className="heroBox">
        <div className="heroWrapper">
          <div className="heroTextArea">
            <BeLangComp />
            <h1>
              <span style={{ color: "#ff885e" }}>Hello !</span> <br />
              <span style={{ color: "#5f2a5d" }}>Buongiorno! Hej!</span>
            </h1>
            <h3>
              Quam arcy vestibulim, quisque sed est vitaee. <br /> Elit amet
              tristique sagittis
            </h3>

            <a href="/courses" style={{ textDecoration: "none" }}>
              <button>
                <nav style={{ marginRight: "10px" }}>See Courses</nav>
                <FaLongArrowAltRight />
              </button>
            </a>
          </div>
          <div className="HeroimageArea">
            <img src={HeroImage} alt="image" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeroPage;
