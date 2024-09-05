import HomePageFour from "../../components/Home/HomePageFour/HomePageFour";
import HomePageThree from "../../components/Home/HomePageThree/HomePageThree";
import HomePageTwo from "../../components/Home/HomePageTwo/HomePageTwo";
import Countries from "../../components/Home/Countries/Countries";
import HeroPage from "../../components/Home/HeroPage/HeroPage";
import HomePageFive from "../../components/Home/HomePageFive/HomePageFive";
import HomePageSix from "../../components/Home/HomePageSix/HomePageSix"
// import HomePageSeven from "../../components/Home/HomePageSeven/HomePageSeven"

const Home = () => {
  return (
    <div className="Home">
      <HeroPage />
      <Countries />
      <HomePageTwo />
      <HomePageThree />
      <HomePageFour />
      <HomePageFive />
      <HomePageSix />
      {/* <HomePageSeven /> */}
      {/* <HeroPageTwo /> */}
    </div>
  );
};
export default Home;
