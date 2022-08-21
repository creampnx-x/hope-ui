import { Button, hope, HStack, useColorMode, VStack } from "../src";

export default function App() {
  const { toggleColorMode } = useColorMode();

  return (
    <>
      <Button variant="soft" onClick={toggleColorMode} mb={4}>
        Toggle color mode
      </Button>
    </>
  );
}

/*
import { For } from "solid-js";

import { Button, hope } from "../src";

const range = [...Array(3000).keys()];

export default function App() {
  const startTime = new Date().getTime();

  return (
    <>
      <For each={range}>{(_, i) => <Button>Button</Button>}</For>
      <hope.div
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          bg: "tomato",
          color: "white",
          p: 4,
        }}
      >
        {new Date().getTime() - startTime}
      </hope.div>
    </>
  );
}
*/
