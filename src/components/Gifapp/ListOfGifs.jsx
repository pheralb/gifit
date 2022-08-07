import React from "react";
import { SimpleGrid  } from "@chakra-ui/react";

import Gif from "./gifComponent";

export default function ListOfGifs({ gifs }) {
  return (
    <>
      <SimpleGrid 
        minChildWidth={{base: "100%", md:"350px"}}
        columns={4} 
        spacing={5} 
        pt={5}
        pb="2">
        {gifs.map(({ id, title, url }) => (
          <Gif key={id} title={title} url={url} id={id} />
        ))}
      </SimpleGrid>
    </>
  );
}
