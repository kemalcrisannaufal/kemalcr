import PropTypes from "prop-types";

const CertificationCard = (props) => {
  const { logo, title, organizer, date, credentials = "-" } = props;
  return (
    <div className="w-full border rounded-md shadow-lg flex items-center gap-5 p-3 mb-3 select-none">
      <div className="w-10 h-10 sm:w-20 sm:h-20 overflow-hidden">
        <img
          src={logo}
          alt={organizer}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="text-neutral-500 text-[10px] sm:text-sm lg:text-sm dark:text-white">
        <p className="text-neutral-600 text-xs md:text-md lg:text-lg font-medium dark:text-white">
          {title}
        </p>
        <p>{organizer}</p>
        <p>{date}</p>
        {credentials != "-" && <p>{credentials}</p>}
      </div>
    </div>
  );
};

CertificationCard.propTypes = {
  logo: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  organizer: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  credentials: PropTypes.string,
};

export default CertificationCard;
