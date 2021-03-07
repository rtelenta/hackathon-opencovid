import { Flex, Text, Box } from "@chakra-ui/layout";
import IconSquare from "components/IconSquare";

const TitleDateCard: React.FC = () => {
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
        ¡Empezamos 2da dosis!
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
        14/05/21
      </Box>
    </Flex>
  );
};

export default TitleDateCard;
