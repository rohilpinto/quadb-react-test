import React from "react";
import classNames from "classnames";

const Card = ({ children, ...props }) => {
  return (
    <div
      className={classNames({
        "summary-card": props.cardType === "summary-card",
        "grid-card": props.cardType === "grid-card",
      })}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
