import { Box, Button, Center, Image, Text } from "@chakra-ui/react";
import { Footer } from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <Box
        id="home"
        height="100vh"
        display="flex"
        justifyContent="space-between"
        backgroundColor="backgroundColor"
        alignItems="center"
        bgGradient="linear(to-b, #FAE9FB, #FAFAFA)"
        padding={[0, 10, 0, 10]}
      >
        <Box
          padding="25px"
          height="100%"
          width="100%"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Box>
            <Text fontSize="48px">
              Perfect for your hair, lovely on your shelves
            </Text>
            <Text>
              Pamper your tresses with products that understand your hair’s
              needs and cravings
            </Text>
            <Box height="100px"></Box>
            <Center>
              <Button
                borderRadius="15px"
                minWidth="220px"
                height="60px"
                backgroundColor="primary"
                color="white"
                boxShadow="md"
                onClick={() => {
                  window.open("https://shopee.ph/the99sclub", "_blank");
                }}
              >
                Shop Now
              </Button>
            </Center>
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
            src="/images/landing.png"
            height="450px"
            width="450px"
            borderRadius="15px"
            alt="Business Logo"
          />
        </Box>
      </Box>

      <Footer />
    </>
  );
}
