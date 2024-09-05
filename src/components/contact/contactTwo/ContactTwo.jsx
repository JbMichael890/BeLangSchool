import "./ContactTwo.css";

const ContactTwo = () => {
  return (
    <div className="ContactTwoContainer">
      <div className="ContactTwoWrapper">
        <div className="ContactTwoHeader">
          <div className="ContactForm">
            <button>Contact Form</button>
          </div>
          <h1>
            <nav style={{ color: "#5F2A5D" }}>Do you have a question?</nav>
            <span style={{ color: "#FF885E" }}>Feel free to contact</span>
          </h1>
        </div>
        <div className="InputHolder">
          <input type="text" placeholder="Full name*" name="" id="" />
          <input type="text" placeholder="Email*" name="" id="" />
        </div>
        <div className="TextM">
          <textarea placeholder="Your messages... "></textarea>
          <button>Send a message</button>
        </div>
      </div>
    </div>
  );
};

export default ContactTwo;
