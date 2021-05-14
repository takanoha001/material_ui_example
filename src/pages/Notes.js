import React from "react";
import { Typography } from "@material-ui/core";

export default function Notes() {
  return (
    <div>
      <Typography
        variant="h6"
        component="h2"
        gutterBottom
        color="textSecondary"
      >
        Create a New Note{" "}
      </Typography>
    </div>
  );
}
