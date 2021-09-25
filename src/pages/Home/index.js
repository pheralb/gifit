import React, { useState } from "react";
import {
  chakra,
  Box,
  useColorModeValue,
  Button,
  Stack,
  Image,
  Center,
  Icon,
} from "@chakra-ui/react";
import ListOfGifs from "components/Gifapp/ListOfGifs";
import { useGifs } from "hooks/useGifs";
import { motion } from "framer-motion";

const Home = () => {
  const { gifs } = useGifs();
  return (
    <>
      <Box px={8} py={15} mx="auto" bg="#000000">
        <Box
          w={{ base: "full", md: 11 / 12, xl: 9 / 12 }}
          mx="auto"
          textAlign={{ base: "center", md: "center" }}
        >
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {
                scale: 0.9,
                opacity: 0,
              },
              visible: {
                scale: 1,
                opacity: 1,
              },
            }}
          >
            <chakra.h1
              mt="10"
              mb={6}
              fontSize={{ base: "4xl", md: "6xl" }}
              fontWeight="bold"
              lineHeight="none"
              letterSpacing={{ base: "normal", md: "tight" }}
              color={useColorModeValue("white", "gray.100")}
            >
              A beautiful place to discover gifs
            </chakra.h1>
          </motion.div>
          <Center mb={6}>
            <Image src="https://media0.giphy.com/media/3o85xqlAQLrPgXH29O/giphy.gif?cid=ecf05e47sp8pq0f3p0vx70sjl87rwnog33sp7o3tdpzorqep&rid=giphy.gif&ct=g" />
          </Center>
        </Box>
      </Box>
      <ListOfGifs gifs={gifs} />
    </>
  );
};

export default Home;
