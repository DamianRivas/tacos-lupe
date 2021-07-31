import { h } from "preact";
import style from "./coming-soon.styles.scss";

const ComingSoon = () => (
  <section class={style["coming-soon"]}>
    <img
      src="assets/images/tacos_lupe_transparent_trimmed.png"
      width="1200"
      height="818"
    />
    <h1>Coming Soon!</h1>
    <h2>
      <a href="tel:480-964-0025">(480) 964-0025</a>
    </h2>
  </section>
);

export default ComingSoon;
