import { h } from "preact";

import style from "./content-section.styles.scss";

const ContentSection = ({ title, body, imageSrc = null }) => {
  const backgroundImage = {
    "background-image": `url(${imageSrc})`,
  };

  return (
    <section class={style["c-split"]}>
      {imageSrc ? (
        <div class={style["img-container"]}>
          <div class={style["content-img"]} style={backgroundImage} />
        </div>
      ) : null}
      <div class={style["content-body"]}>
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    </section>
  );
};

export default ContentSection;
