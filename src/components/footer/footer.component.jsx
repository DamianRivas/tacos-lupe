import { h } from "preact";

import style from "./footer.styles.scss";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer class={style.footer}>
      <div class={style["footer-content"]}>
        <div>{`Copyright © ${year} Tacos Lupe`}</div>
        <div>
          <p>
            <address>1352 E Broadway Rd, Mesa, AZ 85204</address>
          </p>
          <p>
            Tel: <a href="tel:480-964-0025">(480) 964-0025</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
