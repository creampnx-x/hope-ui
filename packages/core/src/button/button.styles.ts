import {
  CompoundVariant,
  createStyleConfig,
  focusStyles,
  spin,
  StyleConfigProps,
  ThemeColorScheme,
  ThemeVars,
} from "@hope-ui/styles";

import { rgba } from "../utils";

export type ButtonParts =
  | "root"
  | "icon"
  | "leftIcon"
  | "rightIcon"
  | "loaderWrapper"
  | "loaderIcon";

interface ButtonVariants {
  /** The color of the button. */
  colorScheme: ThemeColorScheme;

  /** The visual style of the button. */
  variant: "solid" | "soft" | "outlined" | "plain";

  /** The size of the button. */
  size: "xs" | "sm" | "md" | "lg";

  /** Whether the button should take all available width. */
  isFullWidth: boolean;
}

const colorSchemes: Array<ButtonVariants["colorScheme"]> = [
  "primary",
  "neutral",
  "success",
  "info",
  "warning",
  "danger",
];

function getRootSolidColorSchemeCompoundVariants(vars: ThemeVars) {
  const compoundVariants: Array<CompoundVariant<ButtonVariants>> = [];

  for (const colorScheme of colorSchemes) {
    const isNeutral = colorScheme === "neutral";
    const isWarning = colorScheme === "warning";

    compoundVariants.push({
      variants: {
        variant: "solid",
        colorScheme,
      },
      style: {
        color: isWarning ? vars.colors[colorScheme]["900"] : vars.colors.common.white,
        backgroundColor: vars.colors[colorScheme][isNeutral ? "900" : isWarning ? "300" : "500"],
        borderColor: vars.colors[colorScheme][isNeutral ? "900" : isWarning ? "300" : "500"],

        _hover: {
          color: isWarning ? vars.colors[colorScheme]["900"] : vars.colors.common.white,
          backgroundColor: vars.colors[colorScheme][isNeutral ? "800" : isWarning ? "400" : "600"],
          borderColor: vars.colors[colorScheme][isNeutral ? "800" : isWarning ? "400" : "600"],
        },

        _active: {
          color: isWarning ? vars.colors[colorScheme]["900"] : vars.colors.common.white,
          backgroundColor: vars.colors[colorScheme][isWarning ? "500" : "700"],
          borderColor: vars.colors[colorScheme][isWarning ? "500" : "700"],
        },

        _disabled: {
          color: vars.colors.common.white,
          backgroundColor: vars.colors.neutral["200"],
          borderColor: vars.colors.neutral["200"],
        },

        _dark: {
          color: isWarning ? vars.colors[colorScheme]["900"] : vars.colors.whiteAlpha["900"],
          backgroundColor: vars.colors[colorScheme][isWarning ? "500" : "700"],
          borderColor: vars.colors[colorScheme][isWarning ? "500" : "700"],

          _hover: {
            color: isWarning ? vars.colors[colorScheme]["900"] : vars.colors.whiteAlpha["900"],
            backgroundColor: vars.colors[colorScheme][isWarning ? "400" : "600"],
            borderColor: vars.colors[colorScheme][isWarning ? "400" : "600"],
          },

          _active: {
            color: isWarning ? vars.colors[colorScheme]["900"] : vars.colors.whiteAlpha["900"],
            backgroundColor: vars.colors[colorScheme][isWarning ? "300" : "500"],
            borderColor: vars.colors[colorScheme][isWarning ? "300" : "500"],
          },

          _disabled: {
            color: vars.colors.whiteAlpha["300"],
            backgroundColor: vars.colors.whiteAlpha["100"],
            borderColor: "transparent",
          },
        },
      },
    });
  }

  return compoundVariants;
}

