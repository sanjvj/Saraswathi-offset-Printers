import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const WorkflowAnimation = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const lineVariants = {
    hidden: { pathLength: 0 },
    visible: {
      pathLength: 1,
      transition: { duration: 3, ease: 'easeInOut' },
    },
  };

  const boxVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: 'easeOut', delay: 0.5 },
    },
  };

  return (
    <div className="bg-black text-white min-h-screen flex items-center justify-center relative">
      <div className="text-center">
        <h1 className="text-xl mb-10">Scroll to see a workflow animation</h1>
        <div className="relative max-w-5xl mx-auto" ref={ref}>
          <svg id="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1200" className="svg-container">
            <motion.path
              d="M 150 100 V 200 H 500 V 200 H 500 V 400 H 150 V 400 H 150 V 1000 H 500 V 1000"
              fill="none"
              stroke="white"
              strokeWidth="20px"
              initial="hidden"
              animate={controls}
              variants={lineVariants}
              className="workflow-line"
            />
          </svg>
          <motion.div
            className="workflow-box pre-press"
            initial="hidden"
            animate={controls}
            variants={boxVariants}
            style={{ top: '120px', left: '50px' }}
          >
            <h2>Pre-Press</h2>
            <p>Utilizing design software such as CorelDRAW to import printed files onto CTP plates.</p>
          </motion.div>
          <motion.div
            className="workflow-box press"
            initial="hidden"
            animate={controls}
            variants={boxVariants}
            style={{ top: '400px', left: '300px' }}
          >
            <h2>Press</h2>
            <p>Printing tasks for CPC, P14, P24, and P28 will be executed at this facility.</p>
          </motion.div>
          <motion.div
            className="workflow-box post-press"
            initial="hidden"
            animate={controls}
            variants={boxVariants}
            style={{ top: '800px', left: '50px' }}
          >
            <h2>Post-Press</h2>
            <p>Job finishing tasks, such as cutting, die cutting, and scoring, will be carried out at this facility.</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default WorkflowAnimation;
