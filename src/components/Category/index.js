import React from "react";
import { Link } from "wouter";
import {
  Flex,
  Tabs,
  TabList,
  Tab,
} from "@chakra-ui/react";

export default function Category({ name, options = [] }) {
  return (
    <>
    <Flex
        alignItems="center"
        justifyContent="space-between"
        mx={0}
        overflowX="auto"
      >
        <Tabs defaultIndex={1}>
          <TabList>
          {options.map((singleOption, index) => (
            <Link to={`/search/${singleOption}`} index={index}>
              <Tab _focus={{ boxShadow: "none" }} _hover={{ bg:"blue.800" }}> 
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