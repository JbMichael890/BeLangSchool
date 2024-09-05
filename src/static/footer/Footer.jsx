import "./Footer.css";
import BeLogo from "../../assets/svg/language4.svg";

const Footer = () => {
  return (
    <div className="HomePageSevenContainer">
      <div className="HomePageSevenWrapper">
        <div className="HomePageSevenHeader">
          <div className="logoTextHolder">
            <img src={BeLogo} alt="" />
            <p>
              Arcu sit venenatis lacinia dolor urna. Amet magna <br /> vulputate
              elit vestibulum ultrices. Viverra ultrices vel <br /> morbi sed
              tortor, lacus, dui id scelerisque.
            </p>
          </div>
          <div className="HomePageSevenAdressHolder">
            <h3>Address</h3>
            <p>
              Envato <br />
              Level 13, 2 Elizabeth <br />
              Victoria 3000 <br />
              Australia
            </p>
          </div>
          <div className="HomePageSevenOpening hours">
            <h3>Opening hours</h3>
            <p>
              Monday - Friday: <br />
              09:00 AM - 06:00 PM <br />
              Saturday: <br />
              07:00 AM - 08:00 PM
            </p>
          </div>
        </div>

        <main className="EndingText">
          <nav>© 2024 Betheme by </nav>
          <span> Muffin group </span>{" "}
          <nav> | All Rights Reserved | Powered by </nav>{" "}
          <span> WordPress</span>
        </main>
      </div>
    </div>
  );
};
export default Footer;
