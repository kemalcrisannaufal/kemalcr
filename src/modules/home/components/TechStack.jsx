import { motion } from "framer-motion";
import TitleSection from "../../../common/components/elements/TitleSection";
import STACKS from "../../../common/constant/stack";

const TechStack = () => {
  return (
    <div>
      <TitleSection>Tech Stack</TitleSection>
      <div className="w-full flex flex-wrap gap-4 mt-5 cursor-pointer">
        {Object.keys(STACKS).map((key, index) => (
          <motion.div
            key={key}
            className="stack-card flex items-center p-2 border rounded-xl bg-gray-100 relative select-none"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {STACKS[key]}
            <span className="stack-name text-xs text-neutral-600 absolute top-0 hidden -translate-y-8 bg-gray-50 p-2 border rounded-lg">
              {key}
            </span>
          </motion.div>
        ))}
      </div>
      <hr className="my-10" />
    </div>
  );
};

export default TechStack;
