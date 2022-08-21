/*!
 * Original code by Mantinedev
 * MIT Licensed, Copyright (c) 2021 Vitaly Rtishchev.
 *
 * Credits to the Mantinedev team:
 * https://github.com/mantinedev/mantine/blob/master/src/mantine-styles/src/theme/MantineProvider.tsx
 */

import { Accessor, createContext, createMemo, mergeProps, ParentProps, useContext } from "solid-js";

import type { ComponentTheme, Theme } from "../types";
import { DEFAULT_THEME } from "./default-theme";
import { injectCSSVars } from "./inject-css-vars";
import { injectGlobalStyles } from "./inject-global-styles";

const ThemeContext = createContext<Theme>(DEFAULT_THEME);

export function useTheme() {
  return useContext(ThemeContext);
}

export function useComponentTheme(component?: string): Accessor<ComponentTheme | undefined> {
  const theme = useTheme();

  return createMemo(() => {
    if (component == null) {
      return undefined;
    }

    return theme.components[component] ?? undefined;
  });
}

/**
 * Merge default, theme and component props into a single props object.
 * @param name The name of the component to look for in the theme.
 * @param defaultProps The default props, will be overridden by theme and component props.
 * @param props The component `props` object.
 * @example
 * // mergedProps = defaultProps <== themeProps <== props
 */
export function mergeThemeProps<T extends Record<string, any>>(
  name: string,
  defaultProps: Partial<T>,
  props: T
): T {
  const theme = useTheme();

  const themeProps = () => theme.components[name]?.defaultProps ?? {};

  return mergeProps(defaultProps, themeProps, props);
}

export interface ThemeProviderProps extends ParentProps {
  /** The custom theme to use. */
  theme?: Theme;

  /** Whether Hope UI global styles should be applied. */
  withGlobalStyles?: boolean;
}

export function ThemeProvider(props: ThemeProviderProps) {
  // We don't care about reactivity here since theme is not intended to be dynamic, it should be set once.
  const theme = props.theme ?? DEFAULT_THEME;

  injectCSSVars(theme);

  props.withGlobalStyles && injectGlobalStyles(theme);

  return <ThemeContext.Provider value={theme}>{props.children}</ThemeContext.Provider>;
}
