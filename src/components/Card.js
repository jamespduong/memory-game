import React, { Component } from "react";

const Card = props => {
  console.log("props", props);
  return <img {...props} style={{ width: "50px", height: "50px" }} />;
};

export default Card;
