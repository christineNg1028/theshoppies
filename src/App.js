import TheShoppies from "./pages/TheShoppies";
import Movie from "./pages/Movie";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => {
            return <TheShoppies {...props} />;
          }}
        />
        <Route
          exact
          path="/:id"
          render={(props) => {
            return <Movie {...props} />;
          }}
        />
      </Switch>
    </Router>
  );
}

export default App;
