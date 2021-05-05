import axios from "axios";

import * as types from "./types";

export function fetchSearchResults(results) {
  return {
    type: types.FETCH_SEARCH_RESULTS,
    results,
  };
}

export function fetchSearchResultsAsync(title, year, type) {
  return async function (dispatch, getState) {
    await axios
      .get(
        `http://www.omdbapi.com/?s=${title}&y=${year}&type=${type}&apikey=8803b9a5`
      )
      .then(({ data }) => {
        const results = data.Search;
        dispatch(fetchSearchResults(results));
      })
      .catch((err) => console.log(err));
  };
}

export function addNominee(movie) {
  return {
    type: types.ADD_NOMINEE,
    movie,
  };
}

export function removeNominee(movie) {
  return {
    type: types.REMOVE_NOMINEE,
    movie,
  };
}
