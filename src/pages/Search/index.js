import React, { useRef } from "react";
import Spinner from "components/Spinner/loader";
import ListOfGifs from "components/Gifapp/ListOfGifs";
import { useGifs } from "hooks/useGifs";
import { Helmet } from "react-helmet";
import {
  Box,
  Text,
  Center,
  Link,
  Button,
} from "@chakra-ui/react";
import { ArrowDown } from "phosphor-react";

export default function Search({ params }) {
  const { keyword, rating } = params;
  const { loading, gifs, setPage } = useGifs({ keyword, rating });

  const externalRef = useRef();
  const title = gifs ? `${keyword}` : "";

  const handleNextPage = () => setPage((prevPage) => prevPage + 1);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <Helmet>
            <title>{title} | Gifit</title>
            <meta name="description" content={title} />
            <meta name="rating" content={rating} />
          </Helmet>
          <Center bg="gray.800" width="100%" p={4} color="white">
            <Text fontSize="4xl" data-aos="fade-right" data-aos-duration="300">
              {decodeURI(keyword)}
            </Text>
          </Center>
          <ListOfGifs gifs={gifs} />
          <Box width="100%" p={4} mt={5}>
            <Center>
              <Text
                fontSize="4xl"
                data-aos="fade-right"
                data-aos-duration="300"
                mb="4"
              >
                More gifs?
              </Text>
            </Center>
            <Center>
              <Link onClick={handleNextPage}>
                <Button colorScheme="teal" size="lg" leftIcon={<ArrowDown />}>
                    load more gifs
                </Button>
              </Link>
            </Center>
          </Box>
        </>
      )}
    </>
  );
}
