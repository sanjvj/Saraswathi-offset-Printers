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
    <div className="min-h-screen flex items-center justify-center relative">
      <div className="text-center">
        <h1 className="text-6xl mb-20 mt-32">Walk through our Workflow</h1>
        <div className="relative max-w-5xl mx-auto" ref={ref}>
          <svg id="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 1000" className="svg-container">
            {/* Define a vertical line path */}
            <motion.path
              d="M 600 25 V 2000" // Vertical line from y=50 to y=950
              fill="none"
              stroke="black"
              strokeWidth="5px"
              strokeDasharray="5,5"
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
            style={{ top: '50px', left: '180px' }} // Adjusted position
          >
            <h2>Pre-Press</h2>
            <p>Utilizing design software such as CorelDRAW to import printed files onto CTP plates.</p>
          </motion.div>
          <motion.div
            className="workflow-box press"
            initial="hidden"
            animate={controls}
            variants={boxVariants}
            style={{ top: '400px', left: '550px' }} // Adjusted position
          >
            <h2>Press</h2>
            <p>Printing tasks for CPC, P14, P24, and P28 will be executed at this facility.</p>
          </motion.div>
          <motion.div
            className="workflow-box post-press"
            initial="hidden"
            animate={controls}
            variants={boxVariants}
            style={{ top: '750px', left: '180px' }} // Adjusted position
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
