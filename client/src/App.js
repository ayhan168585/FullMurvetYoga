import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Activities from "./components/Activities";
import Yoga from "./pages/Yoga";
import Home from "./pages/Home";
import YogaList from "./pages/YogaList";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/yogas/:type">
          <YogaList />
        </Route>
        <Route path="/yoga/:id">
          <Yoga />
        </Route>
        <Route exact path="/activities">
          <Activities />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
