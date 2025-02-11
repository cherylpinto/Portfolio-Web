import React from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const achievementsList = [
  {
    metric: "Projects",
    value: 7,
    postfix: "+",
  },
  {
    prefix: "~",
    metric: "Years of Experience",
    value: 2,
  },
  {
    metric: "Certifications",
    value: 4,
    postfix: "+",
  },
];

const AnimatedCounter = ({ value, inView }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (inView) {
      animate(count, value, { duration: 1.5, ease: "easeOut" });
    }
  }, [inView, count, value]);

  return <motion.span>{rounded}</motion.span>;
};

const AchievementsSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, 
    threshold: 0.5, 
  });

  return (
    <div ref={ref} className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="sm:border-[#33353F] sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between">
        {achievementsList.map((achievement, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
          >
            <h2 className="text-white text-4xl font-bold flex flex-row">
              {achievement.prefix || ""}
              <AnimatedCounter value={achievement.value} inView={inView} />
              {achievement.postfix || ""}
            </h2>
            <p className="text-gray-400 text-lg">{achievement.metric}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AchievementsSection;