function getRootSoftColorSchemeCompoundVariants(vars: ThemeVars) {
  const compoundVariants: Array<CompoundVariant<ButtonVariants>> = [];

  for (const colorScheme of colorSchemes) {
    const isNeutral = colorScheme === "neutral";
    const isWarning = colorScheme === "warning";

    compoundVariants.push({
      variants: {
        variant: "soft",
        colorScheme,
      },
      style: {
        color: vars.colors[colorScheme][isWarning ? "900" : "800"],
        backgroundColor: vars.colors[colorScheme][isNeutral ? "200" : isWarning ? "100" : "50"],
        borderColor: vars.colors[colorScheme][isNeutral ? "200" : isWarning ? "100" : "50"],

        _hover: {
          color: vars.colors[colorScheme][isWarning ? "900" : "800"],
          backgroundColor: vars.colors[colorScheme][isNeutral ? "300" : isWarning ? "200" : "100"],
          borderColor: vars.colors[colorScheme][isNeutral ? "300" : isWarning ? "200" : "100"],
        },

        _active: {
          color: vars.colors[colorScheme][isWarning ? "900" : "800"],
          backgroundColor: vars.colors[colorScheme][isNeutral ? "400" : isWarning ? "300" : "200"],
          borderColor: vars.colors[colorScheme][isNeutral ? "400" : isWarning ? "300" : "200"],
        },

        _disabled: {
          color: vars.colors.neutral["200"],
          backgroundColor: vars.colors.neutral["50"],
          borderColor: vars.colors.neutral["50"],
        },

        _dark: {
          color: vars.colors[colorScheme]["200"],
          backgroundColor: rgba(vars.colors[colorScheme].mainChannel, isNeutral ? 0.1 : 0.2),
          borderColor: "transparent",

          _hover: {
            color: vars.colors[colorScheme]["200"],
            backgroundColor: rgba(vars.colors[colorScheme].mainChannel, isNeutral ? 0.2 : 0.3),
            borderColor: "transparent",
          },

          _active: {
            color: vars.colors[colorScheme]["200"],
            backgroundColor: rgba(vars.colors[colorScheme].mainChannel, isNeutral ? 0.3 : 0.4),
            borderColor: "transparent",
          },

          _disabled: {
            color: vars.colors.whiteAlpha["200"],
            backgroundColor: vars.colors.whiteAlpha["50"],
            borderColor: "transparent",
          },
        },
      },
    });
  }

  return compoundVariants;
}

function getRootOutlinedColorSchemeCompoundVariants(vars: ThemeVars) {
  const compoundVariants: Array<CompoundVariant<ButtonVariants>> = [];

  for (const colorScheme of colorSchemes) {
    const isNeutral = colorScheme === "neutral";
    const isWarning = colorScheme === "warning";

    compoundVariants.push({
      variants: {
        variant: "outlined",
        colorScheme,
      },
      style: {
        color: vars.colors[colorScheme]["800"],
        backgroundColor: "transparent",
        borderColor: vars.colors[colorScheme][isNeutral || isWarning ? "400" : "300"],

        _hover: {
          color: vars.colors[colorScheme]["800"],
          backgroundColor: vars.colors[colorScheme][isNeutral || isWarning ? "100" : "50"],
          borderColor: vars.colors[colorScheme][isNeutral || isWarning ? "500" : "400"],
        },

        _active: {
          color: vars.colors[colorScheme]["800"],
          backgroundColor: vars.colors[colorScheme][isNeutral || isWarning ? "200" : "100"],
          borderColor: vars.colors[colorScheme][isNeutral || isWarning ? "500" : "400"],
        },

        _disabled: {
          color: vars.colors.neutral["200"],
          backgroundColor: "transparent",
          borderColor: vars.colors.neutral["100"],
        },

        _dark: {
          color: vars.colors[colorScheme]["200"],
          backgroundColor: "transparent",
          borderColor: vars.colors[colorScheme]["800"],

          _hover: {
            color: vars.colors[colorScheme]["200"],
            backgroundColor: rgba(vars.colors[colorScheme].mainChannel, isNeutral ? 0.05 : 0.1),
            borderColor: vars.colors[colorScheme]["700"],
          },

          _active: {
            color: vars.colors[colorScheme]["200"],
            backgroundColor: rgba(vars.colors[colorScheme].mainChannel, isNeutral ? 0.1 : 0.2),
            borderColor: vars.colors[colorScheme]["700"],
          },

          _disabled: {
            color: vars.colors.whiteAlpha["200"],
            backgroundColor: "transparent",
            borderColor: vars.colors.whiteAlpha["50"],
          },
        },
      },
    });
  }

  return compoundVariants;
}

