import React, { Component } from "react";
import "antd/dist/antd.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Props1 from './Props1'
import Props2 from './Props2'
import Big from './Big.js'
export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
              {/* <Big /> */}
          <main>
            <Route path="/" exact component={Big} />
            <Route path="/props" component={Props2}/>
          </main>
        </Router>
      </div>
    );
  }
}
