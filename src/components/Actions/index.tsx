import { CardActions } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { Shuffle as RandomIcon } from "@mui/icons-material";
import { AnimalOption } from "../../config/constants";

interface ActionsProps {
  selectedAnimal: AnimalOption;
  loading: boolean;
  handleGIFGeneration: () => void;
}

export const Actions = ({
  selectedAnimal,
  loading,
  handleGIFGeneration,
}: ActionsProps) => (
  <CardActions>
    <LoadingButton
      size="small"
      variant="outlined"
      loadingPosition="start"
      startIcon={<RandomIcon />}
      loading={loading}
      sx={{ margin: "auto" }}
      onClick={handleGIFGeneration}
    >
      {`Generate ${selectedAnimal.name} GIF`}
    </LoadingButton>
  </CardActions>
);
