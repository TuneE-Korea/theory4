import { motion, stagger } from "framer-motion";
const CaptionModal = () => {
  const container = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: stagger(1.5, { start: 0 }),
      },
    },
    exit: {},
  };
  const item = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { type: "tween", duration: 0.4 } },
    exit: {
      opacity: 0,
      x: -200,
      transition: { type: "tween", duration: 0.5, delay: 2 },
    },
  };
  return (
    <>
      <motion.section
        variants={container}
        initial="hidden"
        animate="visible"
        className="flex gap-4 overflow-hidden"
      >
        <motion.div
          variants={item}
          className="bg-[url('/image/photo7.jpg')] bg-cover bg-center h-96 w-96 rounded-md"
        ></motion.div>
        {/* <motion.div
          variants={item}
          className="bg-[url('/image/photo8.jpg')] bg-cover bg-center h-96 w-full rounded-md"
        ></motion.div>
        <motion.div
          variants={item}
          className="bg-[url('/image/photo9.jpg')] bg-cover bg-center h-96 w-full rounded-md"
        ></motion.div> */}
        {/* <motion.div
          variants={item}
          className="bg-[url('/image/photo10.jpg')] bg-cover bg-center h-96 w-full rounded-md"
        ></motion.div>{" "} */}
      </motion.section>
    </>
  );
};

export default CaptionModal;
