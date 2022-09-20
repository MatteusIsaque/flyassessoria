import { ChakraProvider, theme } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import Footer from '../components/global/Footer'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  )
}

export default MyApp
