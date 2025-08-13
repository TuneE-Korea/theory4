import VideoBox from "../Atom/VideoBox";
import Title from "../Atom/Title";
import SubTitle from "../Atom/subtitle";
const TitleLayer = ({ before, after }) => {
  return (
    <>
      <section className="h-screen bg-transparent flex flex-col justify-center items-center gap-2">
        <VideoBox className="relative"></VideoBox>
        <div className="titleSection absolute flex flex-col gap-3 justify-center items-center">
          <Title init={before} ani={after} />
          <SubTitle init={before} ani={after} />
        </div>
      </section>
    </>
  );
};

export default TitleLayer;
