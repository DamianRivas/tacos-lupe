import { h } from "preact";
import style from "./coming-soon.styles.scss";

// import Logo from "/assets/images/tacos_lupe_transparent_trimmed.svg";

const ComingSoon = () => (
  <section class={style["coming-soon"]}>
    <img src="assets/images/tacos_lupe_transparent_trimmed.png" />
    {/* <Logo /> */}
    <h1>Coming Soon!</h1>
    <h2>
      <a href="tel:480-964-0025">(480) 964-0025</a>
    </h2>
  </section>
);

export default ComingSoon;
