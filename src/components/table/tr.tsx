import { splitProps } from "solid-js";

import { classNames, createClassSelector } from "@/utils/css";

import { Box } from "../box/box";
import { ElementType, HopeComponentProps } from "../types";

export type TrProps<C extends ElementType = "tr"> = HopeComponentProps<C>;

const hopeTrClass = "hope-tr";

export function Tr<C extends ElementType = "tr">(props: TrProps<C>) {
  const [local, others] = splitProps(props, ["class"]);

  const classes = () => classNames(local.class, hopeTrClass);

  return <Box as="tr" role="row" class={classes()} {...others} />;
}

Tr.toString = () => createClassSelector(hopeTrClass);
