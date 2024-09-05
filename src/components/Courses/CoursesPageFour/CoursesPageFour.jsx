import "./CoursesPageFour.css";
import C1image from "../../../assets/webp/language4-courses-pic6.webp";
import { FaArrowRight } from "react-icons/fa";
const CoursesPageFour = () => {
  return (
    <div className="generalCoursesPageFourContainer">
      <div className="CoursesPageFourWrapper">
        <div className="COneHeader">
          <div className="CoursesPageTFourImage">
            <img src={C1image} alt="C1image" />
            <h3 className="COneCourses">
              The course is intended for those who want to obtain an C1 <br />
              certificate after the course
            </h3>
          </div>
        </div>
        <div className="CoursesPageFourHeaderText">
          <h2 className="Interdum ">
            Interdum nullam sem sed quis turpis amet,
            <br /> hendrerit. Et in non condimentum.
          </h2>
          <p className="sodales ">
            <nav>
              Sit sodales vivamus tincidunt volutpat volutpat risus odio quis.
              Varius <br /> egestas volutpat blandit ut elementum non quam non.
              Malesuada <br />
              quis morbi urna nunc, mauris eget. Dui, faucibus ullamcorper enim{" "}
              <br />
              feugiat. Rhoncus lectus mi nunc egestas aenean tempor accumsan{" "}
              <br />
              laoreet eu. Aliquet sed lectus sed iaculis vel interdum bibendum
              justo.
            </nav>
            <br />

            <nav>
              Justo, eget ipsum, lectus sit porta luctus sed iaculis. Diam
              magnis <br />
              viverra integer id. Nibh massa felis nisi in morbi viverra ut
              egestas. <br /> Sagittis imperdiet laoreet elementum orci purus
              praesent ultricies leo <br /> risus. Iaculis consectetur sapien
              suspendisse vitae sed proin. .
            </nav>
          </p>
          <button>
            <nav style={{ marginRight: "10px" }}>Sign up for courses </nav>
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};
export default CoursesPageFour;
