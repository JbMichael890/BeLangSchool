import { FaArrowRight } from "react-icons/fa";
import "./JoinGroup.css";
import { FaHeart } from "react-icons/fa6";

const JoinGroup = () => {
  return (
    <div className="CoursesPageFiveContainer">
      <div className="CoursesPageFiveWrapper">
        <div className="joinDivCoursesPageFive">
          <h1>
            <span
              style={{
                color: "white",
                cursor: "auto",
              }}
            >
              Join the group of <br />
              <nav>
                students from all <br />
              </nav>
            </span>
            <span
              style={{
                color: "#E87A5E",
                cursor: "auto",
              }}
            >
              over the world
            </span>
          </h1>
          <a href="/about" style={{ textDecoration: "none" }}>
            <button>
              <nav style={{ marginRight: "10px" }}>About Us</nav>
              <FaArrowRight />
            </button>
          </a>
        </div>
        <div className="percentDiv">
          <main className="Icons">
            <nav>
              <FaHeart />
            </nav>
            <nav>
              <FaHeart />
            </nav>
            <nav>
              <FaHeart />
            </nav>
            <nav>
              <FaHeart />
            </nav>
            <nav>
              <FaHeart />
            </nav>
          </main>
          <div className="ninityTwoCoursesPageFive">
            <h1>92%</h1>
            <span
              style={{
                color: "white",
                cursor: "auto",
              }}
            >
              Of Satisfied <br /> students
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinGroup;
