import { Flex, Text, Box } from "@chakra-ui/layout";
import IconSquare from "components/IconSquare";

interface IProps {
  title: string;
  date: string;
}

const TitleDateCard: React.FC<IProps> = ({ title, date }) => {
  return (
    <Flex
      bgGradient="linear(to-t, white, bg.dark)"
      rounded="xl"
      flexDirection="column"
      alignItems="center"
      px="7"
      pb="4"
      w="full"
    >
      <IconSquare name="confeti" mb="4" />

      <Text textAlign="center" fontSize="xs" fontWeight="bold" mb="4">
        {title}
      </Text>

      <Box
        bg="gray.600"
        rounded="base"
        color="white"
        fontWeight="bold"
        fontSize="xs"
        mt="auto"
        w="full"
        textAlign="center"
        p="1"
      >
        {date}
      </Box>
    </Flex>
  );
};

export default TitleDateCard;
