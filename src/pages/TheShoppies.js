import React from "react";
import { Container, Grid, Snackbar, withStyles } from "@material-ui/core";
import SearchBar from "../components/SearchBar";
import Results from "../components/Results";
import Nominations from "../components/Nominations";
import axios from "axios";
import { connect } from "react-redux";
import {
  fetchSearchResultsAsync,
  addNominee,
  removeNominee,
} from "../store/actions";

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
      results: props.results,
      title: props.title,
      year: props.year,
      type: props.type,
      nominations: props.nominations,
      open: false,
      loading: false,
    };
  }

  handleSearch = async (title, year, type) => {
    this.setState({ ...this.state, loading: true });
    await this.props.fetchSearchResultsAsync(title, year, type);
    this.setState({
      ...this.state,
      results: this.props.results,
      title,
      year,
      type,
      loading: false,
    });
  };

  handleNominate = async (movie) => {
    await this.props.addNominee(movie);
    this.setState({
      ...this.state,
      nominations: this.props.nominations,
      open: this.props.nominations.length === 5 ? true : false,
    });
  };

  handleRemove = async (movie) => {
    await this.props.removeNominee(movie);
    this.setState({
      ...this.state,
      nominations: this.props.nominations,
    });
  };

  render() {
    const { classes } = this.props;
    const {
      title,
      year,
      type,
      results,
      nominations,
      open,
      loading,
    } = this.state;
    const search = { title, year, type };

    return (
      <Container maxWidth="md">
        <Grid container spacing={2}>
          <h1 className={classes.header}>The Shoppies 🍿</h1>
          <Grid item xs={12}>
            <SearchBar handleSearch={this.handleSearch} search={search} />
          </Grid>
          {(title || year || type) && (
            <Grid item xs={6}>
              <Results
                search={search}
                results={results}
                loading={loading}
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

function mapStateToProps(state) {
  return {
    title: state.theShoppies.title,
    year: state.theShoppies.year,
    type: state.theShoppies.type,
    results: state.theShoppies.results,
    nominations: state.theShoppies.nominations,
  };
}

export default connect(mapStateToProps, {
  fetchSearchResultsAsync,
  addNominee,
  removeNominee,
})(withStyles(styles)(TheShoppies));
