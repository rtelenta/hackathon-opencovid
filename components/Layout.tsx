import { Flex } from "@chakra-ui/react";
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
        <title>
          {title ? `${title} - ` : ""}Perú Positivo, resumen del día
        </title>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Perú Positivo, resumen del día" />
        <meta
          property="og:description"
          content="Porque en Perú también pasan cosas buenas, conoce con nosotros toda la información que deberías saber :slight_smile: ."
        />
        <meta
          property="og:image"
          content="https://opencovid.vercel.app/assets/peru-positivo.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content="https://opencovid.vercel.app/" />
        <meta property="og:site_name" content="Perú Positivo" />
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
