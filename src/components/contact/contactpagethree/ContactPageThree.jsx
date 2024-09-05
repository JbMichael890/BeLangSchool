import "./ContactPageThree.css";
import { FaLocationDot } from "react-icons/fa6";
const ContactPageThree = () => {
  return (
    <div className="ContactPageThreeContainer">
      <div className="ContactPageThreeWrapper">
        <div className="CheckHold">
          <h2>
            <span style={{ color: "#fff" }}>Check out </span>
            <nav style={{ color: "#FF885E", marginTop: "-12px" }}>
              our locations
            </nav>
          </h2>
        </div>
        <div className="ContactPageThreeHolder">
          <main className="ContactPageThreeHolderOne">
            <nav>
              <FaLocationDot />
            </nav>
            <h2>Address 1</h2>
            <p>
              Envato Level 13, 2 Elizabeth,
              <br /> Victoria 3000, Australia
            </p>
          </main>
          <main className="ContactPageThreeHolderTwo">
            <nav>
              {" "}
              <FaLocationDot />
            </nav>
            <h2>Address 2</h2>
            <p>
              Envato Level 13, 2 Elizabeth,
              <br /> Victoria 3000, Australia
            </p>
          </main>
          <main className="ContactPageThreeHolderThree">
            <nav>
              {" "}
              <FaLocationDot />
            </nav>
            <h2>Address 3</h2>
            <p>
              Envato Level 13, 2 Elizabeth,
              <br /> Victoria 3000, Australia
            </p>
          </main>
        </div>
      </div>
    </div>
  );
};

export default ContactPageThree;
