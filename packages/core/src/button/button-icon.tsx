import { createPolymorphicComponent, hope } from "@hope-ui/styles";
import { clsx } from "clsx";
import { splitProps } from "solid-js";

export const ButtonIcon = createPolymorphicComponent<"span">(props => {
  const [local, others] = splitProps(props, ["class"]);

  return (
    <hope.span
      __css={{
        display: "inline-flex",
        alignSelf: "center",
        flexShrink: 0,
      }}
      class={clsx("hope-button__icon", local.class)}
      {...others}
    />
  );
});
