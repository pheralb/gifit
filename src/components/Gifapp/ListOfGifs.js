import React from "react";
import Gif from "./gifComponent";
import { SimpleGrid  } from "@chakra-ui/react";

export default function ListOfGifs({ gifs }) {
  return (
    <>
      <SimpleGrid 
        minChildWidth={[300, 400, 350]} 
        columns={4} 
        spacing={5} 
        pt={5}>
        {gifs.map(({ id, title, url }) => (
          <Gif key={id} title={title} url={url} id={id} />
        ))}
      </SimpleGrid>
    </>
  );
}
