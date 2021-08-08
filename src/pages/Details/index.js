import React from 'react'
import { Redirect } from 'wouter'
import Gif from 'components/Gifapp/singleGif'
import useSingleGif from 'hooks/useSingleGif'
import Spinner from 'components/Spinner'
import { Helmet } from 'react-helmet'
import {
  Box,
  Container,
  Text
} from "@chakra-ui/react";
export default function Detail ({ params }) {
  const {gif, isLoading, isError} = useSingleGif({id: params.id})
  const title = gif ? gif.title : ''

  if (isLoading) {
    return (
      <>
        <Helmet>
          <title>Cargando...</title>
        </Helmet>
        <Spinner />
      </>
    )
  }

  if (isError) return <Redirect to='/404' />
  if (!gif) return null

  return <>
      <Helmet>
        <title>{title} | Gifit</title>
      </Helmet>
      <Box borderBottom="1px" p="6">
        <Container
        w="full"
        maxW="container.md"
      >
        <Box
          mx="auto"
          border="1px" 
          borderColor="gray.900"
          rounded="lg"
          maxW="container.xl"
        >
          <Gif {...gif} />
          <Box p={6}>
            <Box>
                <Text fontSize="4xl">{gif.title}</Text>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
    </>
}