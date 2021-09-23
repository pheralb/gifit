import React from "react";
import {
  useColorMode,
  useColorModeValue,
  Button,
  useToast,
} from "@chakra-ui/react";
import { Palette } from "phosphor-react";
const Dark = () => {

  const bg = useColorModeValue("gray.200", "#151515");
  const { colorMode, toggleColorMode } = useColorMode();
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
    <Button
      variant="solid"
      onClick={toggleTheme}
      bg={bg}
      leftIcon={<Palette size="25" />}
      fontWeight="light"
    >
      {colorMode === "light" ? "Dark" : "Light"}
    </Button>
  );
};

export default Dark;
