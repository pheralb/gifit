import React from "react";
import { useColorMode, useColorModeValue, IconButton } from "@chakra-ui/react";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
import { AnimatePresence, motion } from "framer-motion";
import toast from "react-hot-toast";

const Dark = () => {
  const { toggleColorMode } = useColorMode();
  const iconChange = useColorModeValue(<IoMoonOutline size="25" />, <IoSunnyOutline size="25" />);
  const keyChange = useColorModeValue("light", "dark");

  function toggleTheme() {
    toast("Theme changed", {
      icon: "🎨",
      style: {
        borderRadius: "10px",
        background: "#151515",
        color: "#fff",
      },
    });
    toggleColorMode();
  }

  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <motion.div
        style={{ display: "inline-block" }}
        key={keyChange}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <IconButton
          aria-label="Toggle theme"
          bg="transparent"
          border="0"
          variant="outline"
          icon={iconChange}
          onClick={toggleTheme}
        ></IconButton>
      </motion.div>
    </AnimatePresence>
  );
};

export default Dark;
