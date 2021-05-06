import React, { useState, useEffect } from "react";
import {
  Container,
  Grid,
  Snackbar,
  Button,
  IconButton,
  Paper,
  withStyles,
} from "@material-ui/core";
import axios from "axios";
import { useParams } from "react-router";
import { connect } from "react-redux";
import { addNominee, removeNominee } from "../store/actions";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";
import PlaylistAddCheckIcon from "@material-ui/icons/PlaylistAddCheck";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

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
  button: {
    width: 150,
    textTransform: "none",
    backgroundColor: "#f03a17",
    border: "2px solid #f03a17",
    color: "white",
    "&:hover": {
      backgroundColor: "transparent",
      color: "#f03a17",
      fontWeight: "bold",
    },
  },
  backBtn: {
    color: "white",
    marginBottom: 16,
  },
});

function Movie(props) {
  const { classes, nominations, addNominee, removeNominee, history } = props;
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [open, setOpen] = useState(false);
  const nominationIds = nominations.map(({ imdbID }) => imdbID);
  const nominated = nominationIds.includes(id);

  useEffect(() => {
    axios
      .get(`http://www.omdbapi.com/?i=${id}&apikey=8803b9a5`)
      .then(({ data }) => {
        setMovie(data);
        console.log(data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const handleNominate = async () => {
    await addNominee(movie);
    setOpen(nominations.length === 4 ? true : false);
  };

  const handleRemove = () => {
    removeNominee(movie);
  };

  return (
    <Container maxWidth="lg" className={classes.container}>
      <Paper className={classes.paper} elevation={24}>
        <Grid container xs={12}>
          <IconButton
            className={classes.backBtn}
            size="small"
            onClick={() => history.push(`/`)}
          >
            <ArrowBackIcon />
          </IconButton>
        </Grid>
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
            <br />
            {(nominations.length !== 5 || nominated) && (
              <Button
                className={classes.button}
                variant="contained"
                size="large"
                onClick={nominated ? handleRemove : handleNominate}
              >
                {nominated ? (
                  <>
                    <PlaylistAddCheckIcon style={{ marginRight: 2 }} />
                    Nominated
                  </>
                ) : (
                  <>
                    <PlaylistAddIcon style={{ marginRight: 2 }} />
                    Nominate
                  </>
                )}
              </Button>
            )}
          </Grid>
        </Grid>
      </Paper>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        open={open}
        message="You have nominated 5 movies!"
        autoHideDuration={3000}
        onClose={() => setOpen(false)}
      />
    </Container>
  );
}

function mapStateToProps(state) {
  return {
    nominations: state.theShoppies.nominations,
  };
}

export default connect(mapStateToProps, {
  addNominee,
  removeNominee,
})(withStyles(styles)(Movie));
