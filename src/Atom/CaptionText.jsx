import { motion } from "framer-motion";
const CaptionText = ({ init, ani }) => {
  return (
    <>
      <motion.div
        initial={init}
        whileInView={{ ...ani, transition: { duration: 0.6 } }}
        viewport={{ amount: "all" }}
        className=" text-white text-7xl font-semibold"
      >
        Lifetime Mobility
      </motion.div>
    </>
  );
};

export default CaptionText;
