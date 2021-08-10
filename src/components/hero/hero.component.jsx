import { h } from "preact";

import CustomButton from "../custom-button/custom-button.component";

import style from "./hero.styles.scss";

const transparency = 0.55;

const backgroundImage = {
  "background-image": `linear-gradient(rgba(0,0,0,${transparency}),
    rgba(0,0,0,${transparency})),
    url(/assets/images/food/carne-asada/carne-asada-xl.jpg)`,
};

const Hero = () => {
  const navLink = "https://g.page/tacos-lupe?share";

  const mapsSelector = () => {
    if (
      /* if we're on iOS, open in Apple Maps */
      navigator.platform.indexOf("iPhone") != -1 ||
      navigator.platform.indexOf("iPad") != -1 ||
      navigator.platform.indexOf("iPod") != -1
    ) {
      // template
      // window.open("maps://maps.google.com/maps?daddr=<lat>,<long>&amp;ll=");
      window.open(
        // "maps://maps.google.com/maps?daddr=Tacos+Lupe+Mesa+AZ&amp;ll="
        "maps://maps.google.com/maps?q=Tacos+Lupe+Mesa+AZ&sll=33.408364731900114,-111.80144021586207amp;ll="
      );
    } else {
      window.open(navLink);
    }
  };

  return (
    <div class={style.hero}>
      <div class={style["background-image"]} style={backgroundImage} />
      <div class={style.content}>
        <h1 class={style.logo}>
          <img
            src="/assets/images/tacos_lupe_transparent_trimmed.png"
            alt="Tacos Lupe Logo"
          />
        </h1>
        <div class={style["button-row"]}>
          <div>
            <a href="tel:480-964-0025">
              <CustomButton>Call</CustomButton>
            </a>
          </div>
          <div>
            <CustomButton onclick={mapsSelector}>Visit</CustomButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
