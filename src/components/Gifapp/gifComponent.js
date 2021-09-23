import React from "react";
import { Box, Image, Flex, Tooltip } from "@chakra-ui/react";
import { Link } from "wouter";
import { motion } from "framer-motion";
export default function Gif({ title, id, url }) {
  return (
    <>
      <Flex w="full" alignItems="center" justifyContent="center">
          <Tooltip label={title} aria-label={title}>
            <motion.div
              whileHover={{
                scale: 1.1,
                textShadow: "0px 0px 4px gray",
              }}
            >
              <Box
                w="xs"
                bg="dark.900"
                shadow="lg"
                rounded="lg"
                overflow="hidden"
                mx="auto"
              >
                <Link
                  to={`/gif/${id}`}
                  display="block"
                  fontSize="2xl"
                  fontWeight="bold"
                >
                  <Image
                    w="full"
                    h={56}
                    fit="cover"
                    src={url}
                    alt={title}
                    loading="lazy"
                    cursor="pointer"
                  />
                </Link>
              </Box>
            </motion.div>
          </Tooltip>
      </Flex>
    </>
  );
}
