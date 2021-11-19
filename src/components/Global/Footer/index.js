import {
  Stack,
  Link,
  Box,
  Text,
  Container,
  ButtonGroup,
  Image,
  Divider,
  IconButton,
  Button,
  Tooltip,
  useColorModeValue
} from "@chakra-ui/react";
import Giphy from "components/Icons/giphy";
import Midu from "images/midu.ico";
import { GitFork, TwitterLogo } from "phosphor-react";

const Footer = () => {
  const color = useColorModeValue("blue.300", "gray.600");
  return (
    <>
      <Box
        as="footer"
        role="contentinfo"
        mx="auto"
        maxW="7x2"
        py="6"
        px={{ base: "8", md: "8" }}
      >
        <Container maxW="container.lg">
          <Stack
            direction="row"
            spacing="4"
            align="center"
            justify="space-between"
            pb={2}
          >
            <ButtonGroup variant="ghost">
              <Tooltip label="Repository" hasArrow>
                <IconButton
                  as="a"
                  href="https://github.com/pheralb/gifit"
                  aria-label="github"
                  icon={<GitFork fontSize="20px" />}
                />
              </Tooltip>
              <Tooltip label="Twitter" hasArrow>
                <IconButton
                  as="a"
                  href="https://twitter.com/pheralb_"
                  aria-label="Twitter"
                  icon={<TwitterLogo size="25" />}
                />
              </Tooltip>
              <Tooltip label="midudev 💙" hasArrow>
                <IconButton
                  as="a"
                  href="https://midu.dev/"
                  aria-label="midudev"
                  icon={<Image src={Midu} height="30px" />}
                />
              </Tooltip>
            </ButtonGroup>
          </Stack>
          <Stack direction="row" align="center" justify="space-between" pt={5} borderTop="1px" borderColor={color}>
            <Text fontSize="md">&copy; Created by Pablo.</Text>
            <Button
              as={Link}
              bg="transparent"
              rounded="md"
              aria-label="Using Giphy"
              rel="noopener"
              href="https://developers.giphy.com/branch/master/docs/"
              isExternal
              leftIcon={<Giphy />}
            >
              Giphy
            </Button>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default Footer;
