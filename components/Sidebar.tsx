import { Box } from "@chakra-ui/react";

const Sidebar: React.FC = ({ children }) => {
  return (
    <Box pt="14" px="12" w="28.5%" as="aside" flexShrink={0}>
      {children}
    </Box>
  );
};

export default Sidebar;
