import { cleanup, screen } from "solid-testing-library";

import { Input } from "@/components/input/input";
import { renderWithHopeProvider } from "@/utils/test-utils";

import { FormControl } from "../form-control";
import { formLabelStyles } from "../form-control.styles";
import { FormLabel } from "../form-label";

describe("FormLabel", () => {
  afterEach(() => {
    jest.clearAllMocks();
    cleanup();
  });

  it("should render", () => {
    // act
    renderWithHopeProvider(() => (
      <FormControl>
        <FormLabel data-testid="label" />
      </FormControl>
    ));
    const label = screen.getByTestId("label");

    // assert
    expect(label).toBeInTheDocument();
  });

  it("should render <label> tag by default", () => {
    // act
    renderWithHopeProvider(() => (
      <FormControl>
        <FormLabel data-testid="label" />
      </FormControl>
    ));
    const label = screen.getByTestId("label");

    // assert
    expect(label).toBeInstanceOf(HTMLLabelElement);
  });

  it("should have default id from FormControl", () => {
    // act
    renderWithHopeProvider(() => (
      <FormControl id="email">
        <FormLabel data-testid="label" />
      </FormControl>
    ));
    const label = screen.getByTestId("label");

    // assert
    expect(label).toHaveAttribute("id", "email-label");
  });

  it("should have 'for' attribute set to the input id generated by FormControl", () => {
    // act
    renderWithHopeProvider(() => (
      <FormControl>
        <FormLabel data-testid="label" />
        <Input data-testid="input" />
      </FormControl>
    ));
    const label = screen.getByTestId("label");
    const input = screen.getByTestId("input");

    // assert
    expect(label).toHaveAttribute("for", input.id);
  });

  // it("should have 'data-focus' attribute when input is focused", async () => {
  //   // act
  //   renderWithHopeProvider(() => (
  //     <FormControl disabled>
  //       <FormLabel data-testid="label" />
  //       <Input data-testid="input" />
  //     </FormControl>
  //   ));
  //   const label = screen.getByTestId("label");

  //   // simulate a `tab press` focusing the input
  //   userEvent.tab();

  //   // assert
  //   expect(label).toHaveAttribute("data-focus");
  // });

  it("should have 'data-disabled' attribute when FormControl is disabled", () => {
    // act
    renderWithHopeProvider(() => (
      <FormControl disabled>
        <FormLabel data-testid="label" />
      </FormControl>
    ));
    const label = screen.getByTestId("label");

    // assert
    expect(label).toHaveAttribute("data-disabled");
  });

  it("should have 'data-invalid' attribute when FormControl is invalid", () => {
    // act
    renderWithHopeProvider(() => (
      <FormControl invalid>
        <FormLabel data-testid="label" />
      </FormControl>
    ));
    const label = screen.getByTestId("label");

    // assert
    expect(label).toHaveAttribute("data-invalid");
  });

  it("should have 'data-readonly' attribute when FormControl is readOnly", () => {
    // act
    renderWithHopeProvider(() => (
      <FormControl readOnly>
        <FormLabel data-testid="label" />
      </FormControl>
    ));
    const label = screen.getByTestId("label");

    // assert
    expect(label).toHaveAttribute("data-readonly");
  });

  it("should have semantic hope class", () => {
    // act
    renderWithHopeProvider(() => (
      <FormControl>
        <FormLabel data-testid="label" />
      </FormControl>
    ));
    const label = screen.getByTestId("label");

    // assert
    expect(label).toHaveClass("hope-form-label");
  });

  it("should return semantic hope class as css selector when calling toString()", () => {
    expect(FormLabel.toString()).toBe(".hope-form-label");
  });

  it("should have class from class prop", () => {
    // arrange
    const stubClass = "stub";

    // act
    renderWithHopeProvider(() => (
      <FormControl>
        <FormLabel data-testid="label" class={stubClass} />
      </FormControl>
    ));
    const label = screen.getByTestId("label");

    // assert
    expect(label).toHaveClass(stubClass);
  });

  it("should have class from className prop", () => {
    // arrange
    const stubClass = "stub";

    // act
    renderWithHopeProvider(() => (
      <FormControl>
        {/* eslint-disable-next-line solid/no-react-specific-props */}
        <FormLabel data-testid="label" className={stubClass} />
      </FormControl>
    ));
    const label = screen.getByTestId("label");

    // assert
    expect(label).toHaveClass(stubClass);
  });

  it("should have class from classList prop", () => {
    // arrange
    const stubClass = "stub";

    // act
    renderWithHopeProvider(() => (
      <FormControl>
        <FormLabel data-testid="label" classList={{ [stubClass]: true }} />
      </FormControl>
    ));
    const label = screen.getByTestId("label");

    // assert
    expect(label).toHaveClass(stubClass);
  });

  it("should have stitches generated class from formLabelStyles", () => {
    // arrange
    const formLabelClass = formLabelStyles();

    // act
    renderWithHopeProvider(() => (
      <FormControl>
        <FormLabel data-testid="label" />
      </FormControl>
    ));
    const label = screen.getByTestId("label");

    // assert
    expect(label).toHaveClass(formLabelClass.className);
  });
});
