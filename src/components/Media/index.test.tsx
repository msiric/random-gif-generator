import { render, screen } from "@testing-library/react";
import { Media } from ".";

test("Renders the correct image", async () => {
  const props = {
    image: "random.png",
    height: "550px",
    alt: "test",
  };

  render(<Media {...props} />);

  const image = screen.getByAltText(props.alt);

  expect(image).toHaveAttribute("src", props.image);
});
