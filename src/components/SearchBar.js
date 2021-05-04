import React, { useState } from "react";
import {
  Paper,
  InputAdornment,
  Button,
  TextField,
  withStyles,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

const styles = () => ({
  paper: {
    textAlign: "left",
    padding: 16,
  },
});

function SearchBar(props) {
  const { classes, handleSearch } = props;
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(search);
  };

  return (
    <Paper className={classes.paper} elevation={24}>
      Movie Title
      <br />
      <br />
      <form onSubmit={handleSubmit}>
        <TextField
          color="secondary"
          fullWidth
          variant="outlined"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Button type="submit">
                  <SearchIcon />
                </Button>
              </InputAdornment>
            ),
          }}
          placeholder="Search for a movie..."
          onChange={handleChange}
        />
      </form>
    </Paper>
  );
}

export default withStyles(styles)(SearchBar);
