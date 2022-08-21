/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/layout/src/stack.tsx
 */

import { createHopeComponent, hope, SystemStyleObject, SystemStyleProps } from "@hope-ui/styles";
import { filterUndefined } from "@hope-ui/utils";
import { clsx } from "clsx";
import { splitProps } from "solid-js";

export interface StackProps {
  /** Shorthand for `flexDirection` style prop. */
  direction?: SystemStyleProps["flexDirection"];

  /** Shorthand for `flexWrap` style prop. */
  wrap?: SystemStyleProps["flexWrap"];

  /** The gap between the stack items. */
  spacing?: SystemStyleProps["gap"];

  /** The column gap between the stack items. */
  spacingX?: SystemStyleProps["columnGap"];

  /** The row gap between the stack items. */
  spacingY?: SystemStyleProps["rowGap"];
}

/**
 * `Stack` makes it easy to stack elements together and apply a space between them.
 */
export const Stack = createHopeComponent<"div", StackProps>(props => {
  const [local, others] = splitProps(props, [
    "class",
    "direction",
    "wrap",
    "spacing",
    "spacingX",
    "spacingY",
  ]);

  return (
    <hope.div
      class={clsx("hope-Stack-root", local.class)}
      __css={filterUndefined<SystemStyleObject>({
        display: "flex",
        alignItems: "center",
        flexDirection: local.direction,
        flexWrap: local.wrap,
        gap: local.spacing,
        columnGap: local.spacingX,
        rowGap: local.spacingY,
      })}
      {...others}
    />
  );
});

export interface FixedDirectionStackProps extends Omit<StackProps, "direction" | "flexDirection"> {
  /** Whether the direction should be reversed. */
  reverse?: boolean;
}

/**
 * `HStack` arranges its children in a horizontal line.
 */
export const HStack = createHopeComponent<"div", FixedDirectionStackProps>(props => {
  const [local, others] = splitProps(props, ["reverse"]);

  return <Stack {...others} direction={local.reverse ? "row-reverse" : "row"} />;
});

/**
 * `VStack` arranges its children in a vertical line.
 */
export const VStack = createHopeComponent<"div", FixedDirectionStackProps>(props => {
  const [local, others] = splitProps(props, ["reverse"]);

  return <Stack {...others} direction={local.reverse ? "column-reverse" : "column"} />;
});
