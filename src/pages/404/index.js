import React from "react";
import { Box, Image, Container, Text } from "@chakra-ui/react";
import { Helmet } from "react-helmet";
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
              src="https://media1.giphy.com/media/xT9IgFWN8DXgWvqvBK/giphy.gif?cid=76861cbc6yvnf4dy05kc91056zprr11anpmsdawqbztzf87c&rid=giphy.gif&ct=g"
              alt="Hmmmm"
            />
          </Box>
          <Text fontSize="3xl" pt="4">
            Error 404
          </Text>
          <Text>looking for cats?</Text>
        </Container>
      </Box>
    </>
  );
};

export default index;
