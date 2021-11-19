import React, { useCallback, useEffect } from "react";
import Spinner from "components/Spinner/loader";
import ListOfGifs from "components/Gifapp/ListOfGifs";
import { useGifs } from "hooks/useGifs";
import useNearScreen from "hooks/useNearScreen";
import debounce from "just-debounce-it";
import { Helmet } from "react-helmet";
import { Box, Text, Center, Link, Button } from "@chakra-ui/react";
import { ArrowDown } from "phosphor-react";
import Sidebar from "components/Global/Sidebar";
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
          <Sidebar>
            <Section>
              <Text
                fontSize="5xl"
                data-aos="fade-right"
                data-aos-duration="300"
                ml="5"
              >
                {decodeURI(keyword)}
              </Text>
            </Section>
            <Section delay="0.2">
              <ListOfGifs gifs={gifs} />
            </Section>
            <div id="viewer" ref={fromRef}></div>
          </Sidebar>
        </>
      )}
    </>
  );
}
