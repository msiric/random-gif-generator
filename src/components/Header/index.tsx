import { ButtonGroup, Button, CardActions } from "@mui/material";
import { AnimalOption } from "../../config/constants";

interface HeaderProps {
  selectedAnimal: AnimalOption;
  animals: AnimalOption[];
  handleAnimalChange: (animal: AnimalOption) => void;
}

export const Header = ({
  selectedAnimal,
  animals,
  handleAnimalChange,
}: HeaderProps) => (
  <CardActions>
    <ButtonGroup sx={{ margin: "auto" }} variant="outlined" color="secondary">
      {animals.map((animal) => (
        <Button
          sx={(theme) => ({
            [theme.breakpoints.down(360)]: {
              fontSize: 10,
            },
          })}
          key={animal.name}
          size="small"
          variant={
            animal.name === selectedAnimal.name ? "contained" : "outlined"
          }
          onClick={() => handleAnimalChange(animal)}
        >
          {animal.name}
        </Button>
      ))}
    </ButtonGroup>
  </CardActions>
);
