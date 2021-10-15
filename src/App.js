import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Register from "./pages/Register";
import NextRegister from "./pages/NextRegister";
import Confirmation from "./pages/Confirmation";
import Success from "./pages/Success";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Register />
        </Route>
        <Route exact path="/register/next">
          <NextRegister />
        </Route>
        <Route exact path="/register/confirmation">
          <Confirmation />
        </Route>
        <Route exact path="/register/success">
          <Success />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
