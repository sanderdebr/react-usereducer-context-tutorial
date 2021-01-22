import { Grid } from "@material-ui/core";
import React from "react";
import User from "./User";
import { useUsersState } from "../context/users";

export default function UserList() {
  const { users, loading, error } = useUsersState();

  if (loading) {
    return "Loading...";
  }

  if (error) {
    return "Error...";
  }

  return (
    <Grid container spacing={2}>
      {users.length
        ? users.map((user, i) => (
            <Grid key={i} item xs={12} sm={6}>
              <User user={user} />
            </Grid>
          ))
        : "Click load users to load some users"}
    </Grid>
  );
}
