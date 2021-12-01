import React from "react";
import {
  Container,
  Stack,
  chakra,
  Box,
  useColorModeValue,
  Text,
  Button,
  Image,
  FormControl,
  InputGroup,
  InputRightElement,
  FormHelperText,
  Input,
} from "@chakra-ui/react";
import { Helmet } from "react-helmet";
import { MagnifyingGlass } from "phosphor-react";
import { useLocation } from "wouter";
import { TrendingSearches, Section, ListOfTrending } from "components";
import useForm from "hooks/searchHook";

const RATINGS = ["g", "pg", "pg-13", "r"];

const Home = ({ initialKeyword = "", initialRating = RATINGS[0] }) => {
  const [_, pushLocation] = useLocation();
  const border = useColorModeValue("gray.200", "gray.700");

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
      <TrendingSearches />
      <Box px={4} py={20} mx="auto" borderBottom="1px" borderColor={border}>
        <Box
          w={{ base: "full", md: 11 / 12, xl: 8 / 12 }}
          textAlign={{ base: "left", md: "center" }}
          mx="auto"
        >
          <chakra.h1
            mb={10}
            fontSize={{ base: "4xl", md: "5xl" }}
            fontWeight={{ base: "bold", md: "extrabold" }}
            lineHeight="shorter"
          >
            Start with amazing gifs
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
                  children={<MagnifyingGlass size="23"/>}
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
          <Text ml="5" fontSize="3xl">
            Trending
          </Text>
        </Section>
        <Section delay="0.4">
          <ListOfTrending />
        </Section>
      </Box>
    </>
  );
};

export default Home;
