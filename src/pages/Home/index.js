import React from "react";
import {
  chakra,
  Box,
  useColorModeValue,
  Text,
  InputGroup,
  InputRightElement,
  Input,
  HStack,
} from "@chakra-ui/react";
import { Helmet } from "react-helmet";
import { MagnifyingGlass, Sticker, TrendUp } from "phosphor-react";
import { useLocation } from "wouter";
import { Section, ListOfTrending } from "components";
import useForm from "hooks/searchHook";
import ListOfStickers from "components/Gifapp/ListOfStickers";
const RATINGS = ["g", "pg", "pg-13", "r"];

const Home = ({ initialKeyword = "", initialRating = RATINGS[0] }) => {
  const [_, pushLocation] = useLocation();
  const border = useColorModeValue("gray.200", "gray.700");
  const bg = useColorModeValue("#E8E8E8", "#151515");

  const { keyword, rating, changeKeyword, changeRating } = useForm({
    initialKeyword,
    initialRating,
  });

  const onSubmit = ({ keyword }) => {
    if (keyword !== "") {
      pushLocation(`/search/${keyword}/${rating}`);
    }
  };

  const handleChange = (evt) => {
    changeKeyword({ keyword: evt.target.value });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onSubmit({ keyword });
  };

  return (
    <>
      <Helmet>
        <title>Gifit</title>
      </Helmet>
      <Box mx="auto" borderColor={border}>
        <Box
          mt={{ base: "4", md: "8" }}
          w={{ base: "full", md: 11 / 12, xl: 8 / 12 }}
          textAlign={{ base: "left", md: "center" }}
          mx="auto"
        >
          <chakra.h1
            bgGradient='linear(to-l, #7928CA, #FF0080)'
            bgClip='text'
            fontSize={{ base: "3xl", md: "6xl" }}
            fontWeight='extrabold'
            mb={{ base: "3", md: "4" }}
          >
            Discover amazing gifs
          </chakra.h1>
          <Box
            w={{ base: "full", md: 7 / 12 }}
            columns={{ base: 1, lg: 6 }}
            spacing={3}
            pt={1}
            mx="auto"
            mb={5}
          >
            <form id="text" onSubmit={handleSubmit}>
              <InputGroup>
                <InputRightElement
                  mt="3px"
                  mr="2px"
                  children={<MagnifyingGlass size="23" />}
                />
                <Input
                  type="text"
                  fontSize="20px"
                  placeholder="Search gif..."
                  variant="filled"
                  onChange={handleChange}
                  size="lg"
                  autofocus="true"
                />
              </InputGroup>
            </form>
          </Box>
        </Box>
      </Box>
      <Box p="2" mt="5">
        <Section>
          <HStack spacing={3}>
            <TrendUp size="30"/>
            <Text fontSize="3xl">
              Trending
            </Text>
          </HStack>
        </Section>
        <Section delay="0.4">
          <ListOfTrending show={8} />
        </Section>
      </Box>
      <Box p="2" mt="5">
        <Section>
          <HStack spacing={3}>
            <Sticker size="30"/>
            <Text fontSize="3xl">
              Stickers
            </Text>
          </HStack>
        </Section>
        <Section delay="0.4">
          <ListOfStickers show={8} />
        </Section>
      </Box>
    </>
  );
};

export default Home;
