"use client"
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function ScrollSequence() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const verticalVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const horizontalVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  return (
    <div>
      {/* Vertical Scroll Section 1 */}
      <motion.div
        className="section vertical"
        initial="visible"
        animate={controls}
        variants={verticalVariants}
        ref={ref}
      >
        <h1>Vertical Scroll Section 1</h1>
      </motion.div>

      {/* Horizontal Scroll Section */}
      <div className="horizontal-container">
        <motion.div
          className="section horizontal"
          initial="hidden"
          animate={controls}
          variants={horizontalVariants}
          ref={ref}
        >
          <h1>Horizontal Scroll Section</h1>
        </motion.div>
      </div>

      {/* Vertical Scroll Section 2 */}
      <motion.div
        className="section vertical"
        initial="hidden"
        animate={controls}
        variants={verticalVariants}
        ref={ref}
      >
        <h1>Vertical Scroll Section 2</h1>
      </motion.div>
    </div>
  );
}
