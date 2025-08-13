import CaptionText from "../Atom/CaptionText";
import CaptionModal from "../atom/CaptionModal";
const CaptionLayer = ({ before, after }) => {
  return (
    <>
      <section className="w-full h-screen bg-SecondSectionC flex justify-center items-center gap-0">
        <div className="w-full max-w-5xl max-md:px-4 flex flex-col items-start">
          <div className="w-full flex flex-col items-center">
            <div className="w-full flex flex-col items-start ml-0">
              <CaptionText
                init={before}
                ani={after}
                content={"차가 필요한 모든 순간"}
                fontStyle={"font-medium"}
              />
              <CaptionText
                init={before}
                ani={after}
                content={"쏘카 카셰어링"}
                fontStyle={"font-bold"}
              />
              <CaptionModal></CaptionModal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CaptionLayer;
