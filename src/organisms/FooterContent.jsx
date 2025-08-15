import FooterAdressLayer from "../molecules/FooterAdressLayer";
import FooterCaption from "../molecules/FooterCaption";
const FooterContent = () => {
  return (
    <>
      <section className="flex justify-center items-center bg-AsideFooterC w-full h-[450px] min-h-[250px] bg-cover bg-center ">
        <div className={`h-[295px] w-11/12 flex justify-between`}>
          <div className="w-full flex justify-between items-start text-white text-3xl font-bold">
            <FooterAdressLayer />
            <FooterCaption />
          </div>
        </div>
      </section>
    </>
  );
};

export default FooterContent;
