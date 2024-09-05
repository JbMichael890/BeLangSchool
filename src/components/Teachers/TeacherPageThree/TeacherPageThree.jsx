import "./TeacherPageThree.css";
import TeacherPageThreeImage from "../../../assets/webp/language4-teachers-pic1.webp";

import TeachersIcon from "../../TeachersIcon/TeachersIcon";

const TeacherPageThree = () => {
  return (
    <div className="TeacherPageThreeContainer">
      <div className="TeacherPageThreeWrapper">
        <div className="TeacherPageThreeImage">
          <img src={TeacherPageThreeImage} alt="img" />
        </div>
        <div className="TeacherPageThreeTextHolder">
          <h2>Leslie Alexander</h2>
          <main className="Line">
            <span style={{ color: "#FF885E" }}>Spanish</span>
            <hr />
          </main>
          <nav>
            <p>
              Egestas elit elit aliquam morbi commodo at. Ipsum,
              <br /> purus nunc nulla viverra. Urna elit, vulputate mi elit{" "}
              <br />
              ullamcorper eleifend malesuada ac mauris. Eget augue <br />
              fermentum lacinia laoreet vitae etiam duis. Congue <br />
              egestas viverra nam tristique sed arcu vestibulum. <br />
              Nam odio in quisque adipiscing. Consequat diam quis <br />{" "}
              ultrices sit sit leo bibendum tempor lorem.
            </p>
            <p>
              Enim dictum cursus malesuada tellus porta nunc nec <br /> id.
              Fusce velit amet, ipsum amet eget enim magna <br />
              facilisis non. Cursus a vitae purus tempor elit sem.
            </p>
          </nav>

          <div className="TeacherPageThreeIcon">
            <TeachersIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherPageThree;
