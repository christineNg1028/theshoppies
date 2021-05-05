import React, { useState, useEffect } from "react";
import {
  Container,
  Grid,
  Snackbar,
  Paper,
  withStyles,
} from "@material-ui/core";
import axios from "axios";
import { useParams } from "react-router";

const styles = () => ({
  paper: {
    textAlign: "left",
    padding: 16,
    backgroundColor: "black",
    color: "white",
  },
  container: {
    marginTop: 16,
  },
  flexRow: {
    display: "flex",
    justifyContent: "space-between",
  },
  rating: {
    textAlign: "right",
    fontSize: 20,
  },
  votes: {
    fontSize: 12,
    textAlign: "right",
    marginTop: -10,
  },
  info: {
    marginTop: -10,
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
  }, [id]);

  return (
    <Container maxWidth="lg" className={classes.container}>
      <Paper className={classes.paper} elevation={24}>
        <Grid container xs={12} spacing={2}>
          <Grid item xs={4}>
            <img src={movie.Poster} alt={movie.Title} />
          </Grid>
          <Grid item xs={8}>
            <div className={classes.flexRow}>
              <div>
                <h1>
                  {movie.Title} ({movie.Year})
                </h1>
                <p className={classes.info}>
                  {movie.Rated} | {movie.Runtime} | {movie.Genre} |{" "}
                  {movie.Released} ({movie.Country})
                </p>
              </div>
              <div>
                <h2 className={classes.rating}>⭐ {movie.imdbRating}/10</h2>
                <p className={classes.votes}>{movie.imdbVotes} votes</p>
              </div>
            </div>
            <p>{movie.Plot}</p>
            <br />
            <p>
              <strong>Director:</strong> {movie.Director}
            </p>
            <p>
              <strong>Writers:</strong> {movie.Writer}
            </p>
            <p>
              <strong>Stars:</strong> {movie.Actors}
            </p>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}

export default withStyles(styles)(Movie);
