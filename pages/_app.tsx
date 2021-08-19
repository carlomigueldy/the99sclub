import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "@fontsource/sora";

const theme = extendTheme({
  colors: {
    primary: "#B256B8",
    backgroundColor: "#F8F4F9",
  },
  fonts: {
    heading: "Sora",
    body: "Sora",
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
export default MyApp;
