import { motion } from "framer-motion";
const Title = ({ init, ani }) => {
  return (
    <motion.h1
      initial={init}
      whileInView={{ ...ani, transition: { duration: 0.6 } }}
      className=" text-white sm:text-4xl md:text-5xl lg:text-8xl font-semibold"
    >
      Lifetime Mobility
    </motion.h1>
  );
};
export default Title;
