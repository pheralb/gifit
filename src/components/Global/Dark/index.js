import React from "react";
import {
  useColorMode,
  useColorModeValue,
  Button,
  useToast,
  IconButton,
} from "@chakra-ui/react";
import { Sun, Moon } from "phosphor-react";
import { AnimatePresence, motion } from "framer-motion";

const Dark = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const iconChange = useColorModeValue(<Moon size="25" />, <Sun size="25" />);
  const keyChange = useColorModeValue("light", "dark");
  const toast = useToast();

  function toggleTheme() {
    toast({
      title: "Theme changed",
      status: "info",
      duration: 2000,
      isClosable: true,
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
