import Introduction from "./Introduction";
import ProjectCarousel from "./ProjectCarrousel";
import TechStack from "./TechStack";
import projectHomePage from "../../../common/constant/projectHome";

const Home = () => {
  return (
    <div>
      <Introduction />
      <ProjectCarousel data={projectHomePage} />
      <TechStack />
    </div>
  );
};

export default Home;
