import { Box, Button, Image, Link } from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";

export default function Navbar() {
  const router = useRouter();

  function scrollToView(id: string) {
    return document.getElementById(id)?.scrollIntoView();
  }

  return (
    <Box
      height="70px"
      position="fixed"
      width="100%"
      backdropFilter="blur(5px)"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      zIndex="10"
      padding="25px"
      borderBottom="#d1d1d1 1px solid"
    >
      <Image
        cursor="pointer"
        onClick={() => router.replace("/")}
        src="/logo.png"
        height="60px"
        width="60px"
        alt="Business Logo"
      />

      <Box
        display="flex"
        width="500px"
        justifyContent="space-around"
        alignItems="center"
      >
        <Link
          color="primary"
          cursor="pointer"
          onClick={() => router.replace("/products")}
        >
          Products
        </Link>
        <Link
          color="primary"
          cursor="pointer"
          onClick={() => router.push("feedback")}
        >
          Feedback
        </Link>
        <Link
          color="primary"
          cursor="pointer"
          onClick={() => router.push("about-us")}
        >
          About Us
        </Link>
        <Button
          backgroundColor="primary"
          width="110px"
          color="white"
          borderRadius="15px"
          fontWeight="normal"
          height="45px"
          onClick={() => {
            window.open("https://shopee.ph/the99sclub", "_blank");
          }}
        >
          Store
        </Button>
      </Box>
    </Box>
  );
}
