import React from "react";
import { Container, Grid, Snackbar, withStyles } from "@material-ui/core";
import SearchBar from "../components/SearchBar";
import Results from "../components/Results";
import Nominations from "../components/Nominations";
import axios from "axios";

const styles = () => ({
  header: {
    width: "100%",
    textAlign: "left",
    fontSize: 40,
  },
});

class TheShoppies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      search: "",
      nominations: [],
      open: false,
    };
  }

  handleSearch = (search) => {
    axios
      .get(`http://www.omdbapi.com/?s=${search}&apikey=8803b9a5`)
      .then(({ data }) => {
        this.setState({ ...this.state, results: data.Search, search });
        console.log(this.state.results);
      })
      .catch((err) => console.log(err));
  };

  handleNominate = async (movie) => {
    await this.setState({
      ...this.state,
      nominations: [...this.state.nominations, movie],
    });
    if (this.state.nominations.length === 5)
      this.setState({ ...this.state, open: true });
  };

  handleRemove = (movie) => {
    // find index of movie in nominations
    const i = this.state.nominations.indexOf(movie);
    // slice nominations array to remove
    this.setState({
      ...this.state,
      nominations: this.state.nominations
        .slice(0, i)
        .concat(this.state.nominations.slice(i + 1)),
    });
  };

  render() {
    const { classes } = this.props;
    const { search, results, nominations, open } = this.state;
    return (
      <Container maxWidth="md">
        <Grid container spacing={2}>
          <h1 className={classes.header}>The Shoppies 🍿</h1>
          <Grid item xs={12}>
            <SearchBar handleSearch={this.handleSearch} />
          </Grid>
          {search && (
            <Grid item xs={6}>
              <Results
                search={search}
                results={results}
                handleNominate={this.handleNominate}
                nominations={nominations}
              />
            </Grid>
          )}
          {nominations && nominations.length > 0 && (
            <Grid item xs={6}>
              <Nominations
                nominations={nominations}
                handleRemove={this.handleRemove}
              />
            </Grid>
          )}
        </Grid>
        <Snackbar
          anchorOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
          open={open}
          message="You have nominated 5 movies!"
          autoHideDuration={3000}
          onClose={() => this.setState({ ...this.state, open: false })}
        />
      </Container>
    );
  }
}

export default withStyles(styles)(TheShoppies);
