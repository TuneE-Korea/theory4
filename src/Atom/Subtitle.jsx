import { motion } from "framer-motion";
const SubTitle = ({ init, ani }) => {
  return (
    <>
      <motion.h1
        initial={init}
        whileInView={{ ...ani, transition: { duration: 0.6, delay: 0.6 } }}
        className="mt-5 text-white sm:text-xs md:text-2xl lg:text-4xl font-bold"
      >
        라이프타임 모빌리티 플랫폼, 쏘카
      </motion.h1>
    </>
  );
};

export default SubTitle;
