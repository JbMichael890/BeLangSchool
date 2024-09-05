import "./CoursesPage.css";
import BeLangComp from "../../block/BeLangComp";
import IconOne from "../../../assets/svg/language4-courses-pic1.svg";
import IconTwo from "../../../assets/svg/language4-courses-pic2.svg";
import IconThree from "../../../assets/svg/language4-courses-pic3.svg";

const CoursesPage = () => {
  return (
    <div className="generalCoursesContainer">
      <div className="CoursesBoxWrapper">
        <div className="CoursePageTextHolder">
          <BeLangComp />
          <h1 className="AvailableCourses">
          <nav style={{color: "#FF885E"}}>
            Check available <br />courses
          <span style={{color: "#5F2A5D"}}> and choose</span></nav> <nav style={{color: "#5F2A5D"}}>your level</nav>
          </h1>
          <h3 className="QuamarcuText">
            Quam arcu vestibulum, quisque sed est vitae. Elit amet tristique
            sagittis.
          </h3>
        </div>

        <section className="IconsHeader">
          <div className="CoursesIconHolderOne">
            <img src={IconOne} alt="Icons" />
            <main className="NumberOne">1</main>
            <h3>Step 1</h3>
            <p className="StepOneText">
              Vitae adipiscing turpis. Aenean ligula nibh, <br /> molestie id
              viverra a, dapibus at dolor.
            </p>
          </div>
          <div className="CoursesIconHolderTwo">
            <img src={IconTwo} alt="Icons" />
            <main className="NumberTwo">2</main>
            <h3>Step 2</h3>
            <p className="StepTwoText">
              Mi urna dictumst conubia fringilla elit leo <br /> suspendisse. 
              Magnis dictumst netus in.
            </p>
          </div>
          <div className="CoursesIconHolderThree">
            <img src={IconThree} alt="Icons" />
            <main>3</main>
            <h3>Step 3</h3>
            <p className="StepThreeText">
              Luctus imperdiet praesent. Lacus lobortis <br /> amet sapien 
              dapibus nostra luctus bin.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};
export default CoursesPage;
