import "./TeacherPageFive.css";
import TeacherPageFiveImage from "../../../assets/webp/language4-teachers-pic3.webp";

import TeachersIcon from "../../TeachersIcon/TeachersIcon";

const TeacherPageFive = () => {
  return (
    <div className="TeacherPageFiveContainer">
      <div className="TeacherPageFiveWrapper">
        <div className="TeacherPageFiveImage">
          <img src={TeacherPageFiveImage} alt="img" />
        </div>
        <div className="TeacherPageFiveTextHolder">
          <h2> Darlene Robertson</h2>
          <main className="LineTwo">
            <span style={{ color: "#FF885E" }}>German</span>
            <hr />
          </main>
          <nav>
            <p>
              Vulputate vulputate tempus nunc convallis <br /> egestas urna
              fringilla porta. Id tellus donec <br />
              pulvinar non. Phasellus suspendisse porttitor <br />
              quisque enim est eu leo. Phasellus vestibulum,
              <br /> facilisi magna in lectus venenatis enim. Et sed <br /> nunc
              ultrices aliquet condimentum aliquam <br />
              accumsan, id. Sed morbi malesuada lorem in arcu <br /> massa nisi.
            </p>
            <p>
              Pulvinar ipsum amet massa cursus viverra est <br />
              arcu sed sollicitudin. Leo, tellus sed nam amet <br />
              ultrices adipiscing urna. Bibendum netus tellus <br />
              viverra mauris varius duis. Viverra ac a vel.
            </p>
          </nav>

          <div className="TeacherPageFiveIcon">
            <TeachersIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherPageFive;
