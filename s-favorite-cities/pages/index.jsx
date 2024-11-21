import React from "react";
import { Container, Heading, Text } from "@chakra-ui/react";

const Homepage = () => {
  return (
    <Container maxW="2xl">
      <Heading my="2rem" p="0.7rem" ml="2.2rem">
        Welcome to the Favorite Cities App! 🌆
      </Heading>
      <Text marginLeft="2rem">
        A nice app developed for you, to make a plan for each destination you
        have or to search for a new city.
      </Text>
    </Container>
  );
};

export default Homepage;
