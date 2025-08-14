import ButtonArrow from "./ButtonArrow";

const ServiceCard = ({ source, title, content1, content2, color }) => {
  return (
    <div
      className={`relative min-h-[595px] max-w-[480px] rounded-xl overflow-hidden group ${color}`}
    >
      {/* 배경 이미지 + hover 흐림 효과 */}
      <div
        style={{ backgroundImage: `url(${source})` }}
        className="absolute inset-0 bg-cover bg-center transition-all duration-300 group-hover:opacity-60"
      ></div>

      {/* 텍스트 */}
      <div className="relative flex flex-col items-start px-8 py-10">
        <h2 className="text-3xl font-bold pb-3">{title}</h2>
        <span className="font-bold pb-1">{content1}</span>
        <span className="font-bold">{content2}</span>
      </div>

      {/* 버튼 (항상 선명) */}
      <div className="relative z-10 px-8 pb-8">
        <ButtonArrow />
      </div>
    </div>
  );
};

export default ServiceCard;
