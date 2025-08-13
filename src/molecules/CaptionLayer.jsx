import CaptionText from "../Atom/CaptionText";
const CaptionLayer = ({ before, after }) => {
  return (
    <>
      <section className="h-screen bg-SecondSectionC flex  justify-center items-center gap-0">
        <div className="flex flex-col items-center w-full m-auto max-w-96">
          <div className="flex flex-col items-start ml-0">
            <CaptionText
              init={before}
              ani={after}
              content={"차가 필요한 모든 순간"}
              fontStyle={"font-medium"}
            />
            <CaptionText
              init={before}
              ani={after}
              content={"쏘카 카 셰어링"}
              fontStyle={"font-bold"}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default CaptionLayer;
