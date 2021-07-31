import { h } from "preact";
import { Link } from "preact-router/match";

import style from "./header.styles.scss";

const Header = () => (
  <header class={style.header}>
    <div class={style["inner-header"]}>
      <h1>Preact App</h1>
      <nav>
        <ul>
          <li>
            <Link activeClassName={style.active} href="/">
              Home
            </Link>
          </li>
          <li>
            <Link activeClassName={style.active} href="/profile">
              Me
            </Link>
          </li>
          <li>
            <Link activeClassName={style.active} href="/profile/john">
              John
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
