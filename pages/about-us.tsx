import { Box, Button, Center, Image, Text } from "@chakra-ui/react";
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
              to heart. With quality hair potions and eye-candy designs, we want
              to make sure that our products earn their rightful place in your
              bathroom shelf.
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
            height={600}
            width={600}
            borderRadius="15px"
            alt="Featured Babe Product"
          />
        </Box>
      </Box>

      <Footer />
    </>
  );
}
