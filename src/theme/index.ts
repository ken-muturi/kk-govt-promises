import { extendTheme, theme as baseTheme } from "@chakra-ui/react";
import styles from "./styles";

export const theme: Record<string, unknown> = extendTheme({
  ...styles,
  colors: { ...baseTheme.colors, brand: baseTheme.colors.blue },
  space: {
    "4.5": "1.125rem",
  },
});
