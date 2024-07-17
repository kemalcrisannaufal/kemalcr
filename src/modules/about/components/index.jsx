import Introduction from "../../home/components/Introduction";
import ProjectCarousel from "../../home/components/ProjectCarrousel";
import TechStack from "../../home/components/TechStack";
import projectHomePage from "../../../common/constant/projectHome";

const About = () => {
  return (
    <div>
      <Introduction />
      <ProjectCarousel data={projectHomePage} />
      <TechStack />
    </div>
  );
};

export default About;
