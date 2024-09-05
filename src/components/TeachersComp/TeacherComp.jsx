import BeLangComp from "../block/BeLangComp";
import "./TeacherComp.css";
import ladyOne from "../../assets/webp/language4-about-pic4 (1).webp"
import ladyTwo from "../../assets/webp/language4-about-pic3 (1).webp"
import ladyThree from "../../assets/webp/language4-about-pic5.webp";

const TeacherComp = () => {
  return (
    <div className="HomeFiveContainer">
      <div className="HomeFiveWrapper">
        <BeLangComp />
        <h1>Our teachers</h1>
        <p>
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia Curae; <br /> Donec velit neque, auctor sit amet
          aliquam vel, ullamcorper sit amet ligula.
        </p>
        <section className="profileHolder">
          <main className="mainProfile">
            <div className="profileImageDiv">
              <img src={ladyOne} alt="" />
            </div>
            <h3>Leslie Alexander</h3>
            <span>Spanish</span>
            <hr />
            <p>
              Consectetur amet magna imperdiet sit viverra. Cursus tempor,
              malesuada magna odio vitae libero purus
            </p>
          </main>
          <main className="mainProfile">
            <div className="profileImageDiv">
              <img src={ladyTwo} alt="" />
            </div>
            <h3>Jennifer Lee
            </h3>
            <span>China</span>
            <hr />
            <p>
            Venenatis nunc facilisi mauris, lectus ultrices aliquam. Felis montes, egestas adipiscing ut proin
            </p>
          </main>
          <main className="mainProfile">
            <div className="profileImageDiv">
              <img src={ladyThree} alt="" />
            </div>
            <h3>Darlene Robertson
            </h3>
            <span>German</span>
            <hr />
            <p>
          
            Molestie tincidunt congue massa, vulputate. Eget nec bibendum sit nunc at diam porttitor eget amet
            </p>
          </main>
        </section>
      </div>
    </div>
  );
};

export default TeacherComp;
