import { Skeleton, Text } from "@chakra-ui/react";
import React from "react";
import { useQuery } from "react-query";
import getGeneralData from "../services/getGeneralData";
import DataLargeNumbers from "./DataLargeNumbers";
import Immunity from "./Immunity";

const GeneralData: React.FC = () => {
  const { data: generalData, isLoading } = useQuery("general", getGeneralData);

  if (isLoading) {
    return (
      <>
        <Skeleton w="full" height="140px" />
        <Skeleton w="full" height="140px" />
        <Skeleton w="full" height="140px" />
      </>
    );
  }

  return (
    <>
      <DataLargeNumbers
        largeNumber={generalData.totalSecond}
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
        largeNumber={generalData.averageDay}
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

      <Immunity percentage={generalData.percent} />
    </>
  );
};

export default GeneralData;
