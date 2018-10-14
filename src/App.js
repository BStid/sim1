import React, { Component } from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import routes from "./routes";
import Header from "./components/Header/Header";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          {routes}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
