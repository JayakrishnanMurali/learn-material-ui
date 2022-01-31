import { Container, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import ListIcon from "@mui/icons-material/List";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";

const useStyles = makeStyles((theme) => ({
  item: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(4),
    [theme.breakpoints.up("sm")]: {
      marginBottom: theme.spacing(6),
      cursor: "pointer",
    },
  },
  text: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  icon: {
    marginRight: theme.spacing(1),
  },
  container: {
    color: "white",
    position: "sticky",
    top: 0,
    paddingTop: theme.spacing(10),
    backgroundColor: theme.palette.primary.main,
    height: "100vh",
    [theme.breakpoints.up("sm")]: {
      backgroundColor: "white",
      color: "#555",
      border: "1px solid #ece7e7",
    },
  },
}));

function Leftbar() {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <div className={classes.item}>
        <HomeIcon className={classes.icon} fontSize="medium" />
        <Typography fontWeight={500} className={classes.text}>
          Homepage
        </Typography>
      </div>
      <div className={classes.item}>
        <PersonIcon className={classes.icon} fontSize="medium" />
        <Typography fontWeight={500} className={classes.text}>
          Friends
        </Typography>
      </div>
      <div className={classes.item}>
        <ListIcon className={classes.icon} fontSize="medium" />
        <Typography fontWeight={500} className={classes.text}>
          Lists
        </Typography>
      </div>
      <div className={classes.item}>
        <SettingsIcon className={classes.icon} fontSize="medium" />
        <Typography fontWeight={500} className={classes.text}>
          Settings
        </Typography>
      </div>
      <div className={classes.item}>
        <LogoutIcon className={classes.icon} fontSize="medium" />
        <Typography fontWeight={500} className={classes.text}>
          Logout
        </Typography>
      </div>
    </Container>
  );
}

export default Leftbar;
