import "./AboutPageOne.css"
import BeLangComp from "../../../components/block/BeLangComp"
import BuongiornoImage from "../../../assets/webp/language4-about-pic1.webp"
const AboutPageOne = () => {
  return (
    <div className="generalContainerAboutPageOne">
      <div className="AboutPageOneWrapper">
        <div className="AboutPageOneHolder">
          <div className="AboutPageOneTextHolder">
            <BeLangComp />
            <h1>
              <nav style={{
                color:"#FF885E",
              }}
              >Hello!
              </nav>
              <nav style={{
                color:"#5F2A5D",
              }}
              >Buongiorno! Hej!
              </nav>
            </h1>
            <h3 >
            Quam arcu vestibulum, quisque sed est vitae. Elit amet <br /> tristique sagittis.

            </h3>
          </div>
          <div className="AboutPageOneImageHolder">
            <img src={BuongiornoImage} alt="" />
          </div>

        </div>

      </div>
    </div>
  );
};
export default AboutPageOne;
