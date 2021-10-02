import "./App.css";
import NotFound from "./components/NotFound/NotFound";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./components/Home/Home";
import Chart from "./components/Chart/Chart";
import Todos from "./components/Todos/Todos";

import SingleTodo from "./components/SIngleTodo/SingleTodo";
import Navigation from "./components/Navigation.js/Navigation";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="my-5 text-center">
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
          <Route exact path="/todos">
            <Todos />
          </Route>
          <Route path="/todos/:id">
            <SingleTodo />
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
