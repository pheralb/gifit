import React from "react";
import { Link } from "wouter";
import { Flex, Tabs, TabList, Tab, useColorModeValue } from "@chakra-ui/react";

export default function Category({ name, options = [] }) {
  const bg = useColorModeValue("gray.200", "#151515");
  const color = useColorModeValue("gray.900", "gray.600");

  return (
    <>
      <Flex
        alignItems="center"
        justifyContent="space-between"
        mx={0}
        overflowX="auto"
        bg={bg}
      >
        <Tabs borderBottom="white.900">
          <TabList>
            {options.map((singleOption, index) => (
              <Link to={`/search/${singleOption}`} index={index}>
                <Tab
                  color="white.900"
                  _focus={{ boxShadow: "none" }}
                  _hover={{ bg: { color } }}
                  fontSize="sm"
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
