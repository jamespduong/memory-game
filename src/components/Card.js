import React, { Component } from "react";
import "../styles/Card.css";

const Card = props => {
  console.log("props", props);
  return <img {...props} className="card" />;
};

export default Card;
