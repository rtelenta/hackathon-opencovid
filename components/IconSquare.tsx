import { ComponentWithAs, Flex, FlexProps } from "@chakra-ui/react";
import React from "react";
import Icon from "components/Icon";

interface IProps {
  name: string;
}

const IconSquare: ComponentWithAs<"div", FlexProps & IProps> = ({
  name,
  ...rest
}) => {
  return (
    <Flex borderRadius="lg" bg="gray.100" p="3" color="blue.700" {...rest}>
      <Icon name={name} />
    </Flex>
  );
};

export default IconSquare;
