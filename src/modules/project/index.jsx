import Header from "../../common/components/elements/Header";
import ListProject from "./ListProject";
import projects from "../../common/constant/projects";

const Project = () => {
  return (
    <>
      <Header
        title={"Project"}
        description={
          "Explore the details and progress of my latest project developments"
        }
      />

      <ListProject projects={projects}/>
    </>
  );
};

export default Project;
