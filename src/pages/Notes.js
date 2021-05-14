import React from "react";
import { Button, Typography, Container } from "@material-ui/core";
import ButtonGroup from "@material-ui/core/ButtonGroup";

export default function Notes() {
  return (
    <Container>
      <Typography
        variant="h6"
        component="h2"
        gutterBottom
        color="textSecondary"
      >
        Create a New Note{" "}
      </Typography>

      {/* <Button type="submit">Submit</Button>
      <ButtonGroup color="secondary" variant="container">
        <Button>One</Button>
        <Button>two</Button>
      </ButtonGroup> */}

      <Button
        onClick={() => console.log("clicked me")}
        type="submit"
        color="secondary"
        variant="contained"
      >
        Submit{" "}
      </Button>
    </Container>
  );
}
