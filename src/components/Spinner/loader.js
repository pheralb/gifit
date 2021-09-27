import React from 'react'
import { motion } from "framer-motion";
import { Box, Center } from "@chakra-ui/react";

const colors = ["#22238f", "#6b45fa", "#ca3286", "#fe2b49", "#fe652d"];

const containerVariants = {
  initial: {},
  animate: {
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1
    }
  }
};

const dotVariants = {
  initial: {},
  animate: {
    height: [40, 100, 40],
    transition: {
      repeat: Infinity
    }
  }
};

const Loader = ({ count = 5 }) => {
  return (
    <>
    <Box>
    <Center mt="20" h="100px" color="white">
    <motion.div
      variants={containerVariants}
      initial="initial"
      animate="animate"
      style={{
        display: "flex",
        gap: 16,
        height: 100,
        alignItems: "center"
      }}
    >
      {Array(count)
        .fill(null)
        .map((_, index) => {
          return (
            <motion.div
              key={index}
              variants={dotVariants}
              style={{
                height: 20,
                width: 20,
                backgroundColor: colors[index % colors.length],
                borderRadius: 20
              }}
            />
          );
        })}
    </motion.div>
    </Center>
    </Box>
    </>
  );
};

export default Loader;
