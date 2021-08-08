import { h } from "preact";

import NavLogo from "../nav-logo/nav-logo.component";
import NavLinks from "../nav-links/nav-links.component";

import style from "./header.styles.scss";

const Header = () => {
  return (
    <header class={style.header}>
      <div class={style["inner-header"]}>
        <NavLogo />
        <NavLinks />
      </div>
    </header>
  );
};

export default Header;
