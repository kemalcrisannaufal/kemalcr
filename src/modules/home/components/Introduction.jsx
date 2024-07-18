import DotIcon from "../../../assets/dot.svg";
import PropTypes from "prop-types";

const Introduction = () => {
  return (
    <div>
      <p className="text-2xl text-neutral-600 lg:text-3xl font-medium lg:tracking-wide">
        Hi, I m Kemal Crisannaufal{" "}
        <span className="inline-block animate-wave">👋</span>
      </p>
      <div className="flex gap-3 mt-2 text-neutral-500">
        <AdditionalInformation text={"Based in, Bandung Indonesia"} />
        <AdditionalInformation text={"Student of Computer Science"} />
      </div>
      <div className="my-5">
        <p className="text-sm text-justify md:text-md leading-7 text-neutral-600 md:text-md">
          I am a Computer Science student at Telkom University, specializing in
          Machine Learning, Data Science, and Software Engineering. I learned
          about developing software for desktop, web, and mobile, which allows
          me to create software in different platforms.
        </p>
      </div>
      <hr />
    </div>
  );
};

const AdditionalInformation = (props) => {
  const { text } = props;
  return (
    <div className="flex items-center gap-1 md:gap-2">
      <img src={DotIcon} alt="." className="w-1 h-1" />
      <p className="text-sm md:text-md">{text}</p>
    </div>
  );
};

AdditionalInformation.propTypes = {
  text: PropTypes.string.isRequired,
};
export default Introduction;
