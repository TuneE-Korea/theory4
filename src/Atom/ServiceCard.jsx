import ButtonArrow from "./ButtonArrow";
const ServiceCard = ({ source, title, content1, content2, color }) => {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${source})` }}
        className={`${color} relative min-h-[595px] max-w-[480px] bg-cover bg-center rounded-xl group-hover:opacity-60 transition-all duration-300`}
      >
        <div className="flex flex-col items-start px-8 py-10">
          <h2 className="text-3xl font-bold pb-3">{title}</h2>
          <span className="font-bold pb-1">{content1}</span>
          <span className="font-bold">{content2}</span>
        </div>
        <ButtonArrow />
      </div>
    </>
  );
};

export default ServiceCard;
