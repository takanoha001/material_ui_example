import React, { useState } from "react";

import { Button, Typography, Container } from "@material-ui/core";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import AcUnitOutlinedIcon from "@material-ui/icons/AcUnitOutlined";
import { Send, KeyboardArrowRightOutlined } from "@material-ui/icons";
import { FormControlLabel, makeStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";

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
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: "block",
  },
});

export default function Notes() {
  const classes = useStyles();
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [titleError, setTitleError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);
  const [category, setCategory] = useState("todos");

  const handleSubmit = (e) => {
    e.preventDefault();
    setTitleError(false);
    setDetailsError(false);

    if (title == "") {
      setTitleError(true);
    }
    if (details == "") {
      setDetailsError(true);
    }

    if (title && details) {
      console.log(title, details, category);
    }
  };

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

      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          onChange={(e) => setTitle(e.target.value)}
          className={classes.field}
          label="Note title"
          variant="outlined"
          color="secondary"
          fullWidth
          required
          error={titleError}
        />
        <TextField
          onChange={(e) => setDetails(e.target.value)}
          className={classes.field}
          label="Details"
          variant="outlined"
          color="secondary"
          multilinerows={4}
          fullWidth
          required
          error={detailsError}
        />

        <FormControl className={classes.field}>
          <FormLabel> Note Category</FormLabel>
          <RadioGroup
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {/* <Radio value="hello " />
          <Radio value="good bye " /> */}
            <FormControlLabel value="money" control={<Radio />} label="Money" />
            <FormControlLabel value="todos" control={<Radio />} label="Todos" />
            <FormControlLabel
              value="reminders"
              control={<Radio />}
              label="Reminders"
            />
            <FormControlLabel value="work" control={<Radio />} label="Work" />
          </RadioGroup>
        </FormControl>

        <Button
          className={classes.btn}
          type="submit"
          color="secondary"
          variant="contained"
          endIcon={<KeyboardArrowRightOutlined />}
        >
          Submit{" "}
        </Button>
      </form>
      {/*
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

     <Button type="submit">Submit</Button>
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
