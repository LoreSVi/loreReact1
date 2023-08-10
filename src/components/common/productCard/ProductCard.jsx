import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { green } from "@mui/material/colors";
import { Link } from "react-router-dom";

const ProductCard = ({ elemento }) => {
  return (
    <Card sx={{ width: 220, height: 400, backgroundColor: "#edf9" }}>
      <CardMedia
        sx={{ height: 200 }}
        image={elemento.img}
        title="green iguana"
      />
      <CardContent sx={{ height: 150 }}>
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          textAlign={"center"}
        >
          {elemento.title}
        </Typography>
        <Typography variant="p" color="text.secondary" textAlign={"center"}>
          {elemento.description}
        </Typography>
        <Typography variant="subtitle1" textAlign={"center"}>
          ${elemento.price}.-
        </Typography>
      </CardContent>
      <CardActions style={{ display: "flex", justifyContent: "center" }}>
        <Link to={`/itemDetail/${elemento.id}`}>
          <Button
            variant="contained"
            size="small"
            color="secondary"
            sx={{ textTransform: "none" }}
          >
            Ver detalle
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
