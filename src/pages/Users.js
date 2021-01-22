import {
  Button,
  Divider,
  Grid,
  Paper,
  Typography,
  makeStyles,
} from "@material-ui/core";

import Brightness4Icon from "@material-ui/icons/Brightness4";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import React from "react";
import UserList from "../components/UserList";
import { getUsers } from "../context/users/actions";
import { useThemeDispatch } from "../context/theme/context";
import { useThemeState } from "../context/theme";
import { useUsersDispatch } from "../context/users/context";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(4),
    margin: "auto",
  },
  img: {
    width: "100%",
  },
  divider: {
    marginBottom: theme.spacing(2),
  },
}));

export default function Users() {
  const classes = useStyles();

  const { theme } = useThemeState();

  const dispatchTheme = useThemeDispatch();
  const dispatchUsers = useUsersDispatch();

  const _toggleTheme = () => dispatchTheme({ type: "TOGGLE_THEME" });
  const _getUsers = () => getUsers(dispatchUsers);

  return (
    <Paper className={classes.paper}>
      <Grid container justify="space-between" alignItems="flex-start">
        <Grid item>
          <Typography gutterBottom variant="h4">
            Users
          </Typography>
        </Grid>
        <Grid item>
          <Grid container spacing={4} alignItems="center">
            <Grid item>
              <Button onClick={_getUsers} variant="contained" color="primary">
                Load users
              </Button>
            </Grid>
            <Grid item onClick={_toggleTheme}>
              {theme === "light" ? <Brightness7Icon /> : <Brightness4Icon />}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Divider className={classes.divider} />
      <UserList />
    </Paper>
  );
}
