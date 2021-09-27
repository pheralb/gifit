/* Import libraries: */
import React from "react";
import { Link } from "wouter";
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
  Text,
  Image 
} from "@chakra-ui/react";
import { List, GithubLogo, House } from "phosphor-react";
import Search from "components/Search";
import Dark from "components/Global/Dark";
import { motion } from "framer-motion";
/*-----------------------------------------------*/
/* Links: */
const HEADER_LINKS = [
  {
    href: "/",
    literal: "Home",
    icon: <House size="25" />,
  },
];
/*-----------------------------------------------*/
/* Link Components: */
const NavLink = ({ href, literal, icon }) => {
  return (
    <Link
      href={href}
      _hover={{
        textDecoration: "none",
      }}
    >
      <Button variant="ghost" leftIcon={icon}>
        {literal}
      </Button>
    </Link>
  );
};
/*-----------------------------------------------*/
const Header = () => {
  const bg = useColorModeValue("gray.200", "#151515");
  const color = useColorModeValue("dark", "gray.400");
  const mobileNav = useDisclosure();

  return (
    <>
      <chakra.header
        w="full"
        px={{ base: 2, sm: 4 }}
        py={3}
        pos="sticky"
        top="0"
        zIndex="1000"
        bg={bg}
      >
        <Flex alignItems="center" justifyContent="space-between" mx="auto">
          <Flex>
            <motion.button
              whileHover={{
                scale: 1.2
              }}
            >
              <Link href="/">
                <chakra.a title="Gifii" display="flex" alignItems="center">
                  <Text fontSize="3xl">Gifit</Text>
                  <VisuallyHidden>GIFIT</VisuallyHidden>
                </chakra.a>
              </Link>
            </motion.button>
          </Flex>
          <HStack display="flex" alignItems="center" spacing={1}>
            <HStack
              spacing={1}
              mr={1}
              color="brand.500"
              display={{ base: "none", md: "inline-flex" }}
            >
              <Box mr="3">
                <Search />
              </Box>
              {HEADER_LINKS.map((link) => (
                <NavLink key={link.href} {...link} />
              ))}
              <Dark />
            </HStack>
            <ScaleFade initialScale={0.9} in={mobileNav.onOpen}>
              <Box display={{ base: "inline-flex", md: "none" }}>
                <IconButton
                  display={{ base: "flex", md: "none" }}
                  aria-label="Open menu"
                  fontSize="30px"
                  color={color}
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
                  bg={bg}
                  spacing={3}
                  rounded="sm"
                  shadow="sm"
                >
                  <CloseButton
                    aria-label="Close menu"
                    onClick={mobileNav.onClose}
                  />
                  <Search />
                  {HEADER_LINKS.map((link) => (
                    <NavLink key={link.href} {...link} />
                  ))}
                  <Dark />
                </VStack>
              </Box>
            </ScaleFade>
          </HStack>
        </Flex>
      </chakra.header>
    </>
  );
};

export default Header;

