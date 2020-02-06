import React from "react";
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
    if (selected) return null; // to prevent user from accidently clicking the same card twice

    handleClick({ id, pairid });
  };

  const isFaceUp = () => {
    return selected || matched;
  };

  return (
    <div className="card-container">
      <img
        {...other}
        className={` ${!isFaceUp() && "hidden"} card`}
        onClick={onClick}
      />
    </div>
  );
};

export default Card;
