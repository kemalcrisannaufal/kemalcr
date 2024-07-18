import TabBar from "./TabBar";
import Header from "../../../common/components/elements/Header";

const About = () => {
  return (
    <div >
      <Header
        title={"About"}
        description={
          "An insightful glimpse into who I am – because every detail adds depth to the canvas of life"
        }
      >
        {" "}
      </Header>
      <TabBar></TabBar>
    </div>
  );
};

export default About;
