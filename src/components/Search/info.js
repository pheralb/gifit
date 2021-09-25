import React from "react";
import { useColorModeValue, Collapse, Box, Button, UnorderedList, ListItem, useDisclosure, Text } from "@chakra-ui/react";

const Info = () => {
  const { isOpen, onToggle } = useDisclosure();
  const color = useColorModeValue("black", "white");

  return (
    <>
      <Button onClick={onToggle} w="100%" bg="transparent" mb="2">What is this filter?</Button>
      <Collapse in={isOpen} animateOpacity>
        <Box
          p="20px"
          color={color}
          mt="4"
          bg="transparent"
          border="1px"
          borderColor="gray.400"
          rounded="md"
          shadow="md"
        >
          <Text>The search filter is based on collecting gifs according to age. Normally we usually adjust the results for all audiences, but you can change that option according to the following parameters:</Text>
          <UnorderedList>
            <ListItem p="3">
              G (default) - Level 1 - Contains images that are broadly accepted as
              appropriate and commonly witnessed by people in a public
              environment.
            </ListItem>
            <ListItem p="3">
              PG - Level 2 - Contains images that are commonly witnessed in a
              public environment, but not as broadly accepted as appropriate.
            </ListItem>
            <ListItem p="3">
              PG13 - Level 3 - Contains images that are typically not seen
              unless sought out, but still commonly witnessed.
            </ListItem>
            <ListItem p="3">
              R - Level 4 (+18) - Contains images that are typically not seen
              unless sought out and could be considered alarming if witnessed.
            </ListItem>
          </UnorderedList>
        </Box>
      </Collapse>
    </>
  );
};

export default Info;
