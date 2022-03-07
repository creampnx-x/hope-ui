import { createContext, createSignal, splitProps, useContext } from "solid-js";

import { classNames, createClassSelector } from "@/utils/css";

import { Box } from "../box/box";
import { ElementType, HTMLHopeProps } from "../types";
import { selectOptGroupStyles } from "./select.styles";
import { useComponentStyleConfigs } from "@/theme/provider";

export interface SelectOptGroupContextValue {
  setAriaLabelledBy: (id: string) => void;
}

const SelectOptGroupContext = createContext<SelectOptGroupContextValue>();

export type SelectOptGroupProps<C extends ElementType = "div"> = HTMLHopeProps<C>;

const hopeSelectOptGroupClass = "hope-select__optgroup";

/**
 * Component used to group multiple options.
 */
export function SelectOptGroup<C extends ElementType = "div">(props: SelectOptGroupProps<C>) {
  const theme = useComponentStyleConfigs().Select;

  const [local, others] = splitProps(props, ["class"]);

  const [ariaLabelledBy, setAriaLabelledBy] = createSignal<string | undefined>(undefined);

  const classes = () => classNames(local.class, hopeSelectOptGroupClass, selectOptGroupStyles());

  const context: SelectOptGroupContextValue = {
    setAriaLabelledBy,
  };

  return (
    <SelectOptGroupContext.Provider value={context}>
      <Box
        role="group"
        aria-labelledby={ariaLabelledBy()}
        class={classes()}
        __baseStyle={theme?.baseStyle?.optgroup}
        {...others}
      />
    </SelectOptGroupContext.Provider>
  );
}

SelectOptGroup.toString = () => createClassSelector(hopeSelectOptGroupClass);

export function useSelectOptGroupContext() {
  const context = useContext(SelectOptGroupContext);

  if (!context) {
    throw new Error("[Hope UI]: useSelectOptGroupContext must be used within a `<Select.OptGroup />` component");
  }

  return context;
}