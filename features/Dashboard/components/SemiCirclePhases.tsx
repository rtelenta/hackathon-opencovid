import SemiCircleProgressBar from "react-progressbar-semicircle";
import styled from "@emotion/styled";
import { Box, Text } from "@chakra-ui/layout";

const SemiCircleWrapper = styled.div`
  circle {
    stroke-linecap: round;
  }
`;

interface IProps {
  dosis1: number;
  dosis2: number;
}

const SemiCirclePhases: React.FC<IProps> = ({ dosis1, dosis2 }) => {
  return (
    <SemiCircleWrapper>
      <Box pos="relative">
        <SemiCircleProgressBar
          percentage={dosis1}
          background="#EDF2F7"
          strokeWidth={16}
          stroke="#0BC5EA"
          diameter={150}
        />
        <Box
          pos="absolute"
          textAlign="center"
          bottom="10px"
          left="50%"
          transform="translateX(-50%)"
          lineHeight="4"
        >
          <Text fontWeight="bold" fontSize="xs">
            {dosis1}%
          </Text>
          <Text fontSize="xs" fontWeight="normal">
            1era dosis
          </Text>
        </Box>

        <Box
          pos="absolute"
          bottom="0"
          w="60px"
          bg="gray.100"
          left="50%"
          transform="translateX(-50%)"
          h="px"
        />
      </Box>
      <Box pos="relative">
        <SemiCircleProgressBar
          percentage={dosis2}
          background="#EDF2F7"
          orientation="down"
          direction="left"
          strokeWidth={16}
          stroke="#48BB78"
          diameter={150}
        />
        <Box
          pos="absolute"
          textAlign="center"
          top="10px"
          left="50%"
          transform="translateX(-50%)"
          lineHeight="4"
        >
          <Text fontSize="xs" fontWeight="normal">
            2da dosis
          </Text>
          <Text fontWeight="bold" fontSize="xs">
            {dosis2}%
          </Text>
        </Box>
      </Box>
    </SemiCircleWrapper>
  );
};

export default SemiCirclePhases;
