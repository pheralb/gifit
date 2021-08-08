import React from 'react'
import {
    chakra,
    Box,
    Image,
    Flex,
    useColorModeValue
  } from "@chakra-ui/react";
import {Link} from 'wouter';
export default function Gif ({ title, id, url }) {
    return (
        <>
            <Flex
                w="full"
                alignItems="center"
                justifyContent="center"
                >
                <Box
                    w="xs"
                    bg={useColorModeValue("white", "blue.900")}
                    shadow="lg"
                    rounded="lg"
                    overflow="hidden"
                    mx="auto"
                >
                    <Link
                        to={`/gif/${id}`}
                        display="block"
                        fontSize="2xl"
                        color={useColorModeValue("gray.800", "white")}
                        fontWeight="bold"
                    >
                    <Image
                    w="full"
                    h={56}
                    fit="cover"
                    src={url}
                    alt={title}
                    loading='lazy'
                    />
                    <Box py={5} textAlign="center">
                        {title}
                    </Box>
                    </Link>
                </Box>
            </Flex>
        </>
    )
}
