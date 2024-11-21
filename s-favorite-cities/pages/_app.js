import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
// import Navbar from "../components/Navbar";
// import "../styles/globals.css";
// import Navbar from "../components/NavbarChakraTep";
import Navbar from "../components/Navbarchakraui";

export default function App({ Component, pageProps: { ...pageProps } }) {
  return (
    <ChakraProvider value={defaultSystem}>
      {/* Render the Navbar on every page */}
      <Navbar />

      <Component {...pageProps} />
    </ChakraProvider>
  );
}
