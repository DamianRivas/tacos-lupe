import { h } from "preact";
import { Router } from "preact-router";

import Header from "./header/header.component";

// Code-splitting is automated for `routes` directory
import Home from "../routes/home/home.component";

const FourOhFour = () => <div style={"margin-top:100px"}>Not Found</div>;

const App = () => (
  <div id="app">
    <Header />
    <Router>
      <Home path="/" />
      <FourOhFour default />
    </Router>
  </div>
);

export default App;
