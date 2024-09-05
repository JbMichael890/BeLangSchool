import "./OnlineSchool.css";
import BeLangComp from "../block/BeLangComp";

const OnlineSchool = () => {
  return (
    <div className="generalAboutPageTwoContainer">
      <div className="AboutPageTwoTextHolder">
        <div className="AboutPageTwoTextOne">
          <BeLangComp />
          <h1>
            <nav
              style={{
                color: "#5F2A5D",
              }}
            >
              Online Language
              <br />
              School
              <span
                style={{
                  color: "#FF885E",
                }}
              >
                for
              </span>
            </nav>
            <span
              style={{
                color: "#FF885E",
              }}
            >
              {" "}
              Adults & Children{" "}
            </span>
          </h1>
          <p>
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices{" "}
            <br /> posuere cubilia Curae; Donec velit neque, auctor sit amet{" "}
            <br /> aliquam vel, ullamcorper sit amet ligula.
          </p>
        </div>
        <div className="AboutPageTwoTextTwo">
          <div className="Suspendisse">
            <p>
              Suspendisse facilisis convallis eros rutrum iaculis mauris quis
              etiam <br />
              convallis himenaeos congue blandit pharetra amet habitasse cras
              viverra <br /> class volutpat.
            </p>
            <div className="Lacina">
              <h3>Lacinia cursus in augue laoreet egestas:</h3>

              <div className="Elementum">
                <nav></nav>
                <p>
                  ● Elementum mollis augue rutrum dictum pellentesque nostra
                  curae elit <br />
                  mollis convallis adipiscing integer potenti ligula.
                </p>
                <nav></nav>
                <p>
                  ● Nisl phasellus aenean cras tincidunt erat ut aliquam etiam
                  pulvinar <br /> pharetra conubia scelerisque ligula hac.
                </p>
                <nav></nav>
                <p>
                  ● Vivamus risus tellus cursus nibh felis habitant molestie
                  elit magna <br /> mattis dui etiam scelerisque ornare.
                </p>

                <nav></nav>
                <p>
                  ● Id interdum ante mattis pretium mi vivamus class mauris diam{" "}
                  <br /> vestibulum magna aptent nulla lacinia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OnlineSchool;
