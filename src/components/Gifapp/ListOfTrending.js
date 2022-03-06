import React, { useState, useEffect } from "react";
import { getTrendingGifs } from "services/getTrendingGifs";
import Gif from "./gifComponent";
import { SimpleGrid } from "@chakra-ui/react";

export default function ListOfTrending({ show }) {
  const [trends, setTrends] = useState([]);

  useEffect(function () {
    const controller = new AbortController();
    getTrendingGifs({ limit: show })
      .then(setTrends)
      .catch((err) => {});

    return () => controller.abort();
  }, [show]);

  return (
    <>
      <SimpleGrid
        minChildWidth={{base: "100%", md:"350px"}}
        columns={4}
        spacing={4}
        pt={3}
      >
        {trends.map(({ id, title }) => (
          <Gif
            key={id}
            title={title}
            url={`https://media3.giphy.com/media/${id}/giphy.gif`}
            id={id}
          />
        ))}
      </SimpleGrid>
    </>
  );
}
