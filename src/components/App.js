import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./header";
import Resources from './resources';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" component={Header} />
            <Route path="/resources" component={Resources} />
          </Switch>
        </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
