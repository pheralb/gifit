/* Import libraries: */
import React from 'react';
import { Link } from 'wouter';
import logo from 'images/logo.png'; 
/*-----------------------------------------------*/
/* Chakra UI & Components: */
import {
    chakra,
    Box,
    Flex,
    useColorModeValue,
    VisuallyHidden,
    HStack,
    Button,
    useDisclosure,
    VStack,
    IconButton,
    CloseButton,
    ScaleFade,
    Badge
  } from "@chakra-ui/react";
  import { List } from "phosphor-react";
import Search from 'components/SearchForm';
import AuthComponent from '../AuthComponent';
/*-----------------------------------------------*/
/* Links: */
const HEADER_LINKS = [{
    href: '/',
    literal: 'Latest'
  }, {
    href: '/nuevas',
    literal: 'Create'
}]
/*-----------------------------------------------*/
/* Link Components: */
const NavLink = ({ href, literal }) => {
  
    return (
        <Link
        href={href} 
        _hover={{
          textDecoration: 'none',
        }}>
            <Button variant="ghost">{literal}</Button>
        </Link>
    )
}
/*-----------------------------------------------*/
const Header = () => {

    const bg = useColorModeValue("dark.800", "dark.800");
    const mobileNav = useDisclosure();

    return (
        <>
            <chakra.header
                w="full"
                px={{ base: 2, sm: 4 }}
                py={3}
                shadow="md"
                pos="sticky"
                top='0'
                zIndex="1000"
            >
                <Flex alignItems="center" justifyContent="space-between" mx="auto">
                <Flex data-aos="flip-left">
                    <Link href="/home#">
                        <chakra.a
                        title="Gifiiii"
                        display="flex"
                        alignItems="center"
                        >
                        <img src={logo} width={100}/> <Badge colorScheme="green">BETA</Badge>
                        <VisuallyHidden>GIFIT</VisuallyHidden>
                        </chakra.a>
                    </Link>
                </Flex>
                <HStack display="flex" alignItems="center" spacing={1}>
                    <HStack
                    spacing={1}
                    mr={1}
                    color="brand.500"
                    display={{ base: "none", md: "inline-flex" }}
                    >
                        {HEADER_LINKS.map(link => <NavLink key={link.href} {...link} />)}
                        <AuthComponent />
                        <Search />
                    </HStack>
                    <ScaleFade initialScale={0.9} in={mobileNav.onOpen}>
                    <Box display={{ base: "inline-flex", md: "none" }}>
                    <IconButton
                        display={{ base: "flex", md: "none" }}
                        aria-label="Open menu"
                        fontSize="30px"
                        color="white"
                        variant="ghost"
                        icon={<List />}
                        onClick={mobileNav.onOpen}
                    />
                        <VStack
                            pos="absolute"
                            top={0}
                            left={0}
                            right={0}
                            display={mobileNav.isOpen ? "flex" : "none"}
                            flexDirection="column"
                            p={2}
                            pb={4}
                            bg="gray.900"
                            spacing={3}
                            rounded="sm"
                            shadow="sm"
                        >
                            <CloseButton
                            aria-label="Close menu"
                            onClick={mobileNav.onClose}
                            />
                            {HEADER_LINKS.map(link => <NavLink key={link.href} {...link} />)}
                            <AuthComponent />
                            <Search />
                        </VStack>  
                    </Box>
                    </ScaleFade>
                </HStack>           
                </Flex>          
            </chakra.header>
        </>
    )
}

export default Header