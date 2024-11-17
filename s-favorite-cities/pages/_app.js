import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import Navbar from "../components/Navbar"; // Adjust the path if needed

export default function App({ Component, pageProps: { ...pageProps } }) {
  return (
    <ChakraProvider value={defaultSystem}>
      {/* Render the Navbar on every page */}
      <Navbar />

      <Component {...pageProps} />
    </ChakraProvider>
  );
}
