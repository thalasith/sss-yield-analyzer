// 1. Import the extendTheme function
import {
  extendTheme,
  ChakraProvider,
  SimpleGrid,
  Container,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import "@fontsource/montserrat/700.css";
import Header from "./Header";
import Card from "./Card";
import YieldTableContainer from "./YieldTableContainer";

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    900: "#000000",
    800: "#000000",
    700: "#000000",
  },
};

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const breakpoints = {
  sm: "320px",
  md: "768px",
  lg: "960px",
  xl: "1200px",
};

const theme = extendTheme({
  colors,
  config,
  breakpoints,
  fonts: {
    heading: "Montserrat, sans-serif",
    body: "Montserrat, sans-serif",
  },
});

const collectionData = [
  {
    title: "Secret Skellies",
    description:
      "A Secret Society of 777 Skellies evading Grimm on the $NEAR blockchain. The first deflationary NFT on NEAR Blockchain.",
    photoURL:
      "https://paras-cdn.imgix.net/bafkreigynjl2dymbl42lm746rfy3gejgpo6xddcqaa75jku4u42ifig2wa?w=800&auto=format,compress",
    parasURL: "https://paras.id/collection/secretskelliessociety.near",
  },
  {
    title: "Skullingham Estates",
    description:
      "111 properties set in the town of Skullingham - the home of Skellies and Grimms army.",
    photoURL:
      "https://paras-cdn.imgix.net/bafkreiapqknmnickl6ti7boj23qahbgsxi7gz4nsvfz73ctvv5rfd6guli?w=800&auto=format,compress",
    parasURL: "https://paras.id/collection/estates.secretskelliessociety.near",
  },
  {
    title: "Grimms Army",
    description: "A deflationary army of 777 tokens led by Grimm the Dreadful.",
    photoURL:
      "https://paras-cdn.imgix.net/bafkreicul7dbezxekorx5ln7jrvrl7ibejghjqa6cdwru2ii62ryp56zde?w=800&auto=format,compress",
    parasURL: "https://paras.id/collection/grimms.secretskelliessociety.near",
  },
];

function App() {
  const [isMobile] = useMediaQuery("(max-width: 900px)");
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <br />
      <Container maxW="container.xl" align centerContent>
        <Text fontSize={{ base: "2xl", md: "4xl" }} textAlign="center">
          Welcome to your cult. You are never leaving.
        </Text>
        <YieldTableContainer isMobile={isMobile} />
        <br />
        <Text fontSize={{ base: "xl", md: "2xl" }} textAlign="center" as="i">
          "The top of today is not the top of tomorrow."
        </Text>

        <Text fontSize={{ base: "lg", md: "md" }} as="i">
          Anon666
        </Text>
        <br />
        <SimpleGrid columns={{ base: 1, lg: 3 }} spacing={10}>
          {collectionData.map((collection, index) => {
            return <Card key={index} collection={collection} />;
          })}
        </SimpleGrid>
        <br />
        <Text fontSize={{ base: "lg", md: "xl" }} textAlign="center" as="i">
          "As a team, we can achieve anything - don't let anyone tell you
          otherwise."
        </Text>

        <Text fontSize={{ base: "lg", md: "md" }} as="i">
          Anon666
        </Text>
      </Container>
      <br />
    </ChakraProvider>
  );
}

export default App;
