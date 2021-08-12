import { createContext } from "preact";

const ModalContext = createContext({
  isModalOpen: false,
  setIsModalOpen: () => {},
});

export default ModalContext;
