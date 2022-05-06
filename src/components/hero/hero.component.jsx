import { h } from "preact";
import { useRef, useEffect } from "preact/hooks";
import gsap from "gsap";

import CustomButton from "../custom-button/custom-button.component";

import style from "./hero.styles.scss";

const Hero = () => {
  const heroImg = useRef(null);
  const callButton = useRef(null);
  const navButton = useRef(null);

  const transparency = 0.7;
  const navLink =
    "https://www.google.com/maps/search/?api=1&query=Tacos+Lupe,+1352+E+Broadway+Rd,+Mesa,+AZ+85204";
  const backgroundImage = {
    "background-image": `linear-gradient(rgba(0,0,0,${transparency}),
      rgba(0,0,0,${transparency})),
      url(/assets/images/food/carne-asada/carne-asada-xl.jpg)`,
  };

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

  useEffect(() => {
    const buttons = [callButton.current, navButton.current];
    gsap.from(heroImg.current, {
      duration: 1,
      opacity: 0,
      scale: 0.3,
      ease: "back",
      y: -150,
    });
    gsap.from(buttons, {
      duration: 0.5,
      opacity: 0,
      scale: 0.3,
      delay: 0.5,
      y: 75,
    });
  }, []);

  return (
    <div class={style.hero}>
      <div class={style["background-image"]} style={backgroundImage} />
      <div class={style.content}>
        <h1 class={style.logo}>
          <img
            src="/assets/images/tacos_lupe_transparent_trimmed.png"
            alt="Tacos Lupe Logo"
            width="1200"
            height="818"
            ref={heroImg}
          />
        </h1>
        <div className={style["button-row"]}>
          <CustomButton isLink href="tel:480-969-1867" ref={callButton}>
            Call
          </CustomButton>
          <CustomButton role="button" onclick={mapsSelector} ref={navButton}>
            Visit
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

export default Hero;
