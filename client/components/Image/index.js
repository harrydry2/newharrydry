import React, { Component } from "react";
import "./style.sass";

const Image = props => (
  <div className="imgcontainer">
    <img
      src={`https://s3.amazonaws.com/harrydry/${props.img}.png`}
      alt={props.alt}
      className="image"
    />
  </div>
);

export default Image;
