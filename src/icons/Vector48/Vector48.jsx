/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Vector48 = ({ color = "#B50909", className }) => {
  return (
    <svg
      className={`vector-48 ${className}`}
      fill="none"
      height="40"
      viewBox="0 0 319 40"
      width="319"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path className="path" d="M2 38V2H317V38H2Z" fill="white" stroke={color} strokeWidth="4" />
    </svg>
  );
};

Vector48.propTypes = {
  color: PropTypes.string,
};
