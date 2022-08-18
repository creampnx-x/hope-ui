import {
  createHopeComponent,
  hope,
  mergeThemeProps,
  StyleConfigProvider,
  useStyleConfigContext,
} from "@hope-ui/styles";
import { mergeRefs } from "@solid-primitives/refs";
import { clsx } from "clsx";
import { createMemo, createSignal, onMount, Show, splitProps } from "solid-js";

import { createTagName } from "../primitives/create-tag-name";
import { ButtonParts, useStyleConfig } from "./button.styles";
import { ButtonIcon } from "./button-icon";
import { ButtonLoader } from "./button-loader";
import { isButton } from "./is-button";
import { ButtonContentProps, ButtonProps } from "./types";

export const Button = createHopeComponent<"button", ButtonProps>(props => {
  let ref: HTMLButtonElement | undefined;

  props = mergeThemeProps("Button", { loaderPlacement: "start" }, props);

  const [local, contentProps, styleConfigProps, others] = splitProps(
    props,
    [
      "ref",
      "class",
      "type",
      "as",
      "isLoading",
      "loaderPlacement",
      "loadingText",
      "loader",
      "isDisabled",
    ],
    ["children", "leftIcon", "rightIcon"],
    ["styleConfigOverride", "unstyled", "colorScheme", "variant", "size", "isFullWidth"]
  );

  const tagName = createTagName(
    () => ref,
    () => props.as || "button"
  );

  const [isNativeButton, setIsNativeButton] = createSignal(
    tagName() != null && isButton({ tagName: tagName(), type: local.type })
  );

  const type = createMemo(() => {
    if (local.type != null) {
      return local.type;
    }

    return isNativeButton() ? "button" : undefined;
  });

  const { classes, styles } = useStyleConfig("Button", styleConfigProps);

  onMount(() => {
    ref != null && setIsNativeButton(isButton(ref));
  });

  return (
    <StyleConfigProvider value={{ classes, styles }}>
      <hope.button
        as={local.as}
        ref={mergeRefs(el => (ref = el), local.ref)}
        role={!isNativeButton() && tagName() !== "a" ? "button" : undefined}
        type={type()}
        tabIndex={!isNativeButton() ? 0 : undefined}
        disabled={local.isDisabled}
        data-loading={local.isLoading || undefined}
        class={clsx("hope-button", classes().root, local.class)}
        __css={styles().root}
        {...others}
      >
        <Show when={local.isLoading && local.loaderPlacement === "start"}>
          <ButtonLoader hasLoadingText={!!local.loadingText}>{local.loader}</ButtonLoader>
        </Show>
        <Show when={local.isLoading} fallback={<ButtonContent {...contentProps} />}>
          <Show
            when={local.loadingText}
            fallback={
              <span style={{ opacity: 0 }}>
                <ButtonContent {...contentProps} />
              </span>
            }
          >
            {local.loadingText}
          </Show>
        </Show>
        <Show when={local.isLoading && local.loaderPlacement === "end"}>
          <ButtonLoader hasLoadingText={!!local.loadingText}>{local.loader}</ButtonLoader>
        </Show>
      </hope.button>
    </StyleConfigProvider>
  );
});

function ButtonContent(props: ButtonContentProps) {
  const { classes, styles } = useStyleConfigContext<ButtonParts>();

  return (
    <>
      <Show when={props.leftIcon}>
        <ButtonIcon class={classes().leftIcon} __css={styles().leftIcon}>
          {props.leftIcon}
        </ButtonIcon>
      </Show>
      {props.children}
      <Show when={props.rightIcon}>
        <ButtonIcon class={classes().rightIcon} __css={styles().rightIcon}>
          {props.rightIcon}
        </ButtonIcon>
      </Show>
    </>
  );
}
