import React, { Component } from "react";
import "../styles/Card.css";

const Card = props => {
  const {
    faceDown,
    id,
    pairid,
    handleClick,
    selected,
    matched,
    ...other
  } = props;

  const onClick = () => {
    handleClick({ id, pairid });
  };

  const isFaceUp = () => {
    if (selected) {
      return true;
    }
    if (matched) {
      return true;
    }
    return false;
  };

  return (
    <img
      {...other}
      className={`card ${!isFaceUp() && "hidden"}`}
      onClick={onClick}
    />
  );
};

export default Card;
