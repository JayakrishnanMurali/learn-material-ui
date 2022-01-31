import { makeStyles } from "@mui/styles";
import { alpha, AppBar, Avatar, Badge, Box, InputBase } from "@mui/material";
import { Toolbar } from "@mui/material";
import { Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import EmailIcon from "@mui/icons-material/Email";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useState } from "react";
import CancelIcon from "@mui/icons-material/Cancel";

const useStyles = makeStyles((theme) => ({
  toolbar: { display: "flex", justifyContent: "space-between" },
  logoLg: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  logoSm: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
  search: {
    display: "flex",
    alignItems: "center",
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    borderRadius: theme.shape.borderRadius,
    width: "50%",
    padding: "4px",
    [theme.breakpoints.down("sm")]: {
      display: (props) => (props.open ? "flex" : "none"),
      width: "80%",
    },
  },
  input: {
    marginLeft: theme.spacing(1),
  },
  icons: {
    alignItems: "center",
    display: (props) => (props.open ? "none" : "flex"),
  },
  badge: {
    marginRight: theme.spacing(2),
  },
  searchButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  cancel: {
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
}));

function Navbar() {
  const [open, setOpen] = useState(false);

  const classes = useStyles({ open });

  return (
    <AppBar position="fixed">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" className={classes.logoLg}>
          Jk
        </Typography>
        <Typography variant="h6" className={classes.logoSm}>
          jk
        </Typography>
        <div className={classes.search}>
          <SearchIcon />
          <InputBase
            placeholder="Search..."
            className={classes.input}
            sx={{ color: "white", marginRight: "3rem" }}
          />
          <Box className={classes.cancel}>
            <CancelIcon onClick={() => setOpen(false)} />
          </Box>
        </div>
        <div className={classes.icons}>
          <Box className={classes.searchButton}>
            <SearchIcon onClick={() => setOpen(true)} />
          </Box>
          <Badge color="secondary" badgeContent={4} className={classes.badge}>
            <EmailIcon />
          </Badge>
          <Badge color="secondary" badgeContent={12} className={classes.badge}>
            <NotificationsIcon />
          </Badge>
          <Avatar
            alt="Elon"
            src="https://upload.wikimedia.org/wikipedia/commons/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg"
            sx={{ width: "30px", height: "30px" }}
          />
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
