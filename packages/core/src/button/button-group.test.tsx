import {
  itHasSemanticClass,
  itIsPolymorphic,
  itRendersChildren,
  itSupportsClass,
  itSupportsRef,
  itSupportsStyle,
} from "@hope-ui/tests";
import { render, screen } from "solid-testing-library";

import { Button } from "./button";
import { ButtonGroup, ButtonGroupProps } from "./button-group";

const defaultProps: ButtonGroupProps = {};

describe("ButtonGroup", () => {
  itIsPolymorphic(ButtonGroup as any, defaultProps);
  itRendersChildren(ButtonGroup as any, defaultProps);
  itSupportsClass(ButtonGroup as any, defaultProps);
  itHasSemanticClass(ButtonGroup as any, defaultProps, "hope-ButtonGroup-root");
  itSupportsRef(ButtonGroup as any, defaultProps, HTMLDivElement);
  itSupportsStyle(ButtonGroup as any, defaultProps);

  it("should have attribute 'role=group'", () => {
    render(() => (
      <ButtonGroup data-testid="button-group">
        <Button>Button A</Button>
        <Button>Button B</Button>
      </ButtonGroup>
    ));

    const buttonGroup = screen.getByTestId("button-group");

    expect(buttonGroup).toHaveAttribute("role", "group");
  });
});
