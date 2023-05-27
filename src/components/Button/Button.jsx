import React from "react";
import styles from "./Button.module.css";

function Button({ primary, secondary, classNm, children, ...props }) {
  let classes = `${classNm || ""} ${styles.btn}`;

  if (primary) classes = `${classes} ${styles.primary}`;
  if (secondary) classes = `${classes} ${styles.secondary}`;

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}

export default Button;
