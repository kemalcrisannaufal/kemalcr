import TitleSection from "../../../common/components/elements/TitleSection";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PropTypes from "prop-types";

const ProjectCarousel = (props) => {
  const { data } = props;
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
  };
  return (
    <div className="mt-4">
      <TitleSection>Latest Project</TitleSection>
      <Slider {...settings} className="slider-container w-full h-48 mt-4">
        {data.map((item, index) => (
          <CardItem
            key={index}
            image={item["image"]}
            title={item["title"]}
            description={item["description"]}
            destination={item["destination"]}
          />
        ))}
      </Slider>
      <hr className="my-4" />
    </div>
  );
};

ProjectCarousel.propTypes = {
  data: PropTypes.array.isRequired,
};

const CardItem = (props) => {
  const { image, title, description, destination } = props;
  return (
    <a href={destination} className="block">
      <div className="card-container h-48 p-0 rounded-lg overflow-hidden border mx-2 flex items-center justify-center relative hover:bg-gray-100 transition duration-300">
        <img src={image} alt="" className="object-cover w-1/4 h-1/4" />
        <p className="card-title absolute top-2 left-4 text-md text-neutral-800 font-medium">
          {title}
        </p>
        <p className="px-5 absolute left-0 top-[70%] tracking-wider text-sm text-neutral-600 line-clamp-2">
          {description}
        </p>
      </div>
    </a>
  );
};

CardItem.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};

export default ProjectCarousel;
    