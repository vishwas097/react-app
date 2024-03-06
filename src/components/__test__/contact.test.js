import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

test("Should render contact page heading", () => {
  render(<Contact />);

  const heading = screen.getByRole("heading");

  //Assertion
  expect(heading).toBeInTheDocument();
});

it("Should render contact page Button", () => {
  render(<Contact />);

  const button = screen.getByRole("button");
  expect(button).toBeInTheDocument();
});

it("Should render contact page Textbox", () => {
  render(<Contact />);
  const input = screen.getAllByRole("textbox");
  expect(input.length).toBe(2);
});
