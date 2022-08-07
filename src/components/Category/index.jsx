import React from "react";
import { Link } from "react-router-dom";
import {
  Tabs,
  TabList,
  Tab,
  useColorModeValue,
  HStack,
} from "@chakra-ui/react";

import Click from "@/animations/click";

export default function Category({ options = [] }) {
  const border = useColorModeValue("dark.300", "dark.700");
  const color = useColorModeValue("dark.200", "dark.800");
  return (
    <>
      <HStack w="100%" overflowX="auto">
        <Tabs>
          <TabList>
            {options.map((singleOption, index) => (
              <Link to={`/search/${singleOption}`}>
                <Tab
                  key={singleOption}
                  _selected={{ bg: "transparent" }}
                  _focus={{ boxShadow: "none" }}
                  _hover={{ bg: color }}
                  fontSize="md"
                  mb="3"
                  borderWidth="1px"
                  borderColor={border}
                  borderRadius="15px"
                  mr="2"
                  isTruncated
                >
                  <Click>#{singleOption}</Click>
                </Tab>
              </Link>
            ))}
          </TabList>
        </Tabs>
      </HStack>
    </>
  );
}
