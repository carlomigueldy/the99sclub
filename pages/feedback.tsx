import {
  Box,
  Button,
  Center,
  Grid,
  GridItem,
  Image,
  Text,
} from "@chakra-ui/react";
import { Footer } from "../components/Footer";
import Navbar from "../components/Navbar";

type Feedback = {
  username: string;
  content: string;
  photo: string;
};

const FEEDBACKS: Array<Feedback> = [
  {
    username: "@kesiyaaa",
    content:
      "Frizzy hair no more! Tame those tresses with a few spritz of our daily hair shine spray guaranteed to resist humidity, add shine to your hair and hold for a silky, lustrous feel you can’t get your hands off!",
    photo: "/logo.png",
  },
  {
    username: "@triishalex",
    content:
      "Frizzy hair no more! Tame those tresses with a few spritz of our daily hair shine spray guaranteed to resist humidity, add shine to your hair and hold for a silky, lustrous feel you can’t get your hands off!",
    photo: "/logo.png",
  },
  {
    username: "@aditanne",
    content:
      "Frizzy hair no more! Tame those tresses with a few spritz of our daily hair shine spray guaranteed to resist humidity, add shine to your hair and hold for a silky, lustrous feel you can’t get your hands off!",
    photo: "/logo.png",
  },
  {
    username: "@gelponce",
    content:
      "Frizzy hair no more! Tame those tresses with a few spritz of our daily hair shine spray guaranteed to resist humidity, add shine to your hair and hold for a silky, lustrous feel you can’t get your hands off!",
    photo: "/logo.png",
  },
];

export default function Feedback() {
  return (
    <>
      <Navbar />

      <Box
        id="feedback"
        minHeight="100vh"
        backgroundColor="#FAE9FB"
        alignItems="center"
        padding={[0, 10, 0, 10]}
      >
        <Box height="50px" />
        <Text align="center" fontWeight="bold" fontSize="32px">
          babe feedback
        </Text>
        <Grid
          marginTop={50}
          marginBottom={50}
          templateColumns="repeat(2, 1fr)"
          gap={6}
        >
          {FEEDBACKS.map((feedback) => {
            return (
              <Center>
                <GridItem
                  minHeight={200}
                  width={500}
                  borderRadius="10px"
                  boxShadow="md"
                  backgroundColor="white"
                  padding={10}
                >
                  <Box display="flex" justifyContent="start" alignItems="end">
                    <Image
                      src={feedback.photo}
                      height={75}
                      width={75}
                      borderRadius={10}
                      backgroundColor="red"
                    />
                    <Box width={5} />
                    <Text fontSize={18}>{feedback.username}</Text>
                  </Box>
                  <Box height={5} />
                  <Text>{feedback.content}</Text>
                </GridItem>
              </Center>
            );
          })}
        </Grid>
      </Box>

      <Footer />
    </>
  );
}
