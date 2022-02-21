import { Property } from "csstype";
import { mergeProps, Show, splitProps } from "solid-js";

import { ColorScaleValue, SizeScaleValue } from "@/styled-system";
import { visuallyHiddenStyles } from "@/theme/utils";
import { classNames, createClassSelector } from "@/utils/css";

import { Box } from "../box/box";
import { ElementType, HopeComponentProps } from "../types";
import { spinnerStyles, SpinnerVariants } from "./spinner.styles";

interface SpinnerOptions extends SpinnerVariants {
  /**
   * The color of the empty area in the spinner
   */
  emptyColor?: Property.Color | ColorScaleValue;

  /**
   * The color of the spinner
   */
  color?: Property.Color | ColorScaleValue;

  /**
   * The thickness of the spinner
   * @example
   * ```jsx
   * <Spinner thickness="4px"/>
   * ```
   */
  thickness?: Property.BorderWidth<SizeScaleValue>;

  /**
   * The speed of the spinner.
   * @example
   * ```jsx
   * <Spinner speed="0.2s"/>
   * ```
   */
  speed?: Property.TransitionDuration;

  /**
   * For accessibility, it is important to add a fallback loading text.
   * This text will be visible to screen readers.
   */
  label?: string;
}

export type SpinnerProps<C extends ElementType = "div"> = HopeComponentProps<C, SpinnerOptions>;

const hopeSpinnerClass = "hope-spinner";

export function Spinner<C extends ElementType = "div">(props: SpinnerProps<C>) {
  const defaultProps: SpinnerProps<"div"> = {
    as: "div",
    label: "Loading...",
    size: "md",
  };

  const propsWithDefault: SpinnerProps<"div"> = mergeProps(defaultProps, props);
  const [local, others] = splitProps(propsWithDefault, [
    "class",
    "children",
    "label",
    "size",
    "emptyColor",
    "color",
    "thickness",
    "speed",
  ]);

  const classes = () =>
    classNames(
      local.class,
      hopeSpinnerClass,
      spinnerStyles({
        size: local.size,
        css: {
          color: local.color,
          borderWidth: local.thickness,
          borderBottomColor: local.emptyColor,
          borderLeftColor: local.emptyColor,
          animationDuration: local.speed,
        },
      })
    );

  return (
    <Box class={classes()} {...others}>
      <Show when={local.label}>
        <span class={visuallyHiddenStyles()}>{local.label}</span>
      </Show>
    </Box>
  );
}

Spinner.toString = () => createClassSelector(hopeSpinnerClass);