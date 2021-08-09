import { h } from "preact";

import style from "./not-found.styles.scss";

const NotFound = () => {
  return (
    <div class={style["error-image-overlay"]}>
      <div class={style["error-image-container"]} />
      <h2 class={style["error-image-text"]}>404, Not Found</h2>
    </div>
  );
};

export default NotFound;
