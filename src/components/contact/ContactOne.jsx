import "./ContactOne.css";
import { FaClock } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa6";

const ContactOne = () => {
  return (
    <div className="ContactOneContainer">
      <div className="ContactOneWrapper">
       
        <div className="ContactOneTextHolder">
        <button>Contact</button>
        <h1>+61(0)383766284</h1>
        <h3>
          Level13,2 Elizabeth St,
          <br />
          Melbourne, Victoria 3000,Australia
        </h3>
        </div>
      </div>
      
{/* <div className="ContactOneIcons">
    <FaClock />
    <FaMapMarkerAlt />
    <FaEnvelope /></div> */}
    </div>
  );
};

export default ContactOne;
