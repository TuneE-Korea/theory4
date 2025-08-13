import { motion } from "framer-motion";
const Title = ({ init, ani }) => {
  return (
    <motion.h1
      initial={init}
      whileInView={{ ...ani, transition: { duration: 0.6 } }}
      className=" text-white text-7xl font-semibold"
    >
      Lifetime Mobility
    </motion.h1>
  );
};
export default Title;
