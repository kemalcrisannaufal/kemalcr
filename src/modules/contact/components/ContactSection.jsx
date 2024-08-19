import contactCards from "../../../common/constant/contactCards";
import ContactCard from "./ContactCard";

const ContactSection = () => {
  return (
    <>
      <h1 className="mb-3 text-md md:text-lg text-neutral-700 font-medium dark:text-white">
        Find me on Social Media
      </h1>
      <div className="grid grid-cols-2 gap-6 md:gap-4">
        {contactCards.map((item, index) => (
          <ContactCard
            key={index}
            name={item.name}
            title={item.title}
            description={item.description}
            icon={item.icon}
            classname={item.classname}
            accentColor={item.accentColor}
            destination={item.destination}
          />
        ))}
      </div>
      <hr className="my-5" />
    </>
  );
};

export default ContactSection;
