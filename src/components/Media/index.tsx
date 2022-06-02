import { CardMedia } from "@mui/material";

interface MediaProps {
  image: string;
  height: string;
  alt: string;
}

export const Media = ({ image, height, alt }: MediaProps) => (
  <CardMedia
    sx={(theme) => ({
      [theme.breakpoints.down(650)]: {
        objectFit: "contain",
        height: "auto",
      },
    })}
    component="img"
    height={height}
    alt={alt}
    image={image}
  />
);
