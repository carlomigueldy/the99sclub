// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'

import { Box, Button, Center, Image, Text } from "@chakra-ui/react";
import { MutableRefObject, useRef } from "react";

export default function Home() {
  const homeRef = useRef(null);
  const pinkRef = useRef(null);
  const redRef = useRef(null);

  const executeScroll = (ref: MutableRefObject<any>) =>
    ref.current?.scrollIntoView();

  return (
    <>
      <Box
        height="80px"
        position="fixed"
        width="100%"
        // backgroundColor="white"
        // blur="100px"
        backdropFilter="blur(5px)"
        // backgroundColor="#FAE9FB"
        // boxShadow="sm"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        zIndex="10"
        // padding={[0, 5, 0, 5]}
        padding="25px"
        // bgGradient="linear(to-b, #FAE9FB, #FAFAFA)"
      >
        <Image src="/logo.png" height="60px" width="60px" alt="Business Logo" />

        <Box
          display="flex"
          width="500px"
          justifyContent="space-around"
          alignItems="center"
        >
          <Text
            color="#B256B8"
            cursor="pointer"
            onClick={() => executeScroll(homeRef)}
          >
            Home
          </Text>
          <Text
            color="#B256B8"
            cursor="pointer"
            onClick={() => executeScroll(pinkRef)}
          >
            Feedback
          </Text>
          <Text
            color="#B256B8"
            cursor="pointer"
            onClick={() => executeScroll(redRef)}
          >
            About Us
          </Text>
          <Button
            backgroundColor="#B256B8"
            width="110px"
            color="white"
            borderRadius="15px"
            fontWeight="normal"
            height="45px"
            onClick={() => executeScroll(redRef)}
          >
            Store
          </Button>
        </Box>
      </Box>

      <Box
        id="home"
        ref={homeRef}
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
                backgroundColor="#B256B8"
                color="white"
                boxShadow="md"
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
            src="/images/image_1.png"
            height="450px"
            width="450px"
            borderRadius="15px"
            alt="Business Logo"
          />
        </Box>
      </Box>

      <Box ref={pinkRef} id="pink" height="100vh" backgroundColor="#FAE9FB">
        Feedback
      </Box>

      <Box ref={redRef} id="red" height="100vh" backgroundColor="#FAE9FB">
        About Us
      </Box>
    </>
  );
}
