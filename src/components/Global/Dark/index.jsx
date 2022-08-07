import React from "react";
import { useColorMode, useColorModeValue, IconButton } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import toast from "react-hot-toast";
import { BiMoon, BiSun } from "react-icons/bi";

const Dark = () => {
  const { toggleColorMode } = useColorMode();
  const iconChange = useColorModeValue(
    <BiMoon size="22" />,
    <BiSun size="22" />
  );
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
          variant="ghost"
          icon={iconChange}
          onClick={toggleTheme}
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default Dark;
