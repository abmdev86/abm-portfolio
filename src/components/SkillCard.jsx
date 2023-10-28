import { motion } from 'framer-motion';

const variants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 50,
    rotate: -10,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 0.8,
    },
  },
};
export default function SkillCard({ skillName, icon }) {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
      className="relative overflow-hidden flex items-center justify-center pt-[20px] mb-[-120px] mx-auto h-fit w-fit "
    >
      {skillName}
      <div className="absolute bottom-0 left-0 right-0 top-0" />
      <motion.div
        className="text-9xl w-[300px] h-[430px] flex items-center justify-center bg-white rounded-2xl  "
        variants={variants}
      >
        <span className="text-sm text-center font-bold ">{skillName}</span>

        {icon}
      </motion.div>
    </motion.div>
  );
}
