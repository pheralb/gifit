import React, { useState, useEffect } from "react";
import { SimpleGrid } from "@chakra-ui/react";

import { getTrendingStickers } from "@/services/getTrendingStickers";
import Gif from "./gifComponent";

export default function ListOfStickers({ show }) {
  const [trends, setTrends] = useState([]);

  useEffect(function () {
    const controller = new AbortController();
    getTrendingStickers({ limit: show })
      .then(setTrends)
      .catch((err) => {});

    return () => controller.abort();
  }, [show]);

  return (
    <>
      <SimpleGrid
        minChildWidth={[300, 400, 350]}
        columns={4}
        spacing={5}
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