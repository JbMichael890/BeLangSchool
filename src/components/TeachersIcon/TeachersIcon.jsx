import "./TeachersIcon.css"
import { FaFacebookF } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
import { IoLogoTwitter } from "react-icons/io5";
import { PiDribbbleLogo } from "react-icons/pi";

const TeachersIcon = () => {
  return (
    
        <div className="TeachersIconWrapper">
            <nav className="TeachersIconOne">
              <FaFacebookF />
            </nav>
            <nav className="TeachersIconTwo">
              <AiFillLinkedin />
            </nav>
            <nav className="TeachersIconThree">
              <IoLogoTwitter />
            </nav>
            <nav className="TeachersIconFour">
              <PiDribbbleLogo />
            </nav>
          </div>
    
  )
}

export default TeachersIcon
