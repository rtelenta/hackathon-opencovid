import { extendTheme, theme } from "@chakra-ui/react";
import styles from "./styles";
import config from "./config";

const overrides = {
  styles,
  config,
  colors: {
    bg: {
      dark: "#F4F5F7",
      light: "#FBFBFB",
    },
  },
  fonts: {
    body: `'Heebo',-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
    heading: `'Heebo',-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
  },
};

export default extendTheme(overrides, theme);
