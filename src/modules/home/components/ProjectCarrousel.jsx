import TitleSection from "../../../common/components/elements/TitleSection";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PropTypes from "prop-types";
import PageWrapper from "../../../common/components/elements/PageWrapper";
import settingsCarouselLatestProject from "../../../common/constant/settingCarousel";

const ProjectCarousel = (props) => {
  const { data } = props;

  return (
    <PageWrapper
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.6 }}
    >
      <div className="mt-4">
        <TitleSection>Latest Project</TitleSection>
        <Slider
          {...settingsCarouselLatestProject}
          className="slider-container w-full h-48 mt-4"
        >
          {data.map((item, index) => (
            <CardItem
              key={index}
              image={"images/logo_kcr.png"}
              title={item.title}
              description={item.description}
              destination={item.destination}
            />
          ))}
        </Slider>
        <hr className="my-4" />
      </div>
    </PageWrapper>
  );
};

ProjectCarousel.propTypes = {
  data: PropTypes.array.isRequired,
};

const CardItem = (props) => {
  const { title, image, description, destination } = props;
  return (
    <a href={destination} className="block">
      <div className="card-container h-48 p-0 rounded-lg overflow-hidden border mx-2 flex items-center justify-center relative hover:bg-gray-100 transition duration-300 shadow-lg">
        <img
          src={image}
          alt={title}
          className="card-image object-cover w-16 h-12 md:w-1/4 md:h-1/4"
        />
        <p className="card-title text-md line-clamp-1 absolute top-2 left-4 text-neutral-800 font-medium">
          {title}
        </p>
        <p className="text-[10px] sm:text-xs px-5 absolute left-0 top-[70%] tracking-wider text-neutral-600 line-clamp-2 lg:text-sm">
          {description}
        </p>
      </div>
    </a>
  );
};

CardItem.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};

export default ProjectCarousel;
