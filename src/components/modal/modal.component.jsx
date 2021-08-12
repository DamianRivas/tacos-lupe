import { h } from "preact";
import { useContext } from "preact/hooks";

import CustomButton from "../custom-button/custom-button.component";

import ModalContext from "../../contexts/modal-context/modal-context";

import style from "./modal.styles.scss";
import buttonStyle from "../custom-button/custom-button.styles";

const Modal = ({ children }) => {
  const { setIsModalOpen } = useContext(ModalContext);

  const stopClickPropogation = e => e.stopPropagation();

  const deliveryProviders = [
    {
      name: "Postmates",
      imgSrc: "/assets/images/delivery/postmates.svg",
      href: "https://postmates.com/store/tacos-lupe/r4J0oSReQlyOCqJA05SiGQ",
    },
    {
      name: "Grubhub",
      imgSrc: "/assets/images/delivery/grubhub-1.svg",
      href: "https://www.grubhub.com/restaurant/tacos-lupe-1352-e-broadway-rd-mesa/2215996",
    },
    {
      name: "Uber Eats",
      imgSrc: "assets/images/delivery/uber-eats.svg",
      href: "https://postmates.com/store/tacos-lupe/r4J0oSReQlyOCqJA05SiGQ",
    },
    {
      name: "Doordash",
      imgSrc: "/assets/images/delivery/doordash-1.svg",
      href: "https://www.doordash.com/store/tacos-lupe-mesa-1015267/",
    },
  ];

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
        <section class={style["modal-body"]}>
          <h2>You're leaving TacosLupe.com</h2>
          <div class={style["modal-btn-grp"]}>
            {deliveryProviders.map(({ name, href, imgSrc }) => (
              <CustomButton
                key={name}
                xClass={buttonStyle["white-green-outline"]}
                isLink={true}
                href={href}
                style={{ "margin-bottom": "1rem" }}
              >
                <img class={style["delivery-icon"]} src={imgSrc} />
              </CustomButton>
            ))}
          </div>
          {children}
        </section>
      </div>
    </div>
  );
};

export default Modal;
