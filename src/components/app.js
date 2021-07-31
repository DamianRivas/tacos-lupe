import { h } from "preact";
import { Router } from "preact-router";

// import Header from "./header/header.component";

// Code-splitting is automated for `routes` directory
import Home from "../routes/home/home.component";
import Profile from "../routes/profile";

const App = () => (
  <div id="app">
    {/* {process.env.NODE_ENV === "development" ? <Header /> : null} */}
    <Router>
      <Home path="/" />
      <Profile path="/profile/" user="me" />
      <Profile path="/profile/:user" />
    </Router>
  </div>
);

export default App;
