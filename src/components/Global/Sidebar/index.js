import React, { useState, useEffect } from "react";
import {
  Image,
  Button,
  Box,
  Drawer,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerOverlay,
  DrawerBody,
  Flex,
  Icon,
  IconButton,
  Text,
  useColorModeValue,
  useDisclosure,
  Spacer,
} from "@chakra-ui/react";
import getTrendingTerms from "services/getTrendingTermsService";
import { Link } from "wouter";
import { List } from "phosphor-react";
import Search from "components/Search";
import Dark from "components/Global/Dark";
import Giphy from "components/Icons/giphy";
import Github from "components/Icons/github";
import Hover from "animations/hover";
import Midu from "images/midu.ico";

export default function Sidebar({ children }) {
  const [trends, setTrends] = useState([]);
  const border = useColorModeValue("gray.200", "gray.700");
  const bg = useColorModeValue("white", "#151515");
  const color = useColorModeValue("black", "gray.300");
  const sidebar = useDisclosure();

  useEffect(() => {
    const controller = new AbortController();
    getTrendingTerms({ signal: controller.signal })
      .then(setTrends)
      .catch((err) => {});
    return () => controller.abort();
  }, []);

  const NavItem = (props) => {
    const { icon, children, ...rest } = props;
    return (
      <Hover>
        <Flex
          align="center"
          px="4"
          mx="2"
          rounded="md"
          py="3"
          cursor="pointer"
          _hover={{
            bg: "blackAlpha.300",
          }}
          role="group"
          fontSize="15px"
          transition=".15s ease"
          isTruncated
          {...rest}
        >
          <Text isTruncated>{children}</Text>
        </Flex>
      </Hover>
    );
  };

  const TrendingLinks = () => {
    return (
      <>
        {trends.map((singleOption, index) => (
          <Link key={index} to={`/search/${singleOption}`}>
            <NavItem key={singleOption}>#{singleOption}</NavItem>
          </Link>
        ))}
      </>
    );
  };

  const SidebarContent = (props) => (
    <Box
      as="nav"
      pos="fixed"
      left="0"
      zIndex="sticky"
      h="full"
      pb="10"
      overflowX="hidden"
      overflowY="auto"
      borderRightWidth="1px"
      w="60"
      {...props}
    >
      <Flex
        px="4"
        py="1"
        mt={{ base: "0", md: "4" }}
        mb="2"
        align="center"
      >
        <Icon
          bg="transparent"
          aria-label="Giphy"
          as={Giphy}
          w={6}
          h={6}
          mr="2"
        />
        <Hover>
          <Link to="/">
            <Text
              bgGradient="linear(to-l, #7928CA, #FF0080)"
              bgClip="text"
              fontSize="3xl"
              ml="1"
              cursor="pointer"
            >
              gifit
            </Text>
          </Link>
        </Hover>
      </Flex>
      <Flex
        direction="column"
        as="nav"
        fontSize="sm"
        aria-label="Main Navigation"
      >
        <Box px="2" py="3">
          <Search />
        </Box>
        <TrendingLinks />
      </Flex>
    </Box>
  );
  return (
    <Box as="section" minH="100vh">
      <SidebarContent top="0" display={{ base: "none", md: "unset" }} />
      <Drawer
        isOpen={sidebar.isOpen}
        onClose={sidebar.onClose}
        placement="left"
      >
        <DrawerOverlay />
        <DrawerContent bg={bg}>
          <DrawerCloseButton size="30" mr="3" mt="3" color="white" />
          <DrawerBody overflow="hidden">
            <SidebarContent top="10" w="full" borderRight="none" />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      <Box ml={{ base: 0, md: 60 }} transition=".3s ease">
        <Flex
          as="header"
          pos="sticky"
          top="0"
          zIndex="1200"
          bg={bg}
          align="center"
          justify="space-between"
          w="full"
          px={{ base: 4, md: 6 }}
          h="16"
          borderBottomWidth="1px"
        >
          <Button
            p="2"
            variant="ghost"
            bg="transparent"
            aria-label="Menu"
            display={{ base: "inline-flex", md: "none" }}
            onClick={sidebar.onOpen}
            leftIcon={<List size="26" />}
            fontWeight="light"
            fontSize="20px"
          >
            gifit
          </Button>
          <Spacer />
          <Flex align="center">
            <Dark />
            <IconButton
              ml="2"
              variant="outline"
              border="0"
              bg="transparent"
              as="a"
              href="https://midu.dev/"
              aria-label="midudev"
              icon={<Image src={Midu} height="30px" />}
            />
            <IconButton
              ml="2"
              variant="outline"
              border="0"
              bg="transparent"
              as="a"
              href="https://github.com/pheralb/gifit/"
              aria-label="github"
              icon={<Github width="25" />}
            />
          </Flex>
        </Flex>
        <Box as="main" pl="5" px="5" pt="4">
          {children}
        </Box>
      </Box>
    </Box>
  );
}
