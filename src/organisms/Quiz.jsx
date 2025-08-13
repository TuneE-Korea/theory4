import { motion } from "framer-motion";
import TitleLayer from "../molecules/TitleLayer";
import CaptionLayer from "../molecules/CaptionLayer";

const Quiz = () => {
  const hidden = { opacity: 0, y: 50 };
  const show = { opacity: 1, y: 0 };
  return (
    <>
      <TitleLayer before={hidden} after={show} />
      <CaptionLayer before={hidden} after={show} />
    </>
  );
};

export default Quiz;
