import { Box } from "@chakra-ui/layout";
import { Heading, Skeleton, Text } from "@chakra-ui/react";
import Select from "react-select";
import React from "react";
import getPlaces from "../services/getPlaces";
import { useQuery } from "react-query";

interface IProps {
  setSearch: (searchId: string) => void;
}

const Finder: React.FC<IProps> = ({ setSearch }) => {
  const { data: places, isLoading } = useQuery("places", getPlaces);

  return (
    <Box mt="20">
      <Heading as="h2" color="gray.600" mb="8" fontWeight="bold" fontSize="xl">
        Ya empezamos la carrera por la vacunación
      </Heading>

      {isLoading ? (
        <Skeleton w="full" height="50px" />
      ) : (
        <Select
          isClearable
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
          options={places}
          onChange={(option) => setSearch(option?.value || null)}
          placeholder="Todo el Perú"
        />
      )}

      <Text fontSize="xs" mt="2" ml="4">
        Buscar por departamento o distrito. Ejemplo: Santa Anita
      </Text>
    </Box>
  );
};

export default Finder;
