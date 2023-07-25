/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Vector38 = ({ color = "#1B1B1B", className }) => {
  return (
    <svg
      className={`vector-38 ${className}`}
      fill="none"
      height="40"
      viewBox="0 0 268 40"
      width="268"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path className="path" d="M0.5 39.5V0.5H267.5V39.5H0.5Z" fill="white" stroke={color} />
    </svg>
  );
};

Vector38.propTypes = {
  color: PropTypes.string,
};
