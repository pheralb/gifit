import { extendTheme } from '@chakra-ui/react'

 const config = {
   initialColorMode: "dark",
   useSystemColorMode: false,
 }

const theme = extendTheme({
  fonts: {
    body: "roboto",
    heading: "roboto",
    mono: "roboto",
  },
  styles: {
    global: {
      // styles for the `body`:
      body: {
        bg: "#0a0b0d",
        color: "white",
      },
      // styles for the `a`:
      a: {
        color: "white",
        _hover: {
          textDecoration: "underline",
        },
      },
      // styles for the `header`:
      header: {
        bgGradient: "linear(to-l, #060606, #000728)",
        // bg:"#0a0b0d",
        color: "white",
        borderBottom: "1px",
        borderColor: "gray.700",
        fontFamily: "roboto",
        fontWeight: "roboto"
      },
      // styles for the `button`:
      button: {
        _hover:{
          bg:"#0a0b0d",
          // border: "1px",
          // borderColor: "gray.600"
        }
      },
      heading: {
        bg:"#0a0b0d",
        color: "white",
        borderBottom: "1px",
        borderColor: "gray.700",
        fontFamily: "Share Tech Mono",
        fontWeight: "normal"
      },
      Menu: {
        bg:"#0a0b0d",
        color: "white",
      },
      MenuList: {
        bg:"#0a0b0d",
        color: "white",
      }
    },
  },
})

export default theme