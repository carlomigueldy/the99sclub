import {
  Box,
  Button,
  Center,
  Container,
  Image,
  SimpleGrid,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { Footer } from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <Box
        id="home"
        minHeight="100vh"
        backgroundColor="backgroundColor"
        bgGradient="linear(to-b, #FAE9FB, #FAFAFA)"
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
          marginBottom={{
            base: 20,
            sm: 10,
            md: 0,
            lg: 0,
            xl: 0,
          }}
          paddingStart={{
            base: 10,
            sm: 10,
            xl: 100,
            md: 50,
            lg: 50,
          }}
          paddingEnd={{
            base: 10,
            sm: 10,
            xl: 100,
            md: 50,
            lg: 50,
          }}
          columns={{
            base: 1,
            sm: 1,
            md: 2,
            lg: 2,
            xl: 2,
          }}
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
              <Text
                fontWeight="bold"
                fontSize={{ base: 32, sm: 32, xl: 48, md: 40, lg: 40 }}
              >
                Perfect for your hair, lovely on your shelves
              </Text>
              <Text>
                Pamper your tresses with products that understand your hair’s
                needs and cravings
              </Text>
              <Box
                height={{
                  base: 50,
                  sm: 50,
                  md: 100,
                  lg: 100,
                  xl: 100,
                }}
              />
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
          >
            <Image
              src="/images/landing.png"
              height="100%"
              width="800px"
              borderRadius={15}
              alt="Featured Babe Product"
            />
          </Box>
        </SimpleGrid>
      </Box>

      <Footer />
    </>
  );
}
