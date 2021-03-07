import { Box, Flex, Text } from "@chakra-ui/layout";

interface IProps {
  progress: number;
  info: React.ReactNode;
}

const ProgressBar: React.FC<IProps> = ({ progress, info }) => {
  return (
    <Box>
      <Box bg="#F4F5F7" h="2" rounded="full" pos="relative">
        <Box
          pos="absolute"
          w="4"
          h="4"
          bg="cyan.400"
          rounded="full"
          left="0"
          top="50%"
          transform="translateY(-50%)"
        />
        <Box
          h="2"
          rounded="full"
          bgGradient="linear(to-r, cyan.400, green.400)"
          w={`${progress}%`}
        ></Box>
      </Box>

      <Flex justifyContent="space-between" mt="3" ml="4">
        <Text as="span" fontWeight="black" fontSize="sm">
          {progress}%
        </Text>

        <Text as="span" fontSize="xs">
          {info}
        </Text>
      </Flex>
    </Box>
  );
};

export default ProgressBar;
