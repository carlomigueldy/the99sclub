import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";
import Head from "next/head";
import "@fontsource/sora";

const theme = extendTheme({
  colors: {
    primary: "#B256B8",
    backgroundColor: "#F8F4F9",
  },
  fonts: {
    heading: "Montserrat",
    body: "Montserrat",
  },
});

const breakpoints = createBreakpoints({
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "80em",
  "2xl": "96em",
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ChakraProvider theme={theme}>
        <Head>
          <title>the99sclub</title>
        </Head>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}
export default MyApp;
