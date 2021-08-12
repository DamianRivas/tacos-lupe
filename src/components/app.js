import { h } from "preact";
import { useState } from "preact/hooks";
import { Router } from "preact-router";

import Header from "./header/header.component";
import Footer from "./footer/footer.component";
import NotFound from "./not-found/not-found.component";
import Modal from "./modal/modal.component";

// Code-splitting is automated for `routes` directory
import Home from "../routes/home/home.component";
import Visit from "../routes/visit/visit.component";

import ModalContext from "../contexts/modal-context/modal-context";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const modalValue = { isModalOpen, setIsModalOpen };

  return (
    <ModalContext.Provider value={modalValue}>
      <div id="app">
        <Header />
        <Router>
          <Home path="/" />
          <Visit path="/visit" />
          <NotFound default />
        </Router>
        <Footer />
        {isModalOpen ? <Modal /> : null}
      </div>
    </ModalContext.Provider>
  );
};

export default App;
