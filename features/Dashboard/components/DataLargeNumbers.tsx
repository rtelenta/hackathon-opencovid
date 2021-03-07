import { Box, Flex } from "@chakra-ui/react";
import Card from "components/Card";
import Icon from "components/Icon";

interface IProps {
  largeNumber: string;
  largeNumberInfo: React.ReactNode;
  tagIcon: string;
  tagInfo: React.ReactNode;
}

const DataLargeNumbers: React.FC<IProps> = ({
  largeNumber,
  largeNumberInfo,
  tagIcon,
  tagInfo,
}) => {
  return (
    <Card shadowLarge>
      <Flex alignItems="center">
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          bg="cyan.50"
          rounded="5"
          p="3"
          mr="5"
          maxW="80px"
        >
          <Icon name={tagIcon} mb="2" />
          <Box fontSize="xs" textAlign="center" color="gray.600" lineHeight="4">
            {tagInfo}
          </Box>
        </Flex>

        <Box>
          <Box fontSize="4xl" fontWeight="black">
            {largeNumber}
          </Box>
          <Box fontSize="xs" fontWeight="light">
            {largeNumberInfo}
          </Box>
        </Box>
      </Flex>
    </Card>
  );
};

export default DataLargeNumbers;
