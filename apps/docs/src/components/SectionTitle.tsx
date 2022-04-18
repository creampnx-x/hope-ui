import { Heading, HTMLHopeProps } from "@hope-ui/design-system";

export default function SectionTitle(props: HTMLHopeProps<"h2">) {
  return <Heading as="h2" size="2xl" mb="$4" {...props} />;
}
