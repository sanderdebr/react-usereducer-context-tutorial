import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { useUsersDispatch } from "../context/users/context";

const useStyles = makeStyles({
  media: {
    height: 140,
  },
});

export default function User({ user }) {
  const classes = useStyles();
  const dispatch = useUsersDispatch();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {user.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <strong>ID: </strong> {user.id}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <strong>Username: </strong> {user.username}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <strong>Email: </strong> {user.email}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          onClick={() => dispatch({ type: "DELETE_USER", payload: user.id })}
          size="small"
          variant="contained"
          color="secondary"
        >
          Delete
        </Button>
        <Button size="small" variant="contained" color="primary">
          Edit
        </Button>
      </CardActions>
    </Card>
  );
}
