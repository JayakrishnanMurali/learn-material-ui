import {
  Avatar,
  AvatarGroup,
  Box,
  Container,
  ImageList,
  ImageListItem,
  Link,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
  },
}));

function Rightbar() {
  const classes = useStyles();
  return (
    <Container
      className={classes.container}
      sx={{ position: "sticky", top: 0 }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 6,
        }}
      >
        <Typography variant="h6" sx={{ color: "#555" }}>
          Online Friends
        </Typography>
        <AvatarGroup max={4}>
          <Avatar
            alt="Remy Sharp"
            src="data:image/jpeg;base64,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"
          />
          <Avatar
            alt="Travis Howard"
            src="https://sportsgeeks.net/wp-content/uploads/2021/03/Roger-Federer.jpg"
          />
          <Avatar
            alt="Cindy Baker"
            src="https://sportsgeeks.net/wp-content/uploads/2021/06/Most-Popular-athlete.jpg"
          />
          <Avatar
            alt="Agnes Walker"
            src="https://english.cdn.zeenews.com/sites/default/files/2016/04/26/482520-virat-kohli-pc-smile-700.jpg"
          />
          <Avatar
            alt="Trevor Henderson"
            src="http://www.bestwebsiteinindia.com/blog/wp-content/uploads/2018/02/Saina-Nehwal.jpg"
          />
        </AvatarGroup>
      </Box>
      <Typography variant="h6" sx={{ color: "#555" }}>
        Saved Images
      </Typography>
      <ImageList cols={4} rowHeight={161}>
        <ImageListItem>
          <img
            src="https://images.pexels.com/photos/2486168/pexels-photo-2486168.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt=""
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://i.pinimg.com/736x/8e/6c/06/8e6c064f57f94838263d7ba9ad80f353.jpg"
            alt=""
          />
        </ImageListItem>

        <ImageListItem>
          <img src="https://wallpapercave.com/uwp/uwp926758.png" alt="" />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://images.hdqwalls.com/download/spiderman-miles-lost-in-space-4k-0f-2160x3840.jpg"
            alt=""
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://www.nawpic.com/media/2020/cool-nawpic.jpeg"
            alt=""
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRly3TcgCQPI78PMzfI0V6q1j01bZb0uWTS3Q&usqp=CAU"
            alt=""
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://static.statusqueen.com/mobilewallpaper/thumbnail/The-Day-you-Left-512.jpg"
            alt=""
          />
        </ImageListItem>
      </ImageList>
      <Typography variant="h6" sx={{ color: "#555", mt: 3 }} gutterBottom>
        Categories
      </Typography>
      <Link
        href="#"
        sx={{ pr: 1, color: "#555", fontsize: "12px", textDecoration: "none" }}
      >
        Sports
      </Link>
      <Link
        href="#"
        sx={{ pr: 1, color: "#555", fontsize: "12px", textDecoration: "none" }}
      >
        Food
      </Link>
      <Link
        href="#"
        sx={{ pr: 1, color: "#555", fontsize: "12px", textDecoration: "none" }}
      >
        Movies
      </Link>
      <Link
        href="#"
        sx={{ pr: 1, color: "#555", fontsize: "12px", textDecoration: "none" }}
      >
        Games
      </Link>
      <Link
        href="#"
        sx={{ pr: 1, color: "#555", fontsize: "12px", textDecoration: "none" }}
      >
        News
      </Link>
    </Container>
  );
}

export default Rightbar;
