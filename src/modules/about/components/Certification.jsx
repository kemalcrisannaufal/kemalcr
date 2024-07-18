import CertificationCard from "./CertificationCard";
import { certifications } from "../../../common/constant/certifications";
import { motion } from "framer-motion";

const Certification = () => {
  return (
    <div className="mt-5">
      {certifications.map((item, index) => (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 * index }}
          key={index}
        >
          <CertificationCard
            logo={item.logo}
            title={item.title}
            organizer={item.organizer}
            date={item.date}
            credentials={item.credentials}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default Certification;
