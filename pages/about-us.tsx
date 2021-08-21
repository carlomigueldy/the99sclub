import { Box, Button, Center, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { Footer } from "../components/Footer";
import Navbar from "../components/Navbar";

export default function AboutUs() {
  return (
    <>
      <Navbar />

      <Box
        id="about-us"
        minHeight="100vh"
        backgroundColor="#FAE9FB"
        padding={[0, 10, 0, 10]}
        display="flex"
        justifyContent="space-around"
        alignItems="center"
      >
        <SimpleGrid
          spacing={10}
          marginTop={{
            base: 20,
            sm: 10,
            md: 0,
            lg: 0,
            xl: 0,
          }}
          columns={{
            base: 1,
            sm: 1,
            md: 2,
            lg: 2,
            xl: 2,
            "2xl": 2,
          }}
        >
          <Box padding="25px" height="100%" width="100%">
            <Box>
              <Text fontSize="32px" fontWeight="bold">
                Hey babe! Welcome to the The99sclub!
              </Text>
              <Box height={10} />
              <Text fontSize="20px">
                The99sclub is a Iligan-based that is deeply rooted in beauty and
                personal care. From our shampoo and conditioner sets down to our
                hair shine sprays, we keep your hair goals in mind and take them
                to heart. With quality hair potions and eye-candy designs, we
                want to make sure that our products earn their rightful place in
                your bathroom shelf.
              </Text>
            </Box>
          </Box>
          <Box
            height="100%"
            width="100%"
            display="flex"
            justifyContent="center"
            alignItems="center"
            // backgroundColor="blue"
          >
            <Image
              src="/images/about-us.png"
              height="100%"
              width={600}
              borderRadius="15px"
              alt="Featured Babe Product"
            />
          </Box>
        </SimpleGrid>
      </Box>

      <Footer />
    </>
  );
}
