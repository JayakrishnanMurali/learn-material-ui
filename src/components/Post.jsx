import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  media: {
    height: 250,
    [theme.breakpoints.down("sm")]: {
      height: 150,
    },
  },
  card: {
    marginBottom: theme.spacing(5),
  },
}));

function Post() {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://wallpaperaccess.com/full/24986.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5">
            What's Trending?
          </Typography>
          <Typography variant="body1">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos
            eveniet, dolorem distinctio provident nulla eligendi blanditiis
            pariatur corrupti fugit earum? Facilis saepe perspiciatis, inventore
            illum magnam dolore dolorum minus architecto. eveniet, dolorem
            distinctio provident nulla eligendi blanditiis pariatur corrupti
            fugit earum? Facilis saepe perspiciatis, inventore illum magnam
            dolore dolorum minus architecto.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

export default Post;
