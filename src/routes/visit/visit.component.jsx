import { h } from "preact";

import style from "./visit.styles.scss";

const Visit = () => (
  <main class={style["visit-main"]}>
    <section class={style["visit-container"]}>
      <div class={style["visit-text"]}>
        <h1>Visit Us</h1>
        <p>
          Stop by Tacos Lupe in Mesa, AZ today for the best tacos in Maricopa
          County. You can also reach us by phone to learn more about our menu
          and to ask any questions you may have. However you decide to reach out
          to your local taqueria, we can't wait to hear from you!
        </p>
      </div>
      <div class={style["map-container"]}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3330.574739595692!2d-111.8036610839906!3d33.40825725883635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872ba92f881fa9f1%3A0x7bed35b6f7951f82!2sTacos%20Lupe!5e0!3m2!1sen!2sus!4v1628545100279!5m2!1sen!2sus"
          width="100%"
          height="450"
          style="border:0;aspect-ratio:16/9;"
          allowfullscreen=""
          loading="lazy"
        />
      </div>
    </section>
  </main>
);

export default Visit;
