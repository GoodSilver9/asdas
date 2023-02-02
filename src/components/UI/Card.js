import React from "react";

import "./Card.css";

const Card = ({ className, onClick, children }) => {
  const classes = "card " + className;

  return (
    <div className={classes} onClick={onClick}>
      {children}
    </div>
  );
};

export default Card;
