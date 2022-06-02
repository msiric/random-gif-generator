import { CardContent, Typography, Box, Avatar } from "@mui/material";
import { format } from "date-fns";
import { GifOption } from "../../App";
import { AnimalOption } from "../../config/constants";

interface ContentProps {
  selectedAnimal: AnimalOption;
  randomGIF: GifOption | null;
}

export const Content = ({ selectedAnimal, randomGIF }: ContentProps) => (
  <CardContent>
    <Typography
      sx={{ textTransform: "capitalize" }}
      gutterBottom
      variant="h5"
      component="div"
    >
      {randomGIF?.title ?? selectedAnimal.name}
    </Typography>
    {!!randomGIF ? (
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Avatar
          alt="unknown"
          src={randomGIF?.avatar}
          sx={{ width: 40, height: 40, marginRight: 1 }}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography variant="subtitle1" color="text.secondary">
            {`Created by: ${randomGIF?.user || "unknown"}`}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            {`Uploaded on ${format(
              new Date(randomGIF?.date),
              "do MMM yy, k:m"
            )}`}
          </Typography>
        </Box>
      </Box>
    ) : (
      <Typography variant="body1" color="text.secondary">
        {selectedAnimal.fact}
      </Typography>
    )}
  </CardContent>
);
