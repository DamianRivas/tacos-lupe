import { h } from "preact";

import style from "./content-section.styles.scss";

const ContentSection = ({ title, body, imageSrc = null, webp = null, key }) => (
  <section key={key} class={style["c-split"]}>
    {imageSrc ? (
      <div class={style["img-container"]}>
        <picture>
          <source sizes="" srcset={webp} type="image/webp" />
          <img
            src={imageSrc}
            alt="Image of food served at Tacos Lupe"
            width="160"
            height="90"
          />
        </picture>
      </div>
    ) : null}
    <div class={style["content-body"]}>
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  </section>
);

export default ContentSection;
