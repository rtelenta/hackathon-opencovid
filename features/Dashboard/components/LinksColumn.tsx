import { Heading, VStack, Text } from "@chakra-ui/react";
import Sidebar from "components/Sidebar";
import React from "react";
import IconTextLink from "./IconTextLink";

const LinksColumn: React.FC = () => {
  return (
    <Sidebar>
      <Heading as="h2" color="gray.600" mb="8" fontWeight="bold" fontSize="xl">
        Te ayudamos
      </Heading>

      <VStack spacing="4">
        <IconTextLink iconName="hotel" link="#">
          Camas UCI
        </IconTextLink>
        <IconTextLink iconName="facebook" link="#">
          Balones de oxígeno
        </IconTextLink>
        <IconTextLink iconName="facebook" link="#">
          Medicamentos disponibles
        </IconTextLink>
        <IconTextLink iconName="favorite" link="#">
          Cuidados
        </IconTextLink>
        <IconTextLink iconName="local_library" link="#">
          Ayuda psicológica
        </IconTextLink>
      </VStack>

      <Heading
        as="h2"
        color="gray.600"
        mb="8"
        fontWeight="bold"
        fontSize="xl"
        mt="20"
      >
        Más información sobre covid
      </Heading>

      <VStack spacing="4">
        <IconTextLink iconName="facebook" link="#">
          Open Covid
        </IconTextLink>
        <IconTextLink iconName="remove_red_eye" link="#">
          Visor de vacunas
        </IconTextLink>
        <IconTextLink iconName="insert_chart" link="#">
          Sala situacional
        </IconTextLink>
      </VStack>
    </Sidebar>
  );
};

export default LinksColumn;
