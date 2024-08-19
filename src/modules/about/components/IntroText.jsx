import PropTypes from "prop-types";
import { motion } from "framer-motion";

const IntroText = (props) => {
  const { classname } = props;
  return (
    <div
      className={`text-xs sm:text-sm text-neutral-700 text-justify md:text-md lg:text-base leading-7 ${classname} dark:text-white`}
    >
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.8 }}
      >
        <>
          <p>
            I am a Computer Science student at Telkom University, specializing
            in Machine Learning, Data Science, and Software Engineering. Contact
            me at kemalcrisannnaufal@gmail.com
          </p>
          <br />
          <p>
            AI-based technology can do all the work today, the reason I study
            computer science. I was amazed and learned how programs can
            accurately predict things with as much accuracy even more than
            humans by utilizing data. I also learned about developing software
            for desktop, web, and mobile, which allows me to create software in
            different platforms. Therefore, of the many fields in computer
            science, I am interested in machine learning, data science, and
            software development.
          </p>
          <br />
          <p>
            As a computer science student, I hone my skills in programming,
            problem-solving, data processing, designing machine learning models,
            and developing software. I was involved in course team projects to
            improve my skills. Projects I have done are building computer
            programs, desktop-based applications for parking management systems,
            machine learning models for regression and classification, and
            others. On these projects I work with a team to solve given
            problems, practice programming skills, problem solving, analysis and
            teamwork. These projects help develop me in preparing for my career
            in the fields of data science, machine learning, and software
            engineering.
          </p>
          <br />
          <p>
            I have teaching experience as a data structure practicum assistant
            at the Informatics Lab at Telkom University. As a laboratory
            assistant, I am responsible for providing guidance and evaluating
            the work of the students. Being a practicum assistant allows me to
            communicate with many people and work together with other people
            which has enhanced my knowledge, communication, and teamwork skills.
            This experience will serve as valuable softskills preparation for
            entering the workforce after graduation.
          </p>
          <br />
          <p className="font-medium">
            Data Science | Machine Learning | Software Engineering
          </p>
        </>
      </motion.div>
    </div>
  );
};

IntroText.propTypes = {
  classname: PropTypes.string,
};

export default IntroText;
