import { Box, Flex } from "@chakra-ui/react";
import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";

interface IProps {
  title?: string;
}

const Layout: React.FC<IProps> = ({ title, children }) => {
  return (
    <Flex flexDir="column" minH="100vh">
      <Head>
        <title>{title ? `${title} - ` : ""}Perú Positivo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Flex
        flexDirection="column"
        flexGrow={1}
        flexShrink={1}
        mx="auto"
        w="full"
        maxW="container.xl"
      >
        {children}
      </Flex>

      <Footer />
    </Flex>
  );
};

export default Layout;
