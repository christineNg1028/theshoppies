import {
  FETCH_SEARCH_RESULTS,
  ADD_NOMINEE,
  REMOVE_NOMINEE,
} from "../actions/types";
import { combineReducers } from "redux";

const initialState = {
  title: "",
  year: "",
  type: "",
  results: [],
  nominations: [],
};

function theShoppiesReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_SEARCH_RESULTS:
      const title = action.payload.title;
      const year = action.payload.year;
      const type = action.payload.type;
      const results = action.payload.results;
      return { ...state, title, year, type, results };
    case ADD_NOMINEE:
      return { ...state, nominations: [...state.nominations, action.movie] };
    case REMOVE_NOMINEE:
      const i = state.nominations.indexOf(action.movie);
      return {
        ...state,
        nominations: state.nominations
          .slice(0, i)
          .concat(state.nominations.slice(i + 1)),
      };
    default:
      return state;
  }
}

export default combineReducers({
  theShoppies: theShoppiesReducer,
});
