import { Box, Heading, Text } from "@chakra-ui/react";
import Card from "components/Card";
import ProgressBar from "components/ProgressBar";
import React from "react";

const Immunity: React.FC = () => {
  return (
    <Card shadowLarge>
      <Heading as="h2" fontWeight="bold" fontSize="xs" mb="2">
        Inmunidad de rebaño
      </Heading>
      <Text fontSize="xs">
        Si llegamos al{" "}
        <Text as="strong" fontWeight="bold">
          70%
        </Text>{" "}
        el virus no tendrá a quién saltar y bajará la letalidad del virus
        ¡Vamos! ¡Sí llegamos!
      </Text>
      <Box mt="6">
        <ProgressBar
          progress={20}
          info={
            <>
              Deberíamos
              <br />
              llegar a{" "}
              <Text as="strong" fontWeight="bold">
                70%
              </Text>
            </>
          }
        />
      </Box>
    </Card>
  );
};

export default Immunity;
