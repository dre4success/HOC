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
          <Header />
          <Switch> 
            <Route exact path="/resources" component={Resources} />
          </Switch>
        </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
