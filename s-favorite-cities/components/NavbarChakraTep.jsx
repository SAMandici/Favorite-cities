import React from "react";
import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import Link from "next/link"; // Import Link from Next.js
import { forwardRef } from "@chakra-ui/react";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Search City", href: "/search" },
  { label: "Favorites", href: "/favorites" },
  { label: "City Info", href: "/citypage/[id]" }, // Dynamic route example
];

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box position="sticky" top={0} zIndex={10} width="100%">
      <Flex
        bg="white"
        color="gray.600"
        minH="60px"
        py={2}
        px={4}
        borderBottom={1}
        borderStyle="solid"
        borderColor="gray.200"
        align="center"
        position="relative" // Ensure it stays within the viewport
      >
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Text fontFamily="heading" color="gray.800">
            Logo
          </Text>
          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify="flex-end"
          direction="row"
          spacing={6}
        >
          <Button
            as="a"
            fontSize="sm"
            fontWeight={400}
            variant="link"
            href="#signin"
          >
            Sign In
          </Button>
          <Button
            as="a"
            display={{ base: "none", md: "inline-flex" }}
            fontSize="sm"
            fontWeight={600}
            color="white"
            bg="pink.400"
            href="#signup"
            _hover={{ bg: "pink.300" }}
          >
            Sign Up
          </Button>
          <IconButton
            display={{ base: "flex", md: "none" }}
            onClick={onToggle}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label="Toggle Navigation"
          />
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  return (
    <Stack direction="row" spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Link href={navItem.href} passHref>
            <Box
              as="a"
              p={2}
              fontSize="sm"
              fontWeight={500}
              color="gray.600"
              _hover={{ textDecoration: "none", color: "gray.800" }}
            >
              {navItem.label}
            </Box>
          </Link>
        </Box>
      ))}
    </Stack>
  );
};

const MobileNav = () => {
  return (
    <Stack bg="white" p={4} display={{ md: "none" }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, href }) => {
  return (
    <Stack spacing={4}>
      <Box
        py={2}
        as="a"
        href={href}
        justifyContent="space-between"
        alignItems="center"
      >
        <Text fontWeight={600} color="gray.600">
          {label}
        </Text>
      </Box>
    </Stack>
  );
};
