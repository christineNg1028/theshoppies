import React, { useState } from "react";
import {
  Paper,
  InputAdornment,
  IconButton,
  Button,
  TextField,
  Grid,
  FormControl,
  MenuItem,
  InputLabel,
  Select,
  withStyles,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";

const styles = (theme) => ({
  paper: {
    textAlign: "left",
    padding: 16,
  },
  formControl: {
    minWidth: 120,
  },
  button: {
    color: "black",
    "&:hover": {
      color: "#f03a17",
    },
    transition: "all linear 200ms",
  },
  clearBtn: {
    "&:hover": {
      color: "black",
    },
    transition: "all linear 200ms",
  },
});

function SearchBar(props) {
  const { classes, handleSearch, search } = props;
  const [title, setTitle] = useState(search.title);
  const [type, setType] = useState(search.type);
  const [year, setYear] = useState(search.year);

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleType = (e) => {
    setType(e.target.value);
  };

  const handleYear = (e) => {
    setYear(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(title, year, type);
  };

  return (
    <Paper className={classes.paper} elevation={24}>
      Search for a movie...
      <br />
      <br />
      <form onSubmit={handleSubmit}>
        <Grid container xs={12} spacing={2} alignItems="center">
          <Grid item xs={6}>
            <TextField
              color="secondary"
              fullWidth
              variant="outlined"
              placeholder="Title"
              onChange={handleTitle}
              value={title}
              InputProps={{
                endAdornment: title ? (
                  <InputAdornment position="end">
                    <IconButton
                      className={classes.clearBtn}
                      size="small"
                      disableRipple
                      style={{ background: "transparent" }}
                      onClick={() => setTitle("")}
                    >
                      <HighlightOffIcon />
                    </IconButton>
                  </InputAdornment>
                ) : (
                  <></>
                ),
              }}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              color="secondary"
              fullWidth
              variant="outlined"
              placeholder="Year of release"
              onChange={handleYear}
              value={year}
              InputProps={{
                endAdornment: year ? (
                  <InputAdornment position="end">
                    <IconButton
                      className={classes.clearBtn}
                      size="small"
                      disableRipple
                      style={{ background: "transparent" }}
                      onClick={() => setYear("")}
                    >
                      <HighlightOffIcon />
                    </IconButton>
                  </InputAdornment>
                ) : (
                  <></>
                ),
              }}
            />
          </Grid>
          <Grid item xs={2}>
            <FormControl
              variant="outlined"
              color="secondary"
              className={classes.formControl}
            >
              <InputLabel id="movie-type-label">Type</InputLabel>
              <Select
                labelId="movie-type-label"
                id="movie-type"
                value={type}
                onChange={handleType}
                label="Type"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={"movie"}>Movie</MenuItem>
                <MenuItem value={"series"}>Series</MenuItem>
                <MenuItem value={"episode"}>Episode</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={1}>
            <Button
              type="submit"
              style={{ background: "transparent" }}
              className={classes.button}
              disableRipple
            >
              <SearchIcon fontSize="large" />
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
}

export default withStyles(styles)(SearchBar);
