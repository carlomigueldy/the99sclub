// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'

import { Box, Button, Center, Image, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Box
        height="100px"
        position="fixed"
        width="100%"
        backgroundColor="#FAE9FB"
        // boxShadow="md"
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
          <Text color="#B256B8">Products</Text>
          <Text color="#B256B8">Feedback</Text>
          <Text color="#B256B8">About Us</Text>
          <Button
            backgroundColor="#B256B8"
            width="110px"
            color="white"
            borderRadius="15px"
            fontWeight="normal"
            height="45px"
          >
            Store
          </Button>
        </Box>
      </Box>

      <Box
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

      <Box height="100vh" backgroundColor="pink"></Box>
    </>
  );
}
