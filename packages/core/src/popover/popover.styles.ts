import { createStyleConfig, StyleConfigProps } from "@hope-ui/styles";

export type PopoverParts = "root" | "arrow";

export const usePopoverStyleConfig = createStyleConfig<PopoverParts, {}>(theme => ({
  root: {
    baseStyle: {
      zIndex: "popover",
      position: "absolute",

      display: "flex",
      flexDirection: "column",
      justifyContent: "center",

      width: "100%",
      maxWidth: "xs",

      outline: "none",

      boxShadow: "md",
      border: `1px solid ${theme.vars.colors.neutral["300"]}`,
      borderRadius: "sm",
      backgroundColor: "common.white",

      color: "inherit",

      _focus: {
        outline: "none",
      },

      _dark: {
        borderColor: "neutral.600",
        backgroundColor: "neutral.700",
      },
    },
  },
  arrow: {
    baseStyle: {
      position: "absolute",
      boxSize: "1em",
      pointerEvents: "none",

      "& svg": {
        stroke: "neutral.300",
        fill: "common.white",
      },

      _dark: {
        "& svg": {
          stroke: "neutral.600",
          fill: "neutral.700",
        },
      },
    },
  },
}));

export type PopoverStyleConfigProps = StyleConfigProps<typeof usePopoverStyleConfig>;