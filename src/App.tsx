import { Card, Paper, ThemeProvider, Typography } from "@mui/material";
import { useState } from "react";
import { theme } from "./styles/theme";
import { AnimalOption, ANIMAL_LIST } from "./config/constants";
import { fetchRandomGIF } from "./api/endpoints";
import { Header } from "./components/Header";
import { Actions } from "./components/Actions";
import { Content } from "./components/Content";
import { Media } from "./components/Media";
import { useSnackbar } from "notistack";
import { SNACKBAR_OPTIONS, toErrorMessage } from "./config/error";

export interface GifOption {
  title: string;
  image: string;
  user: string;
  avatar: string;
  date: string;
}

export const App = () => {
  const [selectedAnimal, setSelectedAnimal] = useState<AnimalOption>(
    ANIMAL_LIST[0]
  );
  const [randomGIF, setRandomGIF] = useState<GifOption | null>(null);
  const [loading, setLoading] = useState(false);

  const { enqueueSnackbar } = useSnackbar();

  const handleAnimalChange = (animal: AnimalOption) => {
    setRandomGIF(null);
    setSelectedAnimal(animal);
  };

  const handleGIFGeneration = async () => {
    try {
      setLoading(true);
      const response = await fetchRandomGIF(selectedAnimal.name);
      const { images, title, user, import_datetime } = response.data;
      const gif = {
        title,
        image: images.original.url,
        user: user?.username ?? "",
        avatar: user?.avatar_url ?? "",
        date: import_datetime,
      };
      setRandomGIF(gif);
    } catch (err) {
      enqueueSnackbar(toErrorMessage(err), SNACKBAR_OPTIONS);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Paper
        sx={{
          width: "100%",
          height: "100%",
          borderRadius: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Card sx={{ maxWidth: 650, margin: 1, width: "100%" }} raised>
          <Typography
            sx={(theme) => ({
              fontSize: 42,
              textAlign: "center",
              [theme.breakpoints.down(360)]: {
                fontSize: 30,
              },
            })}
          >
            GIF Generator
          </Typography>
          <Header
            selectedAnimal={selectedAnimal}
            animals={ANIMAL_LIST}
            handleAnimalChange={handleAnimalChange}
          />
          <Media
            height="550"
            alt={selectedAnimal.name}
            image={randomGIF?.image ?? selectedAnimal.image}
          />
          <Content selectedAnimal={selectedAnimal} randomGIF={randomGIF} />
          <Actions
            selectedAnimal={selectedAnimal}
            loading={loading}
            handleGIFGeneration={handleGIFGeneration}
          />
        </Card>
      </Paper>
    </ThemeProvider>
  );
};
