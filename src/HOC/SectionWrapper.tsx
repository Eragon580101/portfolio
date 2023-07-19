import React from "react";
import { motion } from "framer-motion";
import { styles } from "../Styles";

export interface SectionWrapperProps {}

const SectionWrapper = (Component: React.FC, idName: string) =>
  function HOC() {
    return (
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.paddingX} relative w-full mx-auto max-w-7xl z-0`}
      >
        <span className="hash-span" id={idName}>&nbsp;</span>
        <Component />
      </motion.section>
    );
  };

export default SectionWrapper;
