import { Box, ChakraComponent } from "@chakra-ui/react";

interface IProps {
  name: string;
  size?: number;
}

const Icon: ChakraComponent<"div", IProps> = ({ name, size = 24, ...rest }) => {
  return (
    <Box as="span" fontSize={size} className="material-icons" {...rest}>
      {name}
    </Box>
  );
};

export default Icon;
