import EducationCard from "./EducationCard";

const Education = () => {
  return (
    <div className="mt-5">
      <EducationCard
        logo={"images/Tel_U.jpg"}
        name={"Telkom University"}
        year={"2021-2025"}
        major={"Bachelor of Informatics"}
        place={"Bandung, Indonesia"}
      />
      <EducationCard
        logo={"images/smanja.jpg"}
        name={"SMAN 1 Jatinangor"}
        year={"2018-2021"}
        major={"Senior High School"}
        place={"Sumedang, Indonesia"}
      />
    </div>
  );
};

export default Education;
