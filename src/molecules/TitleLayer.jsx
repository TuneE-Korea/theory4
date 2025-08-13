import VideoBox from "../Atom/VideoBox";
import Title from "../Atom/Title";
import SubTitle from "../Atom/subtitle";
const TitleLayer = ({ before, after }) => {
  return (
    <>
      <section className="h-max relative bg-transparent flex flex-col justify-center items-center gap-2">
        <div className="relative flex justify-center items-center">
          <VideoBox className="absolute top-0 left-0 w-full h-full object-cover" />
          <div className="absolute flex flex-col gap-3 justify-center items-center">
            <Title init={before} ani={after} />
            <SubTitle init={before} ani={after} />
          </div>
        </div>
      </section>
    </>
  );
};

export default TitleLayer;
