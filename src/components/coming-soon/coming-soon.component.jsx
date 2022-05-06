import { h } from "preact";
import style from "./coming-soon.styles.scss";

const ComingSoon = () => (
  <section class={style["coming-soon"]}>
    <img
      src="assets/images/tacos_lupe_transparent_trimmed.png"
      width="1200"
      height="818"
      alt="Tacos Lupe logo"
    />
    <h1>
      Redesign: <span class="tacos-green">Coming</span>{" "}
      <span class="lupe-red">Soon!</span>
    </h1>
    <h2>
      <a href="tel:480-969-1867">(480) 969-1867</a>
    </h2>
  </section>
);

export default ComingSoon;
