import { Box, Text } from "@chakra-ui/react";
import Icon from "./Icon";

const Footer: React.FC = () => {
  return (
    <Box as="footer" bg="blue.700">
      <Text
        align="center"
        color="white"
        display="flex"
        alignItems="center"
        justifyContent="center"
        fontSize="md"
        py="4"
      >
        Hackathon Creamos Juntos - Equipo Carita Feliz{" "}
        <Icon name="sentiment_satisfied_alt" size={18} ml="1" />
      </Text>
    </Box>
  );
};

export default Footer;
