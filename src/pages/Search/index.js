import React, { useCallback, useEffect } from "react";
import { useParams } from "react-router-dom";
import Spinner from "components/Spinner/loader";
import ListOfGifs from "components/Gifapp/ListOfGifs";
import { useGifs } from "hooks/useGifs";
import useNearScreen from "hooks/useNearScreen";
import debounce from "just-debounce-it";
import { Helmet } from "react-helmet";
import { Box, HStack, Icon, Text } from "@chakra-ui/react";
import { IoSearchOutline } from "react-icons/io5";
import Section from "components/Global/Section";

export default function Search() {
  let params = useParams();
  const { gifs, loading, setPage } = useGifs({ keyword: params.keyword });
  const { isNearScreen, fromRef } = useNearScreen({ observeOnce: false });
  const title = gifs ? decodeURI(params.keyword) : "";

  const debounceHandleNextPage = useCallback(
    () =>
      debounce(
        setPage((prevPage) => prevPage + 1),
        100
      ),
    [setPage]
  );

  useEffect(() => {
    if (isNearScreen) debounceHandleNextPage();
  }, [isNearScreen, debounceHandleNextPage]);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <Helmet>
            <title>{title} | Gifit</title>
            <meta name="description" content={title} />
          </Helmet>
          <Box mt="2" p="4" borderBottomWidth="1px">
            <Section>
              <HStack spacing={3}>
                <Icon as={IoSearchOutline} boxSize="35px" />
                <Text fontSize="3xl">{decodeURI(params.keyword)}</Text>
              </HStack>
            </Section>
          </Box>
          <Section delay="0.2">
            <ListOfGifs gifs={gifs} />
          </Section>
          <div id="viewer" ref={fromRef}></div>
        </>
      )}
    </>
  );
}
