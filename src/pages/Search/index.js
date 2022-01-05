import React, { useCallback, useEffect } from "react";
import Spinner from "components/Spinner/loader";
import ListOfGifs from "components/Gifapp/ListOfGifs";
import { useGifs } from "hooks/useGifs";
import useNearScreen from "hooks/useNearScreen";
import debounce from "just-debounce-it";
import { Helmet } from "react-helmet";
import { Center, Text } from "@chakra-ui/react";
import Section from "components/Global/Section";

export default function Search({ params }) {
  const { keyword } = params;
  const { gifs, loading, setPage } = useGifs({ keyword });
  const { isNearScreen, fromRef } = useNearScreen({ observeOnce: false });
  const title = gifs ? decodeURI(keyword) : "";

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
            <Section>
              <Center mb="2">
                <Text fontSize="4xl">{decodeURI(keyword)}</Text>
              </Center>
            </Section>
            <Section delay="0.2">
              <ListOfGifs gifs={gifs} />
            </Section>
          <div id="viewer" ref={fromRef}></div>
        </>
      )}
    </>
  );
}
