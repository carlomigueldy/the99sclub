import { Avatar, Box, Input, Link, Text } from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";

export function Footer() {
  const router = useRouter();

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="50vh"
      backgroundColor="#DEB9F2"
    >
      <Box padding={10}>
        <Text
          fontSize={{ base: 18, sm: 18, md: 24, lg: 24, xl: 24, "2xl": 24 }}
          align="center"
          fontWeight="bold"
        >
          SIGN UP FOR OUR NEWSLETTER
        </Text>
        <Box height={25} />
        <Text align="center" fontSize={16}>
          Sign up to get the latest on sales, new releases, and more...
        </Text>
        <Box height={25} />
        <Input
          placeholder="Write your e-email"
          backgroundColor="white"
          border="1px solid"
          borderColor="#B256B8"
          borderRadius="50px"
        />
        <Box height={25} />
        <Box display="flex" justifyContent="center" alignItems="center">
          <Link onClick={() => router.push("products")}>Products</Link>
          <Text marginStart="5px" marginEnd="5px">
            |
          </Text>
          <Link onClick={() => router.push("feedback")}>Feedback</Link>
          <Text marginStart="5px" marginEnd="5px">
            |
          </Text>
          <Link onClick={() => router.push("about-us")}>About Us</Link>
        </Box>
        <Box height={25} />
        <Box display="flex" justifyContent="space-around">
          <Avatar
            src="/images/shopee.png"
            cursor="pointer"
            onClick={() => {
              window.open("https://shopee.ph/the99sclub", "_blank");
            }}
          />
          <Avatar
            src="/images/facebook.png"
            cursor="pointer"
            onClick={() => {
              window.open("https://www.facebook.com/the99sclub/", "_black");
            }}
          />
          <Avatar
            src="/images/twitter.png"
            cursor="pointer"
            onClick={() => {
              window.open("https://www.facebook.com/the99sclub/", "_black");
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}
