import { Heading, VStack, Text } from "@chakra-ui/react";
import Sidebar from "components/Sidebar";
import React from "react";
import IconTextLink from "./IconTextLink";

const LinksColumn: React.FC = () => {
  return (
    <Sidebar bgImage>
      <Heading as="h2" color="gray.600" mb="8" fontWeight="bold" fontSize="xl">
        Te ayudamos
      </Heading>

      <VStack spacing="4">
        <IconTextLink
          iconName="hotel"
          link="https://www.tecnoing.com/covid-camas.aspx"
        >
          Camas UCI
        </IconTextLink>
        <IconTextLink
          iconName="oxygen"
          link="https://joelg-oximap2020.maps.arcgis.com/apps/webappviewer/index.html?id=86514f5d3c5e416aaf3219786df9bdbe"
        >
          Balones de oxígeno
        </IconTextLink>
        <IconTextLink
          iconName="pastilla"
          link="http://observatorio.digemid.minsa.gob.pe/"
        >
          Precio de medicamentos
        </IconTextLink>
        <IconTextLink
          iconName="favorite"
          link="https://www.gob.pe/8733-ministerio-de-salud-cuidar-a-un-paciente-sospechoso-de-haber-contraido-coronavirus-covid-19"
        >
          Cuidados
        </IconTextLink>
        <IconTextLink
          iconName="local_library"
          link="https://docs.google.com/forms/d/e/1FAIpQLSegcqUeO4IazSfe4stobANdnt1KlYFOug7lhZn6HTCoJ8rWrg/viewform"
        >
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
        <IconTextLink iconName="covid" link="https://opencovid-peru.com/">
          Open covid
        </IconTextLink>
        <IconTextLink
          iconName="remove_red_eye"
          link="https://gis.minsa.gob.pe/GisVisorVacunados/"
        >
          Visor de vacunas
        </IconTextLink>
        <IconTextLink
          iconName="insert_chart"
          link="https://covid19.minsa.gob.pe/sala_situacional.asp"
        >
          Reporte del MINSA
        </IconTextLink>
      </VStack>
    </Sidebar>
  );
};

export default LinksColumn;
