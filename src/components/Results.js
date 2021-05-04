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
  CircularProgress,
} from "@material-ui/core";
import { useHistory } from "react-router";

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
  const {
    classes,
    results,
    search,
    handleNominate,
    nominations,
    loading,
  } = props;
  const history = useHistory();

  // store fields with values
  const enteredFields = [];
  Object.values(search).forEach((field) => {
    if (field) enteredFields.push(field);
  });

  // construct search text from fields with values
  let searchText = "";
  searchText = enteredFields.map((field, i) => {
    return enteredFields[i + 1]
      ? searchText + field + ", "
      : searchText + field;
  });

  const nominationIds = nominations.map(({ imdbID }) => imdbID);

  const resultList =
    results &&
    results.map((result, key) => (
      <ListItem key={key} onClick={() => history.push(`/${result.imdbID}`)}>
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
      {loading ? (
        <Grid container xs={12} justify="center">
          <CircularProgress color="secondary" size={40} />
        </Grid>
      ) : results ? (
        <>
          <h4>Results for "{searchText}"</h4>
          <List dense>{resultList}</List>
        </>
      ) : (
        <h4>Sorry, we couldn't find anything for "{searchText}".</h4>
      )}
    </Paper>
  );
}

export default withStyles(styles)(Results);
