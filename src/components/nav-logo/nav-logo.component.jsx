import { h } from "preact";
import { Link } from "preact-router/match";

import style from "./nav-logo.styles.scss";

const NavLogo = () => (
  <Link class={style["logo-container"]} href="/">
    <img
      class={style.chicken}
      src="assets/images/tacos_lupe_chicken_trimmed_75.png"
      alt="Chicken Logo"
    />
    <img
      src="assets/images/tacos_lupe_text_logo_75.png"
      alt="Tacos Lupe Logo"
    />
  </Link>
);

export default NavLogo;
