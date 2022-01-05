import { extendTheme } from '@chakra-ui/react'
import { mode } from "@chakra-ui/theme-tools"

const theme = extendTheme({
  initialColorMode: "dark",
  useSystemColorMode: true,
  styles: {
    global: (props) => ({
      body: {
        color: mode("gray.900", "whiteAlpha.900")(props),
        bg: mode("white", "#151515")(props),
        fontWeight: "light",
      },
    }),
  },
  //Fonts:
  fonts: {
    body: "Poppins-Regular",
    heading: "Poppins-Regular",
    mono: "Poppins-Regular",
  },
})

export default theme