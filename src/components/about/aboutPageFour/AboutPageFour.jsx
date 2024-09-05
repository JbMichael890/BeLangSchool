import "./AboutPageFour.css";
import StudentImage from "../../../assets/webp/language4-about-pic2.webp";

import BeLangComp from "../../block/BeLangComp";
const AboutPageFour = () => {
  return (
    <div className="AboutPageFourContainer">
      <div className="AboutPageFourTwoWrapper">
        
            <div className="AboutPageFourHeaderText">
              <BeLangComp />
              <h1>
                Sed sagittis nunc <br /> tristique et <br />
                ullamcorper purus.
              </h1>
              <p className="Nonornare">
                <nav>
                  Non ornare sed leo vulputate arcu dignissim nisi lectus. Non{" "}
                  <br />
                  maecenas convallis habitasse sed sodales. Condimentum <br />{" "}
                  cursus odio euismod eget diam iaculis sit.
                </nav>
                <br />
                <nav>
                  Amet montes, nunc sit aliquet pellentesque ac nunc. At mi ut
                  <br />
                  sem purus nisi, sed aliquam tempor commodo. Elementum elit
                  <br /> adipiscing tortor odio vestibulum. Mi turpis tristique
                  iaculis <br />
                  nascetur rutrum maecenas justo sapien.
                </nav>
              </p>
            </div>
            <div className="AboutPageFourImage">
              <img src={StudentImage} alt="A1image" />
            </div>
         
      </div>
    </div>
  );
};
export default AboutPageFour;
