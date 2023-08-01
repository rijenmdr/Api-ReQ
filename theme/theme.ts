import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({
  colors: {
    brand: {
      100: "#7269ef40",
      400: "#7a73e1",
      500: "#7269ef",
    },
    dark: {
      100: "#36404a",
      200: "#303841",
      300: "#262e35",
      400: "#495047"
    },
    light: {
      100: "#f7f7ff",
      200: "#fff",
      300: "#abb4d2",
      400: "#f5f7fb"
    },
    border: {
      100: "#36404a"
    }
  },
  fonts: {
    body: `'Open Sans', sans-serif`,
    heading: `'Raleway', sans-serif`,
  },
  config
});

export default theme;
