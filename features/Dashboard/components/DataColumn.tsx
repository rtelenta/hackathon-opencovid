import { Heading, VStack, Text } from "@chakra-ui/react";
import Sidebar from "components/Sidebar";
import DataLargeNumbers from "./DataLargeNumbers";

const DataColumn: React.FC = () => {
  return (
    <Sidebar>
      <Heading as="h2" color="gray.600" mb="8" fontWeight="bold" fontSize="xl">
        Datos que suman
      </Heading>

      <VStack spacing="4" alignItems="flex-start">
        <DataLargeNumbers
          largeNumber="26 mil"
          largeNumberInfo={
            <>
              Vacunados{" "}
              <Text as="span" fontWeight="bold">
                (2 dosis)
              </Text>
            </>
          }
          tagIcon="local_hospital"
          tagInfo={
            <>
              En{" "}
              <Text as="span" fontWeight="bold">
                total
              </Text>{" "}
              ya somos
            </>
          }
        />

        <DataLargeNumbers
          largeNumber="13 mil"
          largeNumberInfo={
            <>
              Personas{" "}
              <Text as="span" fontWeight="bold">
                diariamente
              </Text>
            </>
          }
          tagIcon="check_circle"
          tagInfo={
            <>
              Estamos{" "}
              <Text as="span" fontWeight="bold">
                vacunando
              </Text>
            </>
          }
        />
      </VStack>
    </Sidebar>
  );
};

export default DataColumn;
