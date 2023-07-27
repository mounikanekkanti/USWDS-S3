/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Vector = ({ color = "#3D4551", className }) => {
  return (
    <svg
      className={`vector ${className}`}
      fill="none"
      height="40"
      viewBox="0 0 415 40"
      width="415"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path className="path" d="M0.5 0.5H414.5V39.5H0.5V0.5Z" fill="white" stroke={color} />
    </svg>
  );
};

Vector.propTypes = {
  color: PropTypes.string,
};
