import React, { useState, useEffect } from "react";
import { getTrendingGifs } from "services/getTrendingGifs";
import Category from "components/Category";
import Gif from "./gifComponent";
import { SimpleGrid } from "@chakra-ui/react";

export default function ListOfTrending() {
  const [trends, setTrends] = useState([]);

  useEffect(function () {
    const controller = new AbortController();
    getTrendingGifs({ signal: controller.signal })
      .then(setTrends)
      .catch((err) => {});

    return () => controller.abort();
  }, []);

  return (
    <>
      <SimpleGrid
        minChildWidth={[300, 400, 350]}
        columns={4}
        spacing={5}
        pt={5}
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
