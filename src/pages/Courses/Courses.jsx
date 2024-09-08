import CoursesPageOne from "../../components/Courses/CoursesPageOne/CoursesPage";
import CoursesThree from "../../components/Courses/CoursesThree/CoursesThree";
import CoursesPageTwo from "../../components/Courses/CoursesPageTwo/CoursesPageTwo";
import CoursesPageFour from "../../components/Courses/CoursesPageFour/CoursesPageFour";
import CoursesPageFive from "../../components/Courses/CoursesPageFive/CoursesPageFive";
import CoursesPageSix from "../../components/Courses/CoursesPageSix/CoursesPageSix"
import CoursesAvailable from "../../components/Courses/coursesAvailable/CoursesAvailable"
const Courses = () => {
  return (
    <div>
      <CoursesPageOne />
      <CoursesAvailable />
      <CoursesPageTwo />/
      <CoursesThree />
      <CoursesPageFour />
      <CoursesPageSix />
      <CoursesPageFive />
    </div>
  );
};
export default Courses;
