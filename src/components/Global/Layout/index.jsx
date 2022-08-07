import React from "react";
import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  HStack,
  useDisclosure,
  VStack,
  IconButton,
  CloseButton,
  Icon,
  Image,
  Text,
  Center,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

import { AiOutlineMenu } from "react-icons/ai";
import { SiGithub } from "react-icons/si";

import Dark from "@/components/Global/Dark";
import { GiphyIcon, Search, Trending } from "@/components";
import Hover from "@/animations/hover";

import Midu from "@/images/midu.ico";

const Index = ({ children }) => {
  const bg = useColorModeValue("light.100", "lightDark.900");
  const mobileNav = useDisclosure();
  return (
    <Box w="full" px={{ base: 6, sm: 8 }}>
      <Box position="sticky" top="0" bg={bg} zIndex="1000" py="5">
        <Flex alignItems="center" justifyContent="space-between" mx="auto">
          <Link to={`/`}>
            <Hover>
              <HStack cursor="pointer">
                <Icon as={GiphyIcon} boxSize="20px" />
                <chakra.h1 fontSize="2xl" fontWeight="medium" ml="2">
                  Gifit
                </chakra.h1>
              </HStack>
            </Hover>
          </Link>
          <HStack display="flex" alignItems="center" spacing={1}>
            <HStack
              spacing={4}
              mr={1}
              display={{ base: "none", md: "inline-flex" }}
            >
              <Search />
              <IconButton
                as="a"
                ml="2"
                variant="outline"
                border="0"
                bg="transparent"
                href="https://github.com/pheralb/gifit"
                aria-label="github"
                icon={<SiGithub size="25" />}
              />
              <IconButton
                as="a"
                ml="2"
                variant="outline"
                border="0"
                bg="transparent"
                href="https://midu.dev/"
                aria-label="midudev"
                icon={<Image src={Midu} height="30px" />}
              />
              <Dark />
            </HStack>
            <Box display={{ base: "inline-flex", md: "none" }}>
              <IconButton
                display={{ base: "flex", md: "none" }}
                aria-label="Open menu"
                fontSize="20px"
                variant="ghost"
                icon={<AiOutlineMenu />}
                onClick={mobileNav.onOpen}
              />
              <VStack
                pos="absolute"
                top={1}
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
                borderWidth="1px"
                borderRadius="md"
              >
                <CloseButton
                  aria-label="Close menu"
                  onClick={mobileNav.onClose}
                />
                <Search />
                <HStack>
                  <IconButton
                    as="a"
                    ml="2"
                    variant="outline"
                    border="0"
                    bg="transparent"
                    href="https://github.com/pheralb/gifit"
                    aria-label="github"
                    icon={<SiGithub size="25" />}
                  />
                  <IconButton
                    as="a"
                    ml="2"
                    variant="outline"
                    border="0"
                    bg="transparent"
                    href="https://midu.dev/"
                    aria-label="midudev"
                    icon={<Image src={Midu} height="30px" />}
                  />
                  <Dark />
                </HStack>
              </VStack>
            </Box>
          </HStack>
        </Flex>
      </Box>
      <Trending />
      <Box>{children}</Box>
      <Center pt="5" pb="5">
        <HStack>
          <Text>Built by Pablo Hdez</Text>
        </HStack>
      </Center>
    </Box>
  );
};

export default Index;
