import { h } from "preact";
import { Router } from "preact-router";

import Header from "./header/header.component";
import Footer from "./footer/footer.component";
import NotFound from "./not-found/not-found.component";

// Code-splitting is automated for `routes` directory
import Home from "../routes/home/home.component";

// const FourOhFour = () => <div style={"margin-top:100px"}>Not Found</div>;

const App = () => (
  <div id="app">
    <Header />
    <Router>
      <Home path="/" />
      <NotFound default />
    </Router>
    <Footer />
  </div>
);

export default App;
