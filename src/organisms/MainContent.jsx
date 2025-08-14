import TitleLayer from "../molecules/TitleLayer";
import CaptionLayer from "../molecules/CaptionLayer";
import Serviece from "../molecules/ServiceLayer";

const MainContent = () => {
  const hidden = { opacity: 0, y: 50 };
  const show = { opacity: 1, y: 0 };
  return (
    <section className="z-0">
      <TitleLayer before={hidden} after={show} />
      <CaptionLayer before={hidden} after={show} />
      <Serviece before={hidden} after={show} />
    </section>
  );
};

export default MainContent;
