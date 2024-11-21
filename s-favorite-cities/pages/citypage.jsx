import { useRouter } from "next/router";
import { Container, Heading, Text } from "@chakra-ui/react";

const CityInfo = () => {
  const router = useRouter();
  const { id } = router.query; // Get the dynamic 'id' parameter from the URL

  return (
    <Container maxW="2xl">
      <Heading my="2rem" p="0.7rem" ml="2.2rem">
        City Info for ID 📃 {id}
      </Heading>
      {/* Fetch and display city details based on the `id` */}

      <Text ml="2rem">Displaying information about the city {id}.</Text>
    </Container>
  );
};

export default CityInfo;