function getRootPlainColorSchemeCompoundVariants(vars: ThemeVars) {
  const compoundVariants: Array<CompoundVariant<ButtonVariants>> = [];

  for (const colorScheme of colorSchemes) {
    const isNeutral = colorScheme === "neutral";
    const isWarning = colorScheme === "warning";

    compoundVariants.push({
      variants: {
        variant: "plain",
        colorScheme,
      },
      style: {
        color: vars.colors[colorScheme]["800"],
        backgroundColor: "transparent",
        borderColor: "transparent",

        _hover: {
          color: vars.colors[colorScheme]["800"],
          backgroundColor: vars.colors[colorScheme][isNeutral || isWarning ? "100" : "50"],
          borderColor: vars.colors[colorScheme][isNeutral || isWarning ? "100" : "50"],
        },

        _active: {
          color: vars.colors[colorScheme]["800"],
          backgroundColor: vars.colors[colorScheme][isNeutral || isWarning ? "200" : "100"],
          borderColor: vars.colors[colorScheme][isNeutral || isWarning ? "200" : "100"],
        },

        _disabled: {
          color: vars.colors.neutral["200"],
          backgroundColor: "transparent",
          borderColor: "transparent",
        },

        _dark: {
          color: vars.colors[colorScheme]["200"],
          backgroundColor: "transparent",
          borderColor: "transparent",

          _hover: {
            color: vars.colors[colorScheme]["200"],
            backgroundColor: rgba(vars.colors[colorScheme].mainChannel, isNeutral ? 0.05 : 0.1),
            borderColor: "transparent",
          },

          _active: {
            color: vars.colors[colorScheme]["200"],
            backgroundColor: rgba(vars.colors[colorScheme].mainChannel, isNeutral ? 0.1 : 0.2),
            borderColor: "transparent",
          },

          _disabled: {
            color: vars.colors.whiteAlpha["200"],
            backgroundColor: "transparent",
            borderColor: "transparent",
          },
        },
      },
    });
  }

  return compoundVariants;
}

export const useStyleConfig = createStyleConfig<ButtonParts, ButtonVariants>(
  vars => ({
    root: {
      base: {
        appearance: "none",
        position: "relative",

        justifyContent: "center",
        alignItems: "center",
        gap: 2,

        outline: "none",

        border: "1px solid transparent",
        borderRadius: "sm",

        padding: 0,

        fontFamily: "inherit",
        fontSize: "100%",
        fontWeight: "medium",
        lineHeight: "none",
        textDecoration: "none",

        userSelect: "none",
        whiteSpace: "nowrap",
        verticalAlign: "middle",

        transitionProperty: "color, border-color, background-color, box-shadow",
        transitionDuration: "250ms",

        _disabled: {
          cursor: "not-allowed",
        },

        _loading: {
          opacity: 0.8,
        },

        ...focusStyles(vars),
      },
      variants: {
        size: {
          xs: {
            height: 7,
            px: 3,
            fontSize: "xs",
          },
          sm: {
            height: 8,
            px: 4,
            fontSize: "sm",
          },
          md: {
            height: 10,
            px: 5,
            fontSize: "base",
          },
          lg: {
            height: 12,
            px: 6,
            fontSize: "lg",
          },
        },
        isFullWidth: {
          true: {
            display: "flex",
            width: "100%",
          },
          false: {
            display: "inline-flex",
            width: "auto",
          },
        },
      },
      compoundVariants: [
        ...getRootSolidColorSchemeCompoundVariants(vars),
        ...getRootSoftColorSchemeCompoundVariants(vars),
        ...getRootOutlinedColorSchemeCompoundVariants(vars),
        ...getRootPlainColorSchemeCompoundVariants(vars),
      ],
    },
    icon: {
      base: {
        display: "inline-flex",
        alignSelf: "center",
        flexShrink: 0,
      },
    },
    leftIcon: {},
    rightIcon: {},
    loaderWrapper: {
      base: {
        position: "absolute",
        display: "flex",
        alignItems: "center",
        flexShrink: 0,
        fontSize: "1em",
        lineHeight: "normal",
      },
    },
    loaderIcon: {
      base: {
        fontSize: "1.3em",
        animation: `1s linear infinite ${spin}`,
      },
    },
  }),
  {
    colorScheme: "neutral",
    variant: "outlined",
    size: "md",
    isFullWidth: false,
  }
);

export type ButtonStyleConfigProps = StyleConfigProps<typeof useStyleConfig>;
