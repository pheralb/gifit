import React from "react";
import { Link } from "wouter";
import { Flex, Tabs, TabList, Tab, useColorModeValue } from "@chakra-ui/react";

export default function Category({ options = [] }) {
  const bg = useColorModeValue("white", "#151515");
  const color = useColorModeValue("blue.100", "gray.600");

  return (
    <>
      <Flex
        alignItems="center"
        justifyContent="space-between"
        maxW="100%"
        overflowX="auto"
        bg={bg}
      >
        <Tabs borderBottom="white.900">
          <TabList>
            {options.map((singleOption, index) => (
              <Link to={`/search/${singleOption}`} index={index}>
                <Tab
                  key={singleOption}
                  color="white.900"
                  _selected={{ bg: 'transparent' }}
                  _focus={{ boxShadow: "none" }}
                  _hover={{ bg: color }}
                  fontSize="md"
                  h="60px"
                  isTruncated
                >
                  #{singleOption}
                </Tab>
              </Link>
            ))}
          </TabList>
        </Tabs>
      </Flex>
    </>
  );
}
