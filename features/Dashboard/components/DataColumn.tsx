import { Heading, VStack } from "@chakra-ui/react";
import Sidebar from "components/Sidebar";
import ComingSoon from "./ComingSoon";
import GeneralData from "./GeneralData";
import Recovered from "./Recovered";
import Vaccinated from "./Vaccinated";

const DataColumn: React.FC = () => {
  return (
    <Sidebar>
      <Heading as="h2" color="gray.600" mb="8" fontWeight="bold" fontSize="xl">
        Datos que suman
      </Heading>

      <VStack spacing="4" alignItems="flex-start">
        <GeneralData />
        <Vaccinated />
        <Recovered />
        <ComingSoon />
      </VStack>
    </Sidebar>
  );
};

export default DataColumn;
