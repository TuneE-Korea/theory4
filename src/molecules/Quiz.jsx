import { motion } from "framer-motion";
const Quiz = () => {
  const hidden = { opacity: 0, y: 50 };
  const show = { opacity: 1, y: 0 };
  return (
    <>
      <section className="h-screen bg-green-200 flex flex-col justify-center items-center gap-2">
        <motion.h1
          initial={hidden}
          whileInView={{ show, transition: { duration: 0.6 } }}
          className="text-white text-6xl font-semibold"
        >
          Lifetime Mobility
        </motion.h1>
        <motion.h2
          initial={{ hidden }}
          whileInView={{
            show,
            transition: { duration: 0.6, delay: 0.6 },
          }}
          className="text-white text-4xl font-bold"
        >
          라이프타임 모빌리티 플랫폼, 쏘카
        </motion.h2>
      </section>
      <section className="h-screen bg-slate-300 flex  justify-center items-center gap-0">
        <div className="flex flex-col w-full m-auto max-w-96">
          <motion.div
            initial={{ hidden }}
            whileInView={{ show, transition: { duration: 0.3 } }}
            viewport={{ amount: "all" }}
            className="w-fit p-2 text-white text-2xl font-medium"
          >
            차가 필요한 모든 순간
          </motion.div>
          <motion.div
            initial={{ hidden }}
            whileInView={{
              show,
              transition: { duration: 0.3, delay: 0.3 },
            }}
            viewport={{ amount: "all" }}
            className=" w-fit p-2 text-white text-xl font-bold"
          >
            쏘카 카 셰어링
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Quiz;
