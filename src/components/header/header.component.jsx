import { h } from "preact";
import { Link } from "preact-router/match";

import NavLogo from "../nav-logo/nav-logo.component";

import style from "./header.styles.scss";

const Header = () => (
  <header class={style.header}>
    <div class={style["inner-header"]}>
      <NavLogo />
      <nav>
        <ul>
          <li>
            <Link activeClassName={style.active} href="/">
              About Us
            </Link>
          </li>
          <li>
            <Link activeClassName={style.active} href="/profile">
              Visit Us
            </Link>
          </li>
          <li>
            <Link activeClassName={style.active} href="/profile">
              Contact
            </Link>
          </li>
          <li>
            <Link activeClassName={style.active} href="/profile/john">
              Order Now
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
