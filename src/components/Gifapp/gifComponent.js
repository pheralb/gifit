import React from "react";
import { Box, Image } from "@chakra-ui/react";
import { Link } from "wouter";
import Hover from "animations/hover";
export default function Gif({ title, id, url }) {
  return (
    <>
      <Hover>
        <Box maxW="100%" rounded="lg" overflow="hidden" mx="auto" cursor="pointer">
          <Link to={`/gif/${id}`} display="block">
            <Box maxW={{base: "100%", md: "sm"}} borderWidth="1px" rounded="lg" id={id}>
              <Image
                w="full"
                h={{base: "100%", md: "56"}}
                fit="cover"
                src={url}
                alt={title}
                roundedTop="lg"
                loading="lazy"
              />
            </Box>
          </Link>
        </Box>
      </Hover>
    </>
  );
}
