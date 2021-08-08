import { h } from "preact";

import CustomButton from "../custom-button/custom-button.component";

import style from "./hero.styles.scss";

const transparency = 0.55;

const backgroundImage = {
  "background-image": `linear-gradient(rgba(0,0,0,${transparency}),
    rgba(0,0,0,${transparency})),
    url(/assets/images/food/carne-asada/carne-asada-xl.jpg)`,
};

const Hero = () => (
  <div class={style.hero}>
    <div class={style["background-image"]} style={{ ...backgroundImage }} />
    <div class={style.content}>
      <div class={style.logo}>
        <img
          src="/assets/images/tacos_lupe_transparent_trimmed.png"
          alt="Tacos Lupe Logo"
        />
      </div>
      <div class={style["button-row"]}>
        <a href="tel:480-964-0025">
          <CustomButton>Call</CustomButton>
        </a>
        <CustomButton>Visit</CustomButton>
      </div>
    </div>
  </div>
);

export default Hero;
