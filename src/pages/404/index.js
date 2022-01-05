import React from "react";
import { Box, Image, Container, Text, Button } from "@chakra-ui/react";
import { Helmet } from "react-helmet";
import { Link } from "wouter";
const index = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Error | Gifit</title>
      </Helmet>
      <Box>
        <Container>
          <Box pt="2">
            <Image
              src="https://media2.giphy.com/media/xTiN0L7EW5trfOvEk0/giphy.gif?cid=76861cbcvb8mc29amr883z5km38yfyjqokgsep7viypm38nk&rid=giphy.gif&ct=g"
              alt="Hmmmm"
            />
          </Box>
          <Text fontSize="3xl" pt="4">
            Error 404
          </Text>
          <Text>Ups, page not found</Text>
          <Link to="/home">
            <Button colorScheme="teal" variant="outline" mt="4" fontWeight="light">
              Go Home
            </Button>
          </Link>
        </Container>
      </Box>
    </>
  );
};

export default index;
