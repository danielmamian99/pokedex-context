import { Link as RouterLink } from "react-router-dom";
import {
  Typography,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
} from "@mui/material";

export const PokemonCard = ({ urlImage, name }) => {
  return (
    <Card sx={{ width: "100%" }}>
      <CardActionArea
        component={RouterLink}
        style={{ backgroundColor: "#e0ddd7" }}
        to={`/pokedex/pokemon/${name}`}
      >
        <CardMedia
          component="img"
          image={urlImage}
          alt={name}
          loading="lazy"
          width="60vh"
        ></CardMedia>
        <CardContent style={{ backgroundColor: "#2979ff" }}>
          <Typography
            fontWeight="bold"
            variant="h5"
            textAlign="center"
            color="white"
          >
            {name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
