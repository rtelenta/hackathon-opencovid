import { Box } from "@chakra-ui/layout";
import { Heading, Text } from "@chakra-ui/react";
import AsyncSelect from "react-select/async";
import React from "react";
import getPlaces from "../services/getPlaces";

const Finder: React.FC = () => {
  return (
    <Box mt="20">
      <Heading as="h2" color="gray.600" mb="8" fontWeight="bold" fontSize="xl">
        Ya empezamos la carrera por la vacunación
      </Heading>

      <AsyncSelect
        styles={{
          control: (base) => ({
            ...base,
            border: 0,
            borderRadius: 12,
            fontSize: 14,
            padding: "6px 8px",
          }),
        }}
        theme={(theme) => ({
          ...theme,
          borderRadius: 0,
          colors: {
            ...theme.colors,
            primary: "#0BC5EA",
          },
        })}
        cacheOptions
        loadOptions={getPlaces}
        defaultOptions
        onInputChange={(val) => console.log(val)}
        placeholder="Todo el Perú"
      />

      <Text fontSize="xs" mt="2" ml="4">
        Buscar por departamento o distrito. Ejemplo: Santa Anita
      </Text>
    </Box>
  );
};

export default Finder;
