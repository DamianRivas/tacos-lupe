import { h } from "preact";
import { useState, useContext } from "preact/hooks";
import { Link } from "preact-router/match";

import ModalContext from "../../contexts/modal-context/modal-context";

import style from "./nav-links.styles.scss";

const navData = [
  {
    href: "/",
    content: "Home",
  },
  // {
  //   href: "/about",
  //   content: "About",
  // },
  {
    href: "/visit",
    content: "Visit",
  },
  // {
  //   href: "/contact",
  //   content: "Contact",
  // },
  // {
  //   href: "/order",
  //   content: "Order Now",
  // },
];

const NavLinks = () => {
  const [isActive, setIsActive] = useState(false);
  const { isModalOpen, setIsModalOpen } = useContext(ModalContext);

  const linkStyle = i =>
    isActive
      ? `animation: ${style.navLinkFade} 0.5s ease forwards ${i / 7 + 0.5}s`
      : "";

  const handleOrderClick = () => {
    setIsActive(false);
    setIsModalOpen(!isModalOpen);
  };

  return (
    <nav class={style.nav}>
      <ul class={isActive ? style.open : ""}>
        {navData.map(({ href, content, ...otherProps }, i) => (
          <li key={content + i} style={linkStyle(i)}>
            <Link
              aria-label={content}
              key={`${content}-link-${i}`}
              activeClassName={style.active}
              href={href}
              onclick={() => setIsActive(false)}
              {...otherProps}
            >
              {content}
            </Link>
          </li>
        ))}
        <li style={linkStyle(navData.length)}>
          <div
            role="button"
            class={style["order-btn"]}
            onclick={handleOrderClick}
            tabindex="0"
          >
            Order Now
          </div>
        </li>
      </ul>
      <div
        class={style["burger-container"]}
        onclick={() => setIsActive(!isActive)}
      >
        <div class={`${style.burger} ${isActive ? style.isX : ""}`}>
          <div class={style.line1} />
          <div class={style.line2} />
          <div class={style.line3} />
        </div>
      </div>
    </nav>
  );
};

export default NavLinks;
