import React, { useState, useEffect } from "react";
import {
  Button,
  Box,
  Divider,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Icon,
  IconButton,
  Input,
  InputGroup,
  Center,
  Text,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import getTrendingTerms from "services/getTrendingTermsService";
import { Link } from "wouter";
import { TrendingSearches } from "components";
import { motion } from "framer-motion";

export default function Sidebar({ children }) {
  const [trends, setTrends] = useState([]);
  const border = useColorModeValue("gray.200", "gray.700");
  const color = useColorModeValue("black", "gray.300");
  const sidebar = useDisclosure();
  useEffect(function () {
    const controller = new AbortController();
    getTrendingTerms({ signal: controller.signal })
      .then(setTrends)
      .catch((err) => {});

    return () => controller.abort();
  }, []);

  const NavItem = (props) => {
    const { icon, children, ...rest } = props;
    return (
      <Flex
        align="center"
        px="4"
        pl="4"
        py="3"
        cursor="pointer"
        role="group"
        fontWeight="light"
        fontSize="16px"
        transition=".15s ease"
        color={color}
        {...rest}
      >
        {icon && <Icon mx="2" boxSize="4" as={icon} />}
        {children}
      </Flex>
    );
  };

  const SidebarContent = ({ options = [] }) => (
    <Box
      as="nav"
      pos="fixed"
      top="0"
      left="0"
      zIndex="sticky"
      h="full"
      pb="10"
      overflowX="hidden"
      overflowY="auto"
      w="60"
      borderRight="1px"
      borderColor={border}
      fontWeight="light"
      display={{ base: "none", md: "unset" }}
    >
      <Flex px="4" py="5" align="center">
        <Text fontSize="2xl" ml="2" fontWeight="semibold">
          gifit
        </Text>
      </Flex>
      <Flex
        direction="column"
        as="nav"
        fontSize="sm"
        color="gray.600"
        aria-label="Main Navigation"
      >
        {options.map((singleOption, index) => (
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 1 }}
            key={index}
          >
            <Link to={`/search/${singleOption}`}>
              <NavItem key={singleOption}>#{singleOption}</NavItem>
            </Link>
          </motion.button>
        ))}
      </Flex>
    </Box>
  );
  return (
    <Box as="section" minH="100vh">
      <SidebarContent options={trends} />
      <Drawer
        isOpen={sidebar.isOpen}
        onClose={sidebar.onClose}
        placement="left"
      >
        <DrawerOverlay />
        <DrawerContent>
          <SidebarContent options={trends} />
        </DrawerContent>
      </Drawer>
      <Box ml={{ base: 0, md: 60 }} transition=".3s ease">
        <Box as="main" p="4">
          {children}
        </Box>
      </Box>
    </Box>
  );
}
