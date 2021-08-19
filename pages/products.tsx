import { Box, Button, Center, Image, Text } from "@chakra-ui/react";
import { Footer } from "../components/Footer";
import Navbar from "../components/Navbar";

type Product = {
  name: string;
  price: string;
  description: string;
  image: string;
};

const PRODUCTS: Product[] = [
  {
    name: "nectar babe shampoo and conditioner",
    price: "Php 500.00",
    image: "/images/product-1.png",
    description:
      "You won't get enough of our Nectar Shampoo's rich, saccharine scent! It's like treating your hair with candy-only difference is, this set's perfectly healthy (for your hair, that is!) Just like all our hair potions, our Nectar Shampoo has hydrolyzed keratin, argan oil and the correct pH formula so you can be the dreamy babe you were destined to be!",
  },
  {
    name: "blossom babe shampoo and conditioner",
    price: "Php 500.00",
    image: "/images/product-2.png",
    description:
      "If you’re into velvety floral fragrances, this set is perfect for you! Infused with hydrolyzed keratin and argan oil, this babe must-have will gently cleanse your hair and scalp without stripping it with its natural oils. It also has the correct pH formula which seals hair cuticles for extra smooth and shiny hair.",
  },
  {
    name: "gleam hair spray",
    price: "Php 500.00",
    image: "/images/product-3.png",
    description:
      "Frizzy hair no more! Tame those tresses with a few spritz of our daily hair shine spray guaranteed to resist humidity, add shine to your hair and hold for a silky, lustrous feel you can’t get your hands off!",
  },
];

export default function Products() {
  return (
    <>
      <Navbar />

      <Box
        id="products"
        minHeight="100vh"
        backgroundColor="#FAE9FB"
        padding={[0, 10, 0, 10]}
      >
        <Box height="50px" />
        <Text fontWeight="bold" fontSize="32px">
          Products
        </Text>

        {PRODUCTS.map((product, index) => {
          return (
            <Box
              display="flex"
              justifyContent="center"
              alignItems="start"
              flexDirection={index % 2 == 0 ? "row-reverse" : "row"}
              padding={[0, 10, 0, 10]}
            >
              <Image
                src={product.image}
                height={350}
                width={350}
                borderRadius="5px"
              />
              <Box padding={[0, 10, 0, 10]}>
                <Text fontWeight="bold" fontSize="24px">
                  {product.name}
                </Text>
                <Text marginTop={15} marginBottom={15}>
                  {product.price}
                </Text>
                <Text>{product.description}</Text>
              </Box>
            </Box>
          );
        })}
      </Box>

      <Footer />
    </>
  );
}
