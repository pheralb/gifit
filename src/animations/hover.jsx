import React from "react";
import { motion } from "framer-motion";

const Hover = ({ children }) => {
  return (
    <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.99 }}>
      {children}
    </motion.div>
  );
};

export default Hover;
