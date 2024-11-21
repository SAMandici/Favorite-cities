import React from "react";
import { Container, Heading } from "@chakra-ui/react";

const Favorites = () => {
  return (
    <Container maxW="2xl">
      <Heading my="2rem" p="0.7rem" ml="2.2rem">
        Your favorite cities ❤:
      </Heading>
      {/* Display the list of favorite cities */}
    </Container>
  );
};

export default Favorites;
