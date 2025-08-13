import CaptionText from "../Atom/CaptionText";
import ServiceCard from "../atom/ServiceCard";
const ServiceLayer = ({ before, after }) => {
  return (
    <>
      <section className="w-full h-fit bg-SecondSectionC flex justify-center items-center gap-0">
        <div className="w-full max-w-5xl max-md:px-4 flex flex-col items-start">
          <div className="w-full flex flex-col items-center">
            <div className="w-full flex flex-col items-start ml-0 mt-32 pb-20">
              <CaptionText
                init={before}
                ani={after}
                content={"끊임없이 확장되는 이동 경험"}
                fontStyle={"font-medium"}
              />
              <CaptionText
                init={before}
                ani={after}
                content={"쏘카의 다양한 서비스"}
                fontStyle={"font-bold"}
              />
            </div>
            {/* gird 사용하기 */}
            <div className="grid grid-cols-2 gap-10 w-full pb-20">
              <ServiceCard source={"/image/photo1.jpg"}></ServiceCard>
              <ServiceCard source={"/image/photo2.jpg"}></ServiceCard>
              <ServiceCard source={"/image/photo3.jpg"}></ServiceCard>
              <ServiceCard source={"/image/photo4.jpg"}></ServiceCard>
              <ServiceCard source={"/image/photo5.jpg"}></ServiceCard>
              <ServiceCard source={"/image/photo6.jpg"}></ServiceCard>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceLayer;
