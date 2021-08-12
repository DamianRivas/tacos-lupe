import { h } from "preact";
import { useContext } from "preact/hooks";

import ModalContext from "../../contexts/modal-context/modal-context";

import style from "./modal.styles.scss";

const Modal = ({ children }) => {
  const { setIsModalOpen } = useContext(ModalContext);

  const stopClickPropogation = e => e.stopPropagation();

  return (
    <div class={style["modal-overlay"]} onclick={() => setIsModalOpen(false)}>
      <div
        class={style["modal-dialog"]}
        role="dialog"
        aria-modal="true"
        onclick={stopClickPropogation}
      >
        <button
          type="button"
          class={style["modal-close"]}
          onclick={() => setIsModalOpen(false)}
        >
          <span class="icon-hamburger-menu-close" />
        </button>
        <section class={style["modal-body"]}>{children}</section>
      </div>
    </div>
  );
};

export default Modal;
