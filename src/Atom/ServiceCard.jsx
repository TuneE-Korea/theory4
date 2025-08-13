import ButtonArrow from "./ButtonArrow";
const ServiceCard = ({ source, title, content1, content2 }) => {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${source})` }}
        className="relative bg-cover bg-center h-96 w-full rounded-md"
      >
        <h2>{title}</h2>
        <span>{content1}</span>
        <span>{content2}</span>
        <ButtonArrow />
      </div>
    </>
  );
};

export default ServiceCard;
