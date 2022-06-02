import { fireEvent, render, screen } from "@testing-library/react";
import { Header } from ".";
import { ANIMAL_LIST } from "../../config/constants";

test("Renders a button for each animal", async () => {
  const props = {
    selectedAnimal: ANIMAL_LIST[0],
    animals: ANIMAL_LIST,
    handleAnimalChange: jest.fn(),
  };

  render(<Header {...props} />);

  props.animals.forEach((animal) => {
    expect(screen.getByText(animal.name, { exact: false })).toBeInTheDocument();
  });
});

test("Handles on click event", async () => {
  const props = {
    selectedAnimal: ANIMAL_LIST[0],
    animals: ANIMAL_LIST,
    handleAnimalChange: jest.fn(),
  };

  render(<Header {...props} />);

  fireEvent.click(screen.getByText(props.animals[0].name));

  expect(props.handleAnimalChange).toHaveBeenCalledWith(props.animals[0]);
});
