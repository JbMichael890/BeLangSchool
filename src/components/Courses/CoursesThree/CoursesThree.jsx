import B2Image from "../../../assets/webp/language4-courses-pic5.webp";
import { FaArrowRight } from "react-icons/fa";
import "./CoursesThree.css";
const CoursesThree = () => {
  return (
    <div className="CoursesThreeGeneralContainer">
      <div className="CoursesThreeWrapper">
        <div className="CoursesThreeTextHolder">
          <h2>
            In eget phasellus id bibendum. Lorem eget <br /> tortor et morbi.
            Sit vestibulum sed id.
          </h2>
          <main>
            <p>
              Sed ut ornare gravida eget est. Nibh senectus tempus molestie{" "}
              <br /> nulla malesuada pellentesque vel eu. Vitae risus, elementum{" "}
              <br /> felis ligula amet ut. Viverra sed at imperdiet aliquet sed
              massa <br /> netus lectus penatibus. Id eget quam facilisis nulla
              turpis nunc. <br /> Blandit mi, amet, lorem ac et urna.
            </p>
            <p>
              Egestas commodo proin vel morbi nunc nunc, tincidunt. <br />
              Molestie euismod vulputate sollicitudin sociis massa platea <br />
              mauris, semper. Sit nulla consequat sagittis, tincidunt proin.{" "}
              <br /> Tincidunt nullam augue elementum, arcu sed risus elit
              pulvinar.
            </p>
          </main>{" "}
          <br />
          <button>
            <nav style={{ marginRight: "10px" }}>sign up for a course</nav>{" "}
            <FaArrowRight />
          </button>
        </div>
        <div className="CoursesThreeImageHolder">
          <img src={B2Image} alt="Img" />
          <h3>
            The course is intended for those who want to obtain an B2 <br />
            certificate after the course
          </h3>
        </div>
      </div>
    </div>
  );
};
export default CoursesThree;
