import { h } from "preact";
import { forwardRef } from "preact/compat";

import style from "./custom-button.styles.scss";

const CustomButton = forwardRef(
  ({ children, isLink, xClass, ...otherProps }, ref) => {
    if (isLink) {
      return (
        <a
          class={`${style["custom-button"]} ${xClass ? xClass : ""}`}
          ref={ref}
          {...otherProps}
        >
          {children}
        </a>
      );
    }
    return (
      <button
        class={`${style["custom-button"]} ${xClass ? xClass : ""}`}
        ref={ref}
        {...otherProps}
      >
        {children}
      </button>
    );
  }
);

export default CustomButton;
