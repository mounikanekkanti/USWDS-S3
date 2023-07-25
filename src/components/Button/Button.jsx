/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Button = ({ type, state, className, text = "Button" }) => {
  return (
    <div className={`button ${type} state-1-${state} ${className}`}>
      <div className="text-wrapper-11">{text}</div>
    </div>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf([
    "accent-cool",
    "success",
    "secondary",
    "outline",
    "primary",
    "outline-inverse",
    "accent-warm",
    "base",
    "inverse",
    "error",
    "disabled",
  ]),
  state: PropTypes.oneOf(["disabled", "hover", "active", "default"]),
  text: PropTypes.string,
};
