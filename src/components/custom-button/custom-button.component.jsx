import { h } from "preact";

import style from "./custom-button.styles.scss";

const CustomButton = ({ children, isLink, ...otherProps }) => {
  if (isLink) {
    return (
      <a class={style["custom-button"]} {...otherProps}>
        {children}
      </a>
    );
  }
  return (
    <button class={style["custom-button"]} {...otherProps}>
      {children}
    </button>
  );
};

export default CustomButton;
