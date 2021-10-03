import "./App.css";
import NotFound from "./components/NotFound/NotFound";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./components/Home/Home";
import Chart from "./components/Chart/Chart";

import Navigation from "./components/Navigation.js/Navigation";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Todos from "./components/Todos/Todos";
import TodoDetails from "./components/TodoDetails/TodoDetails";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="text-center">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/navigation">
            <Navigation />
          </Route>
          <Route exact path="/chart">
            <Chart />
          </Route>
          <Route path="/todos">
            <Todos></Todos>
          </Route>
          <Route path="/todo/:todoID">
            <TodoDetails></TodoDetails>
          </Route>

          <Route exact path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
