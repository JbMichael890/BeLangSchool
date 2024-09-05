import "./CoursesPageTwo.css";
import AIimage from "../../../assets/webp/language4-courses-pic4.webp";
import { FaArrowRight } from "react-icons/fa";
const CoursesPageTwo = () => {
  return (
    <div className="generalCoursesPageTwoContainer">
      <div className="CoursesPageTwoWrapper">
        
          <div className="AiHeader">
            <div className="CoursesPageTwoImage">
              <img src={AIimage} alt="A1image" />
              <h3 className="AiCourses">
                The course is intended for those who want to obtain an <br /> A1
                certificate after the course
              </h3>
            </div>
          </div>
          <div className="CoursesPageTwoHeaderText">
            <h2 className="Eleifendamet">
              Eleifend amet, nec fermentum scelerisque. <br /> Vel sed placerat
              integer.
            </h2>
            <p className="Loremipsum">
              <nav>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla{" "}
                <br />
                mauris dolor, gravida a varius blandit, auctor eget purus.{" "}
                <br /> Phasellus scelerisque sapien sit amet mauris laoreet,
                eget <br />
                scelerisque nunc cursus.
              </nav>{" "}
              <br />{" "}
              <nav>
                Duis ultricies malesuada leo vel aliquet. Curabitur rutrum porta{" "}
                <br /> dui eget mollis. Nullam lacinia dictum auctor. Class
                aptent taciti <br />
                sociosqu ad litora torquent per conubia nostra, per inceptos{" "}
                <br /> himenaeos. Orci varius natoque penatibus et magnis dis{" "}
                <br /> parturient montes, nascetur ridiculu.
              </nav>
            </p>
            <button style={{ width: "230px", height: "60px" }}>
              <nav style={{ marginRight: "10px" }}>Sign up for courses </nav>
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
  );
};
export default CoursesPageTwo;
