import { ThemeOverride } from "@chakra-ui/react";

const styles: ThemeOverride["styles"] = {
  global: () => ({
    body: {
      bg: "bg.light",
      fontWeight: "light",
      color: "blue.700",
    },
  }),
};

export default styles;
