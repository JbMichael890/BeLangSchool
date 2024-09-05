import "./TeacherPageFour.css";
import TeacherPageFourImage from "../../../assets/webp/language4-teachers-pic2.webp";

import TeachersIcon from "../../TeachersIcon/TeachersIcon";
const TeacherPageFour = () => {
  return (
    <div className="TeacherPageFourContainer">
      <div className="TeacherPageFourWrapper">
      
        <div className="TeacherPageFourTextHolder">
          <h2>Jennifer Lee</h2>
          <main className="LineOne">
            <span style={{ color: "#FF885E" }}>China</span>
            <hr />
          </main>
          <nav>
            <p>
              Vulputate dis mattis nisl, sociis urna. Tellus <br /> habitant
              nisl nunc interdum vulputate vulputate. <br /> Pulvinar tortor
              vitae lorem mattis neque ac sed <br /> id. Et in consequat felis,
              commodo risus augue <br /> cras mi dolor. Lacus, et justo, tempor
              cursus. <br /> Massa lacus, odio risus cras elit ut turpis. Cursus{" "}
              <br />
              suscipit erat ut pretium lectus. Cras arcu tellus <br /> faucibus
              sagittis, magna scelerisque etiam diam.
            </p>
            <p>
              Porta euismod vestibulum etiam bibendum nibh <br /> vel. Lorem
              hendrerit sagittis ipsum arcu non. <br /> Integer eu massa
              maecenas.
            </p>
          </nav>

          <div className="TeacherPageFourIcon">
            <TeachersIcon />
          </div>
         </div>
          <div className="TeacherPageFourImage">
            <img src={TeacherPageFourImage} alt="img" />
          </div>
        
      </div>
    </div>
  );
};

export default TeacherPageFour;
