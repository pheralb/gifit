import React from "react";
import { chakra, Box, useColorModeValue, Text, HStack } from "@chakra-ui/react";
import { Helmet } from "react-helmet";
import { BiSticker } from "react-icons/bi";
import { FaRegStar } from "react-icons/fa";
import { Section, ListOfTrending } from "components";
import ListOfStickers from "components/Gifapp/ListOfStickers";

const Home = () => {
  const border = useColorModeValue("gray.200", "gray.700");
  return (
    <>
      <Helmet>
        <title>Gifit</title>
      </Helmet>
      <Box p="2" mt="4" mb="4">
        <Section>
          <HStack spacing={3}>
            <FaRegStar size="30" />
            <Text fontSize="3xl">Trending</Text>
          </HStack>
        </Section>
        <Section delay="0.4">
          <ListOfTrending show={10} />
        </Section>
      </Box>
      <Box p="2" mt="5">
        <Section>
          <HStack spacing={3}>
            <BiSticker size="30" />
            <Text fontSize="3xl">Stickers</Text>
          </HStack>
        </Section>
        <Section delay="0.4">
          <ListOfStickers show={10} />
        </Section>
      </Box>
    </>
  );
};

export default Home;
