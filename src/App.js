import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { Component } from "react";
import { Home } from "./Home";
import { NoMatch } from "./NoMatch";
import { VaccineNotification } from "./VaccineNotification";
// import {Layout} from './components/Layout';
// import { Form } from "react-bootstrap";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        {/* <Layout> */}
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Vaccine" component={VaccineNotification} />
            <Route component={NoMatch} />
            <Route component={NoMatch} />
          </Switch>
        </Router>
        {/* </Layout> */}
      </React.Fragment>
    );
  }
}

export default App;
