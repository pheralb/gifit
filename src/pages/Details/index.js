import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Gif from "components/Gifapp/singleGif";
import useSingleGif from "hooks/useSingleGif";
import Spinner from "components/Spinner";
import { Helmet } from "react-helmet";
import { chakra, Box, Flex, SimpleGrid, Button } from "@chakra-ui/react";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import { IoCopyOutline } from "react-icons/io5";
import confetti from "canvas-confetti";
import Section from "components/Global/Section";

export default function Detail() {
  let params = useParams();
  const { gif, isLoading, isError } = useSingleGif({ id: params.id });
  const [copied, setCopied] = useState(false);
  const navigate = useNavigate();
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

  if (isError) return navigate('/404');
  if (!gif) return null;

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
        <SimpleGrid columns={{ base: 1, md: 2 }} mt="4" spacing={0}>
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
                  leftIcon={<IoCopyOutline />}
                >
                  Copy
                </Button>
              </Section>
            </motion.button>
          </Flex>
        </SimpleGrid>
    </>
  );
}
