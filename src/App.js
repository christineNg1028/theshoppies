import TheShoppies from "./pages/TheShoppies";
import Movie from "./pages/Movie";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/theshoppies/"
          render={(props) => {
            return <TheShoppies {...props} />;
          }}
        />
        <Route
          exact
          path="/theshoppies/:id"
          render={(props) => {
            return <Movie {...props} />;
          }}
        />
      </Switch>
    </Router>
  );
}

export default App;
