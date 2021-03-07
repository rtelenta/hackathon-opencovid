import { Box, Heading, Flex, Text, IconButton, HStack } from "@chakra-ui/react";
import Icon from "./Icon";

const Header: React.FC = () => {
  return (
    <Box bg="white" as="header" borderBottom="1px solid" borderColor="gray.200">
      <Flex
        mx="auto"
        w="full"
        maxW="container.xl"
        px="12"
        alignItems="center"
        justifyContent="space-between"
        py="5"
      >
        <Heading as="h1" fontSize="3xl" fontWeight="bold">
          Perú{" "}
          <Text as="span" fontWeight="light">
            Positivo
          </Text>
        </Heading>

        <HStack spacing="4">
          <IconButton
            colorScheme="gray"
            aria-label="Compartir en facebook"
            icon={<Icon name="face" />}
          />
          <IconButton
            colorScheme="gray"
            aria-label="Compartir por whatsapp"
            icon={<Icon name="wsp" />}
          />
          <Box lineHeight="5">
            <Text fontWeight="bold" fontSize="sm">
              Comparte
            </Text>
            <Text fontWeight="light" fontSize="sm">
              nuestra información
            </Text>
          </Box>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Header;
