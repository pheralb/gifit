import React, { useState } from "react";
import { Redirect } from "wouter";
import Gif from "components/Gifapp/singleGif";
import useSingleGif from "hooks/useSingleGif";
import Spinner from "components/Spinner";
import { useGifs } from "hooks/useGifs";
import { Helmet } from "react-helmet";
import { chakra, Box, Flex, SimpleGrid, Button } from "@chakra-ui/react";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import { Copy } from "phosphor-react";
import confetti from "canvas-confetti";
import Sidebar from "components/Global/Sidebar";
import Section from "components/Global/Section";

export default function Detail({ params }) {
  const { gif, isLoading, isError } = useSingleGif({ id: params.id });
  const [copied, setCopied] = useState(false);
  const { gifs } = useGifs();
  const title = gif ? gif.title : "";

  if (isLoading) {
    return (
      <>
        <Helmet>
          <title>Loading...</title>
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
    toast("Copied to clipboard", {
      icon: "✨",
      style: {
        borderRadius: "10px",
        background: "#151515",
        color: "#fff",
      },
    });
    confetti({
      particleCount: 50,
      startVelocity: 30,
      spread: 360,
    });
  }
  return (
    <>
      <Helmet>
        <title>{title} | Gifit</title>
      </Helmet>
      <Sidebar>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={0}>
          <Box>
            <Gif {...gif} />
          </Box>
          <Flex
            direction="column"
            alignItems="start"
            justifyContent="center"
            px={{ base: 4, lg: 20 }}
          >
            <chakra.h1
              mt={{ base: 6, lg: 0 }}
              mb={6}
              fontSize={{ base: "4xl", md: "4xl", lg: "5xl" }}
              fontWeight="bold"
              lineHeight="shorter"
            >
              {gif.title}
            </chakra.h1>
            <motion.button whileTap={{ scale: 0.9 }}>
              <Section>
                <Button
                  onClick={copy}
                  colorScheme="teal"
                  variant="ghost"
                  border="1px"
                  px={5}
                  py={3}
                  width="full"
                  fontWeight="light"
                  rounded="lg"
                  leftIcon={<Copy />}
                >
                  Copy
                </Button>
              </Section>
            </motion.button>
          </Flex>
        </SimpleGrid>
      </Sidebar>
    </>
  );
}
