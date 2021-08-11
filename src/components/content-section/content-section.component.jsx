import { h } from "preact";

import style from "./content-section.styles.scss";

const ContentSection = ({ title, body, imageSrc = null, key }) => {
  const backgroundImage = {
    "background-image": `url(${imageSrc})`,
  };

  return (
    <section key={key} class={style["c-split"]}>
      {imageSrc ? (
        <div class={style["img-container"]}>
          <div class={style["content-img"]} style={backgroundImage} />
        </div>
      ) : null}
      <div class={style["content-body"]}>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
    </section>
  );
};

export default ContentSection;
