import {
  Stack,
  Button,
  Text,
  useColorModeValue,
  Flex,
  Link,
} from "@chakra-ui/react";
import Giphy from "images/giphy";

const Footer = () => {
  return (
    <Stack
      as="footer"
      isInline
      spacing={[1, 2]}
      mt="5"
      p={4}
      justifyContent="space-between"
      alignItems="center"
      w={["100%", "85%", "80%"]}
      maxW={800}
      mx="auto"
      borderTop="1px"
      borderColor="gray.700"
    >
      <Flex
        flexDirection={["column", "column", "row"]}
        flexFlow={["column-reverse", "column-reverse"]}
        justifyContent={["center", "center"]}
        alignItems="center"
        w="100%"
      >
        <Text
          textAlign="center"
          fontSize="lg"
          color={useColorModeValue("gray.500", "gray.200")}
        >
          Created by{" "}
          <Link href="https://github.com/pheralb" isExternal>
            Pablo
          </Link>{" "}
          using{" "}
          <Link href="https://giphy.com/" isExternal>
            <Button colorScheme="teal" leftIcon={<Giphy />} variant="ghost">
              GIPHY
            </Button>
          </Link>
        </Text>
      </Flex>
    </Stack>
  );
};

export default Footer;
