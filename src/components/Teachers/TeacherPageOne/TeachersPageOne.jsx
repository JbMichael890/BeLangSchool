import "./TeachersPageOne.css";
import BeLangComp from "../../block/BeLangComp";
import TeachersPageImageOne from "../../../assets/webp/TeacherPage.webp";

const TeachersPageOne = () => {
  return (
    <div className="TeachersPageOneContainer">
      <div className="TeachersPageOneWrapper">
        <div className="TeachersPageOneTextHolder">
          <BeLangComp />
          <h1>
            <nav style={{ color: "#5F2A5D" }}>We teach with</nav>
            <nav style={{ color: "#FF885E" }}>passion and vocation</nav>
          </h1>
          <h3>
            Quam arcu vestibulum, quisque sed est vitae. Elit amet tristique{" "}
            <br /> sagittis.
          </h3>
        </div>

        <div className="TeachersPageOneImageHolder">
          <img src={TeachersPageImageOne} alt="image" />
        </div>
      </div>
    </div>
  );
};

export default TeachersPageOne;
