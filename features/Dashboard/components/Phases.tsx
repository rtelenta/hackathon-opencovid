import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import Card from "components/Card";
import Icon from "components/Icon";
import React from "react";
import BadgeIcon from "./BadgeIcon";
import SemiCirclePhases from "./SemiCirclePhases";

const Phases: React.FC = () => {
  return (
    <Card mt="8">
      <Accordion defaultIndex={[0, 1, 2]} allowMultiple>
        <AccordionItem borderTop="0">
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left" fontWeight="bold" fontSize="lg">
                Fase 1
              </Box>
              <AccordionIcon color="cyan.400" w="6" h="6" />
            </AccordionButton>
          </h2>
          <AccordionPanel pb="9">
            <Flex>
              <Flex flexDirection="column" alignItems="flex-start">
                <SemiCirclePhases dosis1={70} dosis2={15} />

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
                    26 mil de 445 mil
                  </Text>
                  <Text fontSize="xs">Vacunados con 2 dosis</Text>
                </Box>
              </Flex>
              <Box ml="8" bg="#F9FAFD" rounded="lg" p="4">
                <VStack spacing="3" alignItems="flex-start">
                  <Text fontSize="xs" display="flex" alignItems="center">
                    <Icon size={14} name="supervised_user_circle" mr="2" />{" "}
                    Personal del sistema de salud
                  </Text>
                  <Text fontSize="xs" display="flex" alignItems="center">
                    <Icon size={14} name="supervised_user_circle" mr="2" />{" "}
                    Personal de seguridad y limpieza
                  </Text>
                  <Text fontSize="xs" display="flex" alignItems="center">
                    <Icon size={14} name="supervised_user_circle" mr="2" />{" "}
                    Serenazgos y brigadistas
                  </Text>
                  <Text fontSize="xs" display="flex" alignItems="center">
                    <Icon size={14} name="supervised_user_circle" mr="2" />{" "}
                    Estudiantes de Salud
                  </Text>
                  <Text fontSize="xs" display="flex" alignItems="center">
                    <Icon size={14} name="supervised_user_circle" mr="2" />{" "}
                    Adultos mayores de 60 años
                  </Text>
                  <Text fontSize="xs" display="flex" alignItems="center">
                    <Icon size={14} name="supervised_user_circle" mr="2" />{" "}
                    Bomberos y cruz roja
                  </Text>
                  <Text fontSize="xs" display="flex" alignItems="center">
                    <Icon size={14} name="supervised_user_circle" mr="2" />{" "}
                    Fuerzas armadas
                  </Text>
                  <Text fontSize="xs" display="flex" alignItems="center">
                    <Icon size={14} name="supervised_user_circle" mr="2" />{" "}
                    Policia nacional
                  </Text>
                </VStack>
              </Box>
            </Flex>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left" fontWeight="bold" fontSize="lg">
                Fase 2
              </Box>
              <AccordionIcon color="cyan.400" w="6" h="6" />
            </AccordionButton>
          </h2>
          <AccordionPanel pb="9">
            <SimpleGrid columns={2} spacing={5}>
              <BadgeIcon>Personal del sistema de salud</BadgeIcon>
              <BadgeIcon>Comunidades Indígenas o nativas</BadgeIcon>
              <BadgeIcon>Personal del sistema de salud</BadgeIcon>
              <BadgeIcon>Comunidades Indígenas o nativas</BadgeIcon>
            </SimpleGrid>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem borderBottom="0">
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left" fontWeight="bold" fontSize="lg">
                Fase 3
              </Box>
              <AccordionIcon color="cyan.400" w="6" h="6" />
            </AccordionButton>
          </h2>
          <AccordionPanel pb="9">
            <SimpleGrid columns={2} spacing={5}>
              <BadgeIcon>Personas de 18 - 59 años</BadgeIcon>
            </SimpleGrid>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Card>
  );
};

export default Phases;
