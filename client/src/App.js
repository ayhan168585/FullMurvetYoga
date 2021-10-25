import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Yoga from "./pages/Yoga";
import Home from "./pages/Home";
import YogaList from "./pages/YogaList";
import Cart from "./pages/Cart";
import Success from "./pages/Success";
import Login from "./pages/Login";
import { Redirect } from "react-router";
import { useSelector } from "react-redux";
import Activity from "./pages/Activity";
import ActivityList from "./pages/ActivityList";
import Register from "./pages/Register";

const App = () => {
  const user = useSelector((state) => state.user.currentUser);
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
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/success">
          <Success />
        </Route>

        <Route path="/activities/:type">
          <ActivityList />
        </Route>
        <Route path="/activity/:id">
          <Activity />
        </Route>
        <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
        <Route path="/register">
        {user ? <Redirect to="/"/>:<Register/>}
          <Register />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
