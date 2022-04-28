// 1. Import the extendTheme function
import {
  extendTheme,
  ChakraProvider,
  SimpleGrid,
  Container,
  Text,
} from "@chakra-ui/react";
import Header from "./Header";
import YieldTable from "./YieldTable";
import Card from "./Card";

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

const theme = extendTheme({ colors, config });

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
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <br />
      <YieldTable />
      <Container maxW="container.xl" align centerContent>
        <br />

        <Text fontSize="4xl">Welcome to your cult. You are never leaving.</Text>
        <br />
        <SimpleGrid columns={3} spacing={10}>
          {collectionData.map((collection) => {
            return <Card collection={collection} />;
          })}
        </SimpleGrid>
      </Container>
      <br />
    </ChakraProvider>
  );
}

export default App;
