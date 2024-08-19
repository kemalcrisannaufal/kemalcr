import Introduction from "./Introduction";
import ProjectCarousel from "./ProjectCarrousel";
import TechStack from "./TechStack";
import projects from "../../../common/constant/projects";
import Marquee from "./Marquee";

const Home = () => {
  return (
    <>
      <Introduction />
      <ProjectCarousel data={projects} />
      <TechStack />
      <Marquee />
    </>
  );
};

export default Home;
