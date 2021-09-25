import React, {useCallback, useRef, useEffect} from 'react'
import Spinner from 'components/Spinner';
import ListOfGifs from 'components/Gifapp/ListOfGifs';
import {useGifs} from 'hooks/useGifs';
import {Helmet} from 'react-helmet';
import { Box, Text, Center, chakra, Stack, Flex, Link, Button } from "@chakra-ui/react";
export default function Search ({ params }){

    const { keyword, rating } = params
    const { loading, gifs, setPage } = useGifs({ keyword, rating })
    
    const externalRef = useRef() 
    const title = gifs ? `${keyword}` : ''

    const handleNextPage = () => setPage(prevPage => prevPage + 1)

    return <>
        {loading
        ? <Spinner />
        : <>
            <Helmet>
                <title>{title} | Gifit</title>
                <meta name="description" content={title} />
                <meta name="rating" content="General" />
            </Helmet>
            <header className="o-header">
            {/* <SearchForm initialKeyword={keyword} initialRating={rating} /> */}
            </header>
            <div className="App-wrapper">
            <div className="cloned-2">
                <Center bg="gray.800" width="100%" p={4} color="white">
                    <Text fontSize="4xl" data-aos="fade-right" data-aos-duration="300">{decodeURI(keyword)}</Text>
                </Center>
            </div> 
            <ListOfGifs gifs={gifs} />
            <Flex
            mt="15px"
            w="full"
            alignItems="center"
            justifyContent="center"
            >
            <Flex
                justify="center"
                w="full"
            >
                <Box
                w={{ base: "full", md: "75%", lg: "50%" }}
                px={4}
                py={10}
                textAlign={{ base: "center", md: "center" }}
                >
                <chakra.span
                    fontSize={{ base: "3xl", sm: "4xl" }}
                    fontWeight="extrabold"
                    letterSpacing="tight"
                    lineHeight="shorter"
                    mb={6}
                >
                    <chakra.span display="block">Need more gifs?</chakra.span>
                </chakra.span>
                <Stack
                    justifyContent={{ base: "center", md: "center" }}
                    direction={{ base: "column", sm: "row" }}
                    spacing={2}
                    mt={2}
                >
                    <Link
                        w="full"
                        onClick={handleNextPage}
                    >
                    <Button colorScheme="teal" 
                        size="lg">
                    
                        MORE GIFS
                    </Button>
                    </Link>
                </Stack>
                </Box>
            </Flex>
            </Flex>
            </div>
        </>
        }
        
    </>
}
