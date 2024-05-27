import { Box, Container, Flex, Heading, Text, VStack, HStack, Link, Spacer, Divider } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Flex as="nav" bg="#fff1e5" color="black" p={4} align="center">
        <Heading size="md">Financial Times</Heading>
        <Spacer />
        <HStack spacing={8}>
          <Link href="#" color="white">Home</Link>
          <Link href="#" color="white">News</Link>
          <Link href="#" color="white">Markets</Link>
          <Link href="#" color="white">Opinion</Link>
          <Link href="#" color="white">Contact</Link>
        </HStack>
      </Flex>

      {/* Main Content */}
      <Flex direction={{ base: "column", md: "row" }} mt={8}>
        {/* Main Headline Section */}
        <Box flex="3" p={4}>
          <Heading as="h1" size="xl" mb={4}>Main Headline Story</Heading>
          <Text fontSize="lg">This is the main headline story. It captures the most important news of the day and provides a detailed overview of the event.</Text>
        </Box>

        {/* Sidebar */}
        <Box flex="1" bg="#f3f2f1" p={4} mt={{ base: 4, md: 0 }}>
          <Heading as="h2" size="md" mb={4}>Trending News</Heading>
          <VStack align="start" spacing={4}>
            <Text>Trending news item 1</Text>
            <Text>Trending news item 2</Text>
            <Text>Trending news item 3</Text>
            <Text>Trending news item 4</Text>
          </VStack>
        </Box>
      </Flex>

      {/* Footer */}
      <Box as="footer" bg="#fff1e5" color="black" mt={8} p={4}>
        <Flex direction={{ base: "column", md: "row" }} align="center">
          <Text>&copy; 2023 Financial Times</Text>
          <Spacer />
          <HStack spacing={4}>
            <Link href="#" color="white"><FaFacebook /></Link>
            <Link href="#" color="white"><FaTwitter /></Link>
            <Link href="#" color="white"><FaLinkedin /></Link>
          </HStack>
        </Flex>
      </Box>
    </Container>
  );
};

export default Index;