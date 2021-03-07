import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  SimpleGrid,
  Skeleton,
  Text,
  VStack,
} from "@chakra-ui/react";
import Card from "components/Card";
import Icon from "components/Icon";
import React from "react";
import { useQuery } from "react-query";
import kFormatter from "utils/kFormatter";
import getPlaceData from "../services/getPlaceData";
import BadgeIcon from "./BadgeIcon";
import SemiCirclePhases from "./SemiCirclePhases";

interface IProps {
  search: string;
}

const Phases: React.FC<IProps> = ({ search }) => {
  const { data: placeData, isLoading } = useQuery(["places", search], () =>
    getPlaceData(search)
  );

  if (isLoading) {
    return (
      <VStack spacing="4" mt="8">
        <Skeleton w="full" height="60px" />
        <Skeleton w="full" height="60px" />
        <Skeleton w="full" height="60px" />
      </VStack>
    );
  }

  return (
    <Card mt="8">
      <Accordion defaultIndex={[0, 1]} allowMultiple>
        {placeData.map(
          (
            {
              phase,
              percentFisrt,
              percentSecond,
              vaccineSecond,
              totalSecond,
              group,
            }: any,
            index: number
          ) => (
            <AccordionItem
              borderTop={index === 0 ? "0" : "px"}
              borderBottom={index == placeData.length - 1 ? "0" : "px"}
              key={`phase-${phase}`}
            >
              <h2>
                <AccordionButton>
                  <Box
                    flex="1"
                    textAlign="left"
                    fontWeight="bold"
                    fontSize="lg"
                  >
                    Fase {phase}
                  </Box>
                  <AccordionIcon color="cyan.400" w="6" h="6" />
                </AccordionButton>
              </h2>
              <AccordionPanel pb="9">
                {percentFisrt && percentSecond ? (
                  <Flex>
                    <Flex flexDirection="column" alignItems="flex-start">
                      <SemiCirclePhases
                        dosis1={percentFisrt}
                        dosis2={percentSecond}
                      />

                      <Box
                        background="white"
                        rounded="lg"
                        boxShadow={"0 1px 8px rgb(83, 85, 155, 0.176)"}
                        textAlign="center"
                        px="2"
                        py="4"
                        w="full"
                        lineHeight="4"
                        mt="9"
                      >
                        <Text fontSize="sm" fontWeight="bold">
                          {kFormatter(vaccineSecond)} de{" "}
                          {kFormatter(totalSecond)}
                        </Text>
                        <Text fontSize="xs">Vacunados con 2 dosis</Text>
                      </Box>
                    </Flex>
                    <Box ml="8" bg="#F9FAFD" rounded="lg" p="4">
                      <VStack spacing="3" alignItems="flex-start">
                        {group.map((tag: any) => (
                          <Text
                            fontSize="xs"
                            display="flex"
                            alignItems="center"
                            key={`phase-${phase}-tag-${tag}`}
                          >
                            <Icon
                              size={14}
                              name="supervised_user_circle"
                              mr="2"
                            />{" "}
                            {tag}
                          </Text>
                        ))}
                      </VStack>
                    </Box>
                  </Flex>
                ) : (
                  <SimpleGrid columns={2} spacing={5}>
                    {group.map((tag: any) => (
                      <BadgeIcon key={`phase-${phase}-tag-${tag}`}>
                        {tag}
                      </BadgeIcon>
                    ))}
                    <BadgeIcon>Comunidades Indígenas o nativas</BadgeIcon>
                    <BadgeIcon>Personal del sistema de salud</BadgeIcon>
                    <BadgeIcon>Comunidades Indígenas o nativas</BadgeIcon>
                  </SimpleGrid>
                )}
              </AccordionPanel>
            </AccordionItem>
          )
        )}
      </Accordion>
    </Card>
  );
};

export default Phases;
