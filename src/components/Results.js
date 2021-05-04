import React from "react";
import {
  Paper,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  ListItemSecondaryAction,
  Button,
  withStyles,
} from "@material-ui/core";

const styles = () => ({
  paper: {
    textAlign: "left",
    padding: 16,
  },
  button: {
    textTransform: "none",
    backgroundColor: "#f03a17",
    color: "white",
    "&:hover": {
      backgroundColor: "black",
    },
  },
});

function Results(props) {
  const { classes, results, search, handleNominate, nominations } = props;
  const nominationIds = nominations.map(({ imdbID }) => imdbID);

  const resultList =
    results &&
    results.map((result, key) => (
      <ListItem key={key}>
        <ListItemAvatar>
          <Avatar variant="square" src={result.Poster} alt={result.Title} />
        </ListItemAvatar>
        <Grid xs={7}>
          <ListItemText primary={result.Title} secondary={result.Year} />
        </Grid>
        <ListItemSecondaryAction>
          <Button
            className={classes.button}
            variant="contained"
            size="small"
            onClick={() => handleNominate(result)}
            disabled={
              nominationIds.includes(result.imdbID) || nominations.length === 5
            }
          >
            Nominate
          </Button>
        </ListItemSecondaryAction>
      </ListItem>
    ));

  return (
    <Paper className={classes.paper} elevation={24}>
      {results ? (
        <h4>Results for "{search}"</h4>
      ) : (
        <h4>Sorry, we couldn't find movies titled "{search}"</h4>
      )}
      <List dense>{resultList}</List>
    </Paper>
  );
}

export default withStyles(styles)(Results);
