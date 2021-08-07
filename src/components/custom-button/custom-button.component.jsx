import { h } from "preact";

import style from "./custom-button.styles.scss";

const CustomButton = ({ children, ...otherProps }) => (
  <button class={style["custom-button"]} {...otherProps}>
    {children}
  </button>
);

export default CustomButton;
