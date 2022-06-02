import { render, screen } from "@testing-library/react";
import { Content } from ".";
import { ANIMAL_LIST } from "../../config/constants";

const RANDOM_GIF = {
  title: "Random GIF",
  image: "random.png",
  user: "Random user",
  avatar: "avatar.png",
  date: "2022-02-06 12:00:00",
};

test("Renders the selected animal's name", async () => {
  const props = {
    selectedAnimal: ANIMAL_LIST[0],
    randomGIF: null,
  };

  render(<Content {...props} />);

  expect(
    screen.getAllByText(props.selectedAnimal.name, { exact: false })
  ).toBeTruthy();
  expect(screen.queryByText(RANDOM_GIF.title)).not.toBeInTheDocument();
});

test("Renders a random GIF title", async () => {
  const props = {
    selectedAnimal: ANIMAL_LIST[0],
    randomGIF: RANDOM_GIF,
  };

  render(<Content {...props} />);

  expect(
    screen.getByText(RANDOM_GIF.title, { exact: false })
  ).toBeInTheDocument();
  expect(screen.queryByText(props.selectedAnimal.name)).not.toBeInTheDocument();
});

test("Renders the selected animal's fact", async () => {
  const props = {
    selectedAnimal: ANIMAL_LIST[0],
    randomGIF: null,
  };

  render(<Content {...props} />);

  expect(
    screen.getByText(props.selectedAnimal.fact, { exact: false })
  ).toBeInTheDocument();
  expect(screen.queryByText(RANDOM_GIF.user)).not.toBeInTheDocument();
});

test("Renders a random GIF user", async () => {
  const props = {
    selectedAnimal: ANIMAL_LIST[0],
    randomGIF: RANDOM_GIF,
  };

  render(<Content {...props} />);

  expect(
    screen.getByText(RANDOM_GIF.user, { exact: false })
  ).toBeInTheDocument();
  expect(screen.queryByText(props.selectedAnimal.fact)).not.toBeInTheDocument();
});
