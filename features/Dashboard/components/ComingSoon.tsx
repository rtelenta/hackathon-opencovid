import { Box, Heading, Image } from "@chakra-ui/react";
import Card from "components/Card";
import React from "react";

const ComingSoon: React.FC = () => {
  return (
    <Card
      shadowLarge
      bg="url(/assets/search_person.png) no-repeat right center"
      backgroundSize="auto 60%"
    >
      <Heading as="h2" fontWeight="bold" fontSize="xs" mb="7" lineHeight="4">
        Proximamente
        <br />
        App Perú Positivo
      </Heading>

      <Box>
        <Image src="/assets/appstore.svg" mb="2" />
        <Image src="/assets/googleplay.svg" />
      </Box>
    </Card>
  );
};

export default ComingSoon;
