import React from "react";
import { Image } from "@chakra-ui/react";
export default function Gif({ title, id, url }) {
  return (
    <>
      <Image
        id={id}
        w="100%"
        fit="cover"
        src={url}
        alt={title}
        loading="lazy"
      />
    </>
  );
}
