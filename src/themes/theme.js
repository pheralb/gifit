import { extendTheme } from '@chakra-ui/react'
import { mode } from "@chakra-ui/theme-tools"

const theme = extendTheme({
  useSystemColorMode: true,
  styles: {
    global: (props) => ({
      body: {
        color: mode("gray.900", "whiteAlpha.900")(props),
        bg: mode("white", "#151515")(props),
      },
    }),
  },
  //Fonts:
  fonts: {
    body: "Gifitfont",
    heading: "Gifitfont",
    mono: "Gifitfont",
  },
})

export default theme