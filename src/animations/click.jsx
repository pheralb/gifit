import React from "react";
import { motion } from "framer-motion";

const Click = ({ children }) => {
  return <motion.button whileTap={{ scale: 0.96 }}>{children}</motion.button>;
};

export default Click;
