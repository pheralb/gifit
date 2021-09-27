import React from "react";
import {
  chakra,
  Box,
  useColorModeValue,
  Image,
  Center,
  Text
} from "@chakra-ui/react";
import ListOfGifs from "components/Gifapp/ListOfGifs";
import { useGifs } from "hooks/useGifs";
import { motion } from "framer-motion";
import giphy from "images/animations/giphy4.gif";
import { Helmet } from "react-helmet";

const Home = () => {
  const { gifs } = useGifs();
  return (
    <>
      <Helmet>
        <title>Gifit</title>
      </Helmet>
      <Box px={8} py={15} mx="auto" bg="#000000">
        <Box
          w={{ base: "full", md: 11 / 12, xl: 9 / 12 }}
          mx="auto"
          textAlign={{ base: "center", md: "center" }}
        >
          <motion.div
            initial="hidden"
            animate="show"
            exit="hidden"
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
            A beautiful place for the perfect gif
            </chakra.h1>
          </motion.div>
          <Center mb={6}>
            <Image src={giphy} />
          </Center>
          <Text color="gray.700">&copy; Giphy Studios</Text>
        </Box>
      </Box>
      <ListOfGifs gifs={gifs} />
    </>
  );
};

export default Home;
