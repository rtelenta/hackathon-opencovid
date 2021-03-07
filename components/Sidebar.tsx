import { Box } from "@chakra-ui/react";

interface IProps {
  bgImage?: boolean;
}

const Sidebar: React.FC<IProps> = ({ children, bgImage = false }) => {
  return (
    <Box
      pt="14"
      px="12"
      w="28.5%"
      as="aside"
      flexShrink={0}
      bg={
        bgImage ? "url(/assets/woman.png) no-repeat center bottom" : undefined
      }
      backgroundSize="70%"
      pb={bgImage ? "25%" : 0}
    >
      {children}
    </Box>
  );
};

export default Sidebar;
