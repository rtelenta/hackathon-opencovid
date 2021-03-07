import { Box, ChakraComponent } from "@chakra-ui/react";

interface IProps {
  shadow?: boolean;
}

const Card: ChakraComponent<"div", IProps> = ({
  children,
  shadow = false,
  ...rest
}) => {
  return (
    <Box
      rounded="2xl"
      boxShadow={shadow ? "0 9px 24px rgba(205, 213, 223, 0.56)" : "none"}
      bg="white"
      w="full"
      p="6"
      {...rest}
    >
      {children}
    </Box>
  );
};

export default Card;
