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
            as="a"
            colorScheme="gray"
            aria-label="Compartir en facebook"
            icon={<Icon name="face" />}
            href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fopencovid.vercel.app%2F"
            target="_blank"
          />
          <IconButton
            colorScheme="gray"
            aria-label="Compartir por whatsapp"
            icon={<Icon name="wsp" />}
            as="a"
            href="https://api.whatsapp.com/send?text=https://opencovid.vercel.app/"
            target="_blank"
          />
          <Box lineHeight="5">
            <Text fontWeight="bold" fontSize="sm">
              Comparte
            </Text>
            <Text fontWeight="light" fontSize="sm">
              lo bueno
            </Text>
          </Box>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Header;
