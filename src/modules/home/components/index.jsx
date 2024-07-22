import Introduction from "./Introduction";
import ProjectCarousel from "./ProjectCarrousel";
import TechStack from "./TechStack";
import projects from "../../../common/constant/projects";

const Home = () => {
  return (
    <>
      <Introduction />
      <ProjectCarousel data={projects} />
      <TechStack />
    </>
  );
};

export default Home;
