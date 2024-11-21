import Link from "next/link";
import { Box, Flex, List, ListItem, Text } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Box
      position="sticky"
      top="0"
      bg="gray.800"
      color="white"
      py={2}
      zIndex="1000"
    >
      {/* <Flex justify="center"> */}
      <List.Root
        justifyContent="center"
        display="flex"
        flexDirection="row"
        gap={5}
        m={0}
        p={0}
      >
        <ListItem listStyleType="none">
          <Link href="/" passHref>
            <Text
              as="a"
              p="10px 15px"
              borderRadius="md"
              _hover={{
                bg: "gray.600",
                transition: "background-color 0.3s ease",
              }}
            >
              Home
            </Text>
          </Link>
        </ListItem>
        <ListItem listStyleType="none">
          <Link href="/search" passHref>
            <Text
              as="a"
              p="10px 15px"
              borderRadius="md"
              _hover={{
                bg: "gray.600",
                transition: "background-color 0.3s ease",
              }}
            >
              Search
            </Text>
          </Link>
        </ListItem>
        <ListItem listStyleType="none">
          <Link href="/citypage" passHref>
            <Text
              as="a"
              p="10px 15px"
              borderRadius="md"
              _hover={{
                bg: "gray.600",
                transition: "background-color 0.3s ease",
              }}
            >
              City Info
            </Text>
          </Link>
        </ListItem>
        <ListItem listStyleType="none">
          <Link href="/favorites" passHref>
            <Text
              as="a"
              p="10px 15px"
              borderRadius="md"
              _hover={{
                bg: "gray.600",
                transition: "background-color 0.3s ease",
              }}
            >
              Favorite Cities
            </Text>
          </Link>
        </ListItem>
      </List.Root>
      {/* </Flex> */}
    </Box>
  );
};

export default Navbar;
