import { fireEvent, render, screen } from "@testing-library/react";
import { Actions } from ".";
import { ANIMAL_LIST } from "../../config/constants";

test("Renders a disabled button", async () => {
  const props = {
    selectedAnimal: ANIMAL_LIST[0],
    loading: true,
    handleGIFGeneration: jest.fn(),
  };

  render(<Actions {...props} />);

  expect(
    screen.getByText(`Generate ${ANIMAL_LIST[0].name} GIF`)
  ).toBeDisabled();
});

test("Renders an enabled button", async () => {
  const props = {
    selectedAnimal: ANIMAL_LIST[1],
    loading: false,
    handleGIFGeneration: jest.fn(),
  };

  render(<Actions {...props} />);

  expect(
    screen.getByText(`Generate ${ANIMAL_LIST[1].name} GIF`)
  ).not.toBeDisabled();
});

test("Handles on click event", async () => {
  const props = {
    selectedAnimal: ANIMAL_LIST[0],
    loading: false,
    handleGIFGeneration: jest.fn(),
  };

  render(<Actions {...props} />);

  fireEvent.click(
    screen.getByText(`Generate ${props.selectedAnimal.name} GIF`)
  );

  expect(props.handleGIFGeneration).toHaveBeenCalled();
});
