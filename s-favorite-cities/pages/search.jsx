import { Container, Heading, Text, Input } from "@chakra-ui/react";
import { useState } from "react";

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <Container maxW="2xl">
      <Heading my="2rem" p=".7rem" ml="2.2rem">
        Search for new cities. 🔍
      </Heading>

      <Text ml="2rem">Here you can find cities all around the world.</Text>

      <Input
        placeholder="Explore cities"
        m="1.5rem"
        size="lg"
        variant="flushed"
      />
    </Container>
  );
};

export default SearchPage;
