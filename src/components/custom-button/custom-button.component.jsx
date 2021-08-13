import { h } from "preact";

import style from "./custom-button.styles.scss";

const CustomButton = ({ children, isLink, xClass, ...otherProps }) => {
  if (isLink) {
    return (
      <a class={`${style["custom-button"]} ${xClass}`} {...otherProps}>
        {children}
      </a>
    );
  }
  return (
    <button class={`${style["custom-button"]} ${xClass}`} {...otherProps}>
      {children}
    </button>
  );
};

export default CustomButton;
