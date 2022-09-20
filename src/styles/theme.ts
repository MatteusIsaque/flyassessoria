import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    red: {
      800: "rgba(241, 20, 20, 1)",
      700: "rgba(233, 28, 28, 1)",
      600: "rgba(226, 39, 39, 1)",
      500: "rgba(216, 48, 48, 1)",
      400: "rgba(216, 69, 69, 1)",
      300: "rgba(217, 80, 80, 1)"
    },
    blue: {
      800: "rgba(3, 46, 66, 1)",
      700: "rgba(4, 59, 85, 1)",
      600: "rgba(5, 73, 104, 1)",
      500: "rgba(7, 91, 130, 1)",
      400: "rgba(25, 155, 216, 1)"
    }
  },
  fonts: {
    heading: 'poppins, sans-serif',
    body: 'poppins, sans-serif'
  },
  styles: {
    global: {
      body: {
        bg: 'white',
        color: 'pink'
      }
    }
  }
})