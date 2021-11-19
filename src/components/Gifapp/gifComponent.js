import React from "react";
import { Box, Image, Flex, Text } from "@chakra-ui/react";
import { Link } from "wouter";
import { motion } from "framer-motion";
export default function Gif({ title, id, url }) {
  return (
    <>
      <Flex w="full" alignItems="center" justifyContent="center">
        <motion.div
          whileHover={{
            scale: 1.05
          }}
        >
          <Box w="xs" rounded="lg" overflow="hidden" mx="auto" cursor="pointer">
            <Link
              to={`/gif/${id}`}
              display="block"
            >
              <Box maxW="sm" borderWidth="1px" rounded="lg" id={id}>
                <Image
                  w="full"
                  h={56}
                  fit="cover"
                  src={url}
                  alt={title}
                  roundedTop="lg"
                  loading="lazy"
                />
                <Box p="6">
                  <Text
                    mt="1"
                    lineHeight="tight"
                    isTruncated
                  >
                    {title}
                  </Text>
                </Box>
              </Box>
            </Link>
          </Box>
        </motion.div>
      </Flex>
    </>
  );
}
