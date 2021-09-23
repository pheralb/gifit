import React, { useState } from "react";
import { Redirect } from "wouter";
import Gif from "components/Gifapp/singleGif";
import useSingleGif from "hooks/useSingleGif";
import Spinner from "components/Spinner";
import { Helmet } from "react-helmet";
import { chakra, Box, Flex, Button, useToast } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Copy } from "phosphor-react";

export default function Detail({ params }) {
  const { gif, isLoading, isError } = useSingleGif({ id: params.id });
  const [copied, setCopied] = useState(false);
  const title = gif ? gif.title : "";
  const toast = useToast()

  if (isLoading) {
    return (
      <>
        <Helmet>
          <title>Cargando...</title>
        </Helmet>
        <Spinner />
      </>
    );
  }

  if (isError) return <Redirect to="/404" />;
  if (!gif) return null;

  const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
  };


  function copy() {
    const el = document.createElement("input");
    el.value = window.location.href;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    setCopied(true);
    toast({
      title: "Copied!",
      status: "success",
      duration: 3000,
      isClosable: true,
    })
  }

  return (
    <>
      <Helmet>
        <title>{title} | Gifit</title>
      </Helmet>
      <motion.main
        variants={variants} // Pass the variant object into Framer Motion
        initial="hidden" // Set the initial state to variants.hidden
        animate="enter" // Animated state to variants.enter
        exit="exit" // Exit state (used later) to variants.exit
        transition={{ type: "linear" }} // Set the transition to linear
        className=""
      >
        <Flex p={50} w="full" alignItems="center" justifyContent="center" borderBottom="1px" borderColor="gray.700">
          <Box
            mx={{ lg: 8 }}
            display={{ lg: "flex" }}
            maxW={{ lg: "5xl" }}
          >
            <Box w={{ lg: "100%" }}>
              <Gif {...gif} />
            </Box>
            <Box
              py={12}
              px={6}
              maxW={{ base: "xl", lg: "5xl" }}
              w={{ lg: "50%" }}
            >
              <chakra.h2
                fontSize={{ base: "3xl", md: "4xl" }}
                fontWeight="bold"
              >
                {gif.title}
              </chakra.h2>
              <Box mt={8}>
                <Button
                  onClick={copy}
                  variant="ghost"
                  color="gray.100"
                  px={5}
                  py={3}
                  fontWeight="semibold"
                  rounded="lg"
                  _hover={{ bg: "gray.800" }}
                  leftIcon={<Copy />}
                >
                  {!copied ? "Copy link" : "Copied!"}
                </Button>
              </Box>
            </Box>
          </Box>
        </Flex>
      </motion.main>
    </>
  );
}
