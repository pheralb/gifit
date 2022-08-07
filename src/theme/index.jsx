import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const theme = extendTheme({
  initialColorMode: "light",
  useSystemColorMode: false,
  colors: {
    dark: {
      50: "#fafafa",
      100: "#f5f5f5",
      200: "#e6e6e6",
      300: "#d6d6d6",
      400: "#a5a5a5",
      500: "#767676",
      600: "#575757",
      700: "#434343",
      800: "#292929",
      900: "#000000",
    },
    lightDark: {
      900: "#16161a",
    },
    light: {
      100: "#f9f9f9",
    },
  },
  fonts: {
    body: "Inter-Medium",
    heading: "Inter-Medium",
  },
  styles: {
    global: (props) => ({
      body: {
        color: mode("gray.900", "whiteAlpha.900")(props),
        bgGradient: mode(
          "radial-gradient(circle at 1px 1px, #E7E7E7 1px, light.100 0)",
          "radial-gradient(circle at 1px 1px, #212121 1px, lightDark.900 0)"
        )(props),
        backgroundSize: "40px 40px",
        fontSize: "14px",
      },
    }),
  },
});

export default theme;
