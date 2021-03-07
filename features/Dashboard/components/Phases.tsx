import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
} from "@chakra-ui/react";
import Card from "components/Card";
import React from "react";
import SemiCircleProgressBar from "react-progressbar-semicircle";
import styled from "@emotion/styled";

const SemiCircleWrapper = styled.div`
  circle {
    stroke-linecap: round;
  }
`;

const Phases: React.FC = () => {
  return (
    <Card mt="8">
      <Accordion defaultIndex={[0, 1, 2]} allowMultiple>
        <AccordionItem border="0">
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left" fontWeight="bold" fontSize="lg">
                Fase 1
              </Box>
              <AccordionIcon color="cyan.400" w="6" h="6" />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <SemiCircleWrapper>
              <SemiCircleProgressBar
                percentage={70}
                background="#EDF2F7"
                strokeWidth={16}
                stroke="#0BC5EA"
                diameter={150}
              />
              <SemiCircleProgressBar
                percentage={10}
                background="#EDF2F7"
                orientation="down"
                direction="left"
                strokeWidth={16}
                stroke="#48BB78"
                diameter={150}
              />
            </SemiCircleWrapper>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem border="0">
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left" fontWeight="bold" fontSize="lg">
                Fase 2
              </Box>
              <AccordionIcon color="cyan.400" w="6" h="6" />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem border="0">
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left" fontWeight="bold" fontSize="lg">
                Fase 3
              </Box>
              <AccordionIcon color="cyan.400" w="6" h="6" />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Card>
  );
};

export default Phases;
