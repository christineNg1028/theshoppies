import React, { useState, useEffect } from "react";
import {
  Container,
  Grid,
  Snackbar,
  Paper,
  withStyles,
} from "@material-ui/core";
import SearchBar from "../components/SearchBar";
import Results from "../components/Results";
import Nominations from "../components/Nominations";
import axios from "axios";
import { useParams } from "react-router";

const styles = () => ({
  header: {
    width: "100%",
    textAlign: "left",
    fontSize: 40,
  },
  paper: {
    textAlign: "left",
    padding: 16,
  },
  poster: {
    maxWidth: 400,
    maxHeight: 400,
  },
  container: {
    marginTop: 16,
  },
});

function Movie(props) {
  const { classes } = props;
  const { id } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    axios
      .get(`http://www.omdbapi.com/?i=${id}&apikey=8803b9a5`)
      .then(({ data }) => {
        setMovie(data);
        console.log(data);
      })
      .catch((err) => console.log(err));
  });

  return (
    <Container maxWidth="md" className={classes.container}>
      <Grid container xs={12} spacing={2}>
        <Grid item xs={4}>
          <img
            className={classes.poster}
            src={movie.Poster}
            alt={movie.Title}
          />
        </Grid>
        <Grid item xs={8}>
          <Paper className={classes.paper} elevation={24}></Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default withStyles(styles)(Movie);
