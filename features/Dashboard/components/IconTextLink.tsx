import { Link, Text, Flex } from "@chakra-ui/react";
import React from "react";
import Icon from "components/Icon";
import IconSquare from "components/IconSquare";

interface IProps {
  iconName: string;
  link: string;
}

const IconTextLink: React.FC<IProps> = ({ children, iconName, link }) => {
  return (
    <Link
      href={link}
      isExternal
      display="flex"
      alignItems="center"
      _hover={{ textDecor: "none", borderRadius: "lg", bg: "gray.100" }}
      color="blue.700"
      w="100%"
    >
      <IconSquare name={iconName} mr="4" />

      <Text as="span" fontSize="sm">
        {children}
      </Text>

      <Icon name="chevron_right" ml="auto" color="cyan.400" />
    </Link>
  );
};

export default IconTextLink;
