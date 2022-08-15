/*!
 * Original code by SEEK
 * MIT Licensed, Copyright (c) 2021 SEEK.
 *
 * Credits to the SEEK team:
 * https://github.com/seek-oss/vanilla-extract/blob/master/packages/recipes/src/types.ts
 */

import { Accessor } from "solid-js";

import { ThemeColorScheme } from "./color-system";
import { SystemStyleObject } from "./styled-system";
import { ThemeVars } from "./theme";

/** String representation of `boolean` type. */
type BooleanStringUnion = "true" | "false";

/** Infer the type to `boolean` if it's a string union of `"true" | "false"`. */
type BooleanMap<T> = T extends BooleanStringUnion ? boolean : T;

/** Infer the type to string union of `"true" | "false"` if it's a `boolean`. */
type ReverseBooleanMap<T> = T extends boolean ? BooleanStringUnion : T;

/** An object of style config parts/style objects. */
export type StyleObjects<Parts extends string> = Record<Parts, SystemStyleObject>;

export type VariantSelection<VariantDefinitions extends Record<string, any>> = {
  [VariantName in keyof VariantDefinitions]?: BooleanMap<VariantDefinitions[VariantName]>;
};

export interface CompoundVariant<
  Parts extends string,
  VariantDefinitions extends Record<string, any>
> {
  /** The combined variants that should apply the styles. */
  variants: VariantSelection<VariantDefinitions>;

  /** The styles to be applied. */
  style: Partial<StyleObjects<Parts>>;
}

type Variants<Parts extends string, T extends Record<string, any>> = {
  [K in keyof T]?: {
    [V in ReverseBooleanMap<T[K]>]?: Partial<StyleObjects<Parts>>;
  };
};

/** A style configuration. */
export type StyleConfig<Parts extends string, VariantDefinitions extends Record<string, any>> = {
  /**
   * The base style of each part.
   * Note: if a part doesn't need base style just put an empty object.
   * @example
   * {
   *   root: {
   *     background: "primary.500",
   *   },
   *   icon: {},
   * }
   */
  baseStyle: StyleObjects<Parts>;

  /** The variants style of each part. */
  variants?: Variants<Parts, VariantDefinitions>;

  /** The combined variants style of each part. */
  compoundVariants?: Array<CompoundVariant<Parts, VariantDefinitions>>;

  /** The default variants to use. */
  defaultVariants?: VariantSelection<VariantDefinitions>;
};

/** An object or function that returns style configuration. */
export type StyleConfigInterpolation<
  Parts extends string,
  VariantDefinitions extends Record<string, any>
> =
  | StyleConfig<Parts, VariantDefinitions>
  | ((options: {
      vars: ThemeVars;
      colorScheme: ThemeColorScheme;
    }) => StyleConfig<Parts, VariantDefinitions>);

/** A style configuration used for theming and component level styles overrides. */
export type StyleConfigOverride<
  Parts extends string,
  VariantDefinitions extends Record<string, any>
> = Omit<StyleConfig<Parts, VariantDefinitions>, "baseStyle" | "defaultVariants"> & {
  /** The base style of each part. */
  baseStyle?: Partial<StyleObjects<Parts>>;
};

/** An object or function that returns style configuration overrides. */
export type StyleConfigOverrideInterpolation<
  Parts extends string,
  VariantDefinitions extends Record<string, any>
> =
  | StyleConfigOverride<Parts, VariantDefinitions>
  | ((options: {
      vars: ThemeVars;
      colorScheme: ThemeColorScheme;
    }) => StyleConfigOverride<Parts, VariantDefinitions>);

export type UseStyleConfigOptions<
  Parts extends string,
  VariantDefinitions extends Record<string, any>
> = VariantSelection<VariantDefinitions> & {
  /** The color scheme to use. */
  colorScheme?: ThemeColorScheme;

  /**
   * Styles that will be merged with the "base styles" created by `createStyleConfig`.
   * Mostly used to override/add additional styles.
   */
  styleConfigOverride?: StyleConfigOverrideInterpolation<Parts, VariantDefinitions>;

  /** Whether the base styles should be applied or not. */
  unstyled?: boolean;
};

export type UseStyleConfigFn<
  Parts extends string,
  VariantDefinitions extends Record<string, any>
> = (
  name: string,
  options: UseStyleConfigOptions<Parts, VariantDefinitions>
) => Accessor<StyleObjects<Parts>>;