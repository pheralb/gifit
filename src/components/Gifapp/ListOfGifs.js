import React from "react";
import Gif from "./gifComponent";
import { SimpleGrid, Container  } from "@chakra-ui/react";

export default function ListOfGifs({ gifs }) {
  return (
    <>
      <SimpleGrid 
        minChildWidth={[300, 400, 300]} 
        columns={4} 
        spacing={6} 
        pt={3}>
        {gifs.map(({ id, title, url }) => (
          <Gif key={id} title={title} url={url} id={id} />
        ))}
      </SimpleGrid>
    </>
  );
}
