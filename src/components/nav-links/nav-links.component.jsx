import { h } from "preact";
import { useState } from "preact/hooks";
import { Link } from "preact-router/match";

import style from "./nav-links.styles.scss";

const navData = [
  {
    href: "/about",
    content: "About Us",
  },
  {
    href: "/visit",
    content: "Visit Us",
  },
  {
    href: "/contact",
    content: "Contact",
  },
  {
    href: "/order",
    content: "Order Now",
  },
];

const NavLinks = () => {
  const [isActive, setIsActive] = useState(false);

  const linkStyle = i =>
    isActive
      ? `animation: ${style.navLinkFade} 0.5s ease forwards ${i / 7 + 0.5}s`
      : "";

  return (
    <nav class={style.nav}>
      <ul class={isActive ? style.open : ""}>
        {navData.map(({ href, content, ...otherProps }, i) => (
          <li key={i} style={linkStyle(i)}>
            <Link
              key={i}
              activeClassName={style.active}
              href={href}
              onclick={() => setIsActive(false)}
              {...otherProps}
            >
              {content}
            </Link>
          </li>
        ))}
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
