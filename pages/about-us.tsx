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
        alignItems="center"
        padding={[0, 10, 0, 10]}
      ></Box>

      <Footer />
    </>
  );
}
