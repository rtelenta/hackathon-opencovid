import { Flex } from "@chakra-ui/layout";
import Icon from "components/Icon";
import React from "react";

const BadgeIcon: React.FC = ({ children }) => {
  return (
    <Flex fontSize="xs" alignItems="center" bg="#F9FAFD" rounded="lg" p="4">
      <Icon size={14} name="supervised_user_circle" mr="2" /> {children}
    </Flex>
  );
};

export default BadgeIcon;
