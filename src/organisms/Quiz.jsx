import { motion } from "framer-motion";
import VideoBox from "../Atom/VideoBox";
import Title from "../Atom/Title";
import SubTitle from "../Atom/subtitle";

const Quiz = () => {
  const hidden = { opacity: 0, y: 50 };
  const show = { opacity: 1, y: 0 };
  return (
    <>
      <section className="h-screen bg-transparent flex flex-col justify-center items-center gap-2">
        <VideoBox className="relative"></VideoBox>
        <div className="titleSection absolute flex flex-col gap-2 justify-center items-center">
          <Title init={hidden} ani={show} />
          <SubTitle init={hidden} ani={show} />
        </div>
      </section>
      <section className="h-screen bg-SecondSectionC flex  justify-center items-center gap-0">
        <div className="flex flex-col w-full m-auto max-w-96">
          <motion.div
            initial={{ hidden }}
            whileInView={{ ...show, transition: { duration: 0.6 } }}
            viewport={{ amount: "all" }}
            className="w-fit p-2 text-white text-3xl font-medium"
          >
            차가 필요한 모든 순간
          </motion.div>
          <motion.div
            initial={{ hidden }}
            whileInView={{
              ...show,
              transition: { duration: 0.3, delay: 0.3 },
            }}
            viewport={{ amount: "all" }}
            className=" w-fit p-2 text-white text-3xl font-bold"
          >
            쏘카 카 셰어링
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Quiz;
