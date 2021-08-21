import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  IconButton,
  Image,
  Input,
  Link,
  useDisclosure,
} from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";
import React from "react";
import { useBreakpoints } from "../theme/utils";

export default function Navbar() {
  const router = useRouter();

  const breakpoints = useBreakpoints();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const drawerButtonRef = React.useRef();

  return (
    <>
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

        {!breakpoints.sm && !breakpoints.md ? (
          <NavigationItems />
        ) : (
          <IconButton
            // @ts-ignore
            ref={drawerButtonRef}
            onClick={onOpen}
            aria-label="Hamburger Icon"
            backgroundColor="transparent"
            color="black"
            _hover={{
              backgroundColor: "transparent",
            }}
            _active={{ backgroundColor: "transparent" }}
            icon={<HamburgerIcon />}
            // size={48}
          />
        )}
      </Box>

      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        // @ts-ignore
        finalFocusRef={drawerButtonRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            <Input placeholder="Type here..." />
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

function NavigationItems() {
  const router = useRouter();

  return (
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
  );
}
