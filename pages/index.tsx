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
            sm: 10,
            md: 0,
            lg: 0,
            xl: 0,
          }}
          marginBottom={{
            sm: 10,
            md: 0,
            lg: 0,
            xl: 0,
          }}
          paddingStart={{
            xl: 100,
            md: 50,
            lg: 50,
          }}
          paddingEnd={{
            xl: 100,
            md: 50,
            lg: 50,
          }}
          columns={{
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
              <Text fontSize={{ sm: 32, xl: 48, md: 40 }}>
                Perfect for your hair, lovely on your shelves
              </Text>
              <Text>
                Pamper your tresses with products that understand your hair’s
                needs and cravings
              </Text>
              <Box
                height={{
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
            backgroundColor="blue"
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
