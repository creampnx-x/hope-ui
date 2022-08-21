/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/layout/src/container.tsx
 */

import {
  createHopeComponent,
  hope,
  mapResponsive,
  ResponsiveValue,
  useTheme,
} from "@hope-ui/styles";
import { clsx } from "clsx";
import { splitProps } from "solid-js";

import { mergeDefaultProps } from "../utils";

export interface ContainerProps {
  /** Whether the container itself should be centered on the page. */
  isCentered?: ResponsiveValue<boolean>;

  /** Whether the container should center its children regardless of their width. */
  centerContent?: boolean;
}

/**
 * `Container` is used to constrain a content's width to the current breakpoint, while keeping it fluid.
 *  By default, it sets `margin-left` and `margin-right` to `auto`, to keep its content centered.
 */
export const Container = createHopeComponent<"div", ContainerProps>(props => {
  props = mergeDefaultProps(
    {
      isCentered: true,
      centerContent: false,
    },
    props
  );

  const [local, others] = splitProps(props, ["class", "isCentered", "centerContent"]);

  const theme = useTheme();

  return (
    <hope.div
      class={clsx("hope-Container-root", local.class)}
      __css={{
        width: "100%",
        maxWidth: {
          sm: theme.breakpoints.sm,
          md: theme.breakpoints.md,
          lg: theme.breakpoints.lg,
          xl: theme.breakpoints.xl,
          "2xl": theme.breakpoints["2xl"],
        },
        mx: mapResponsive(local.isCentered, isCentered => (isCentered ? "auto" : undefined)),
        ...(local.centerContent && {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }),
      }}
      {...others}
    />
  );
});
