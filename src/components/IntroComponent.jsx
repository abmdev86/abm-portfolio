import { motion } from 'framer-motion';

export default function IntroComponent() {
  return (
    <div className="flex flex-col flex-grow w-full h-fit ">
      <motion.div
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 270, 270, 0],
          borderRadius: ['20%', '20%', '50%', '50%', '20%'],
        }}
        className="w-fit h-fit p-2 justify-content items-center"
      >
        <h1 className="text-7xl md:text-9xl font-bold font-sans  uppercase  text-black">
          Auroiah Morgan
        </h1>
      </motion.div>
      <p className="text-gray-500">FullStack Web Developer</p>
    </div>
  );
}
