import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const WorkflowAnimation = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
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
    <div className="min-h-screen flex items-center justify-center relative bg-white">
      <div className="text-center">
        <h1 className="text-6xl mb-10">Walk through our Workflow</h1>
        <div className="relative max-w-5xl mx-auto" ref={ref}>
          <svg id="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" className="svg-container">
            <motion.path
              d="M 200 150
                 V 350
                 C 200 450, 300 450, 300 350
                 H 500
                 C 600 350, 600 450, 500 450
                 H 200
                 V 750"
              fill="none"
              stroke="black"
              strokeWidth="5px"
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
            style={{ top: '320px', left: '400px' }}
          >
            <h2>Press</h2>
            <p>Printing tasks for CPC, P14, P24, and P28 will be executed at this facility.</p>
          </motion.div>
          <motion.div
            className="workflow-box post-press"
            initial="hidden"
            animate={controls}
            variants={boxVariants}
            style={{ top: '650px', left: '50px' }}
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
