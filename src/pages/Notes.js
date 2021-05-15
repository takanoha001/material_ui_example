import React from "react";
import { Button, Typography, Container } from "@material-ui/core";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import AcUnitOutlinedIcon from "@material-ui/icons/AcUnitOutlined";
import { Send, KeyboardArrowRightOutlined } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  //css package
  // btn: {
  //   fontSize: 20,
  //   backgroundColor: "violet",
  //   "&:hover": {
  //     backgroundColor: "red",
  //   },
  // },
  // title: {
  //   textDecoration: "underline",
  //   marginBottom: 10,
  // },
});

export default function Notes() {
  const classes = useStyles();

  return (
    <Container>
      <Typography
        className={classes.title}
        variant="h6"
        component="h2"
        gutterBottom
        color="textSecondary"
      >
        Create a New Note{" "}
      </Typography>
      <Button
        className={classes.btn}
        onClick={() => console.log("clicked me")}
        type="submit"
        color="primary"
        variant="contained"
        endIcon={<KeyboardArrowRightOutlined />}
      >
        Submit{" "}
      </Button>

      <Button
        className={classes.btn}
        onClick={() => console.log("clicked me")}
        type="submit"
        color="secondary"
        variant="contained"
        endIcon={<KeyboardArrowRightOutlined />}
      >
        Submit{" "}
      </Button>

      {/* <Button type="submit">Submit</Button>
      <ButtonGroup color="secondary" variant="container">
        <Button>One</Button>
        <Button>two</Button>
      </ButtonGroup> 

        <Button
          onClick={() => console.log("clicked me")}
          type="submit"
          color="secondary"
          variant="contained"
          startIcon={<Send />}
          endIcon={<KeyboardArrowRightOutlined />}
        >
          Submit{" "}
        </Button>
      }
      */}
    </Container>
  );
}
