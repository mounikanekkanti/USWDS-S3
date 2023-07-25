/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Icon481 = ({ color = "#1B1B1B", className }) => {
  return (
    <svg
      className={`icon-481 ${className}`}
      fill="none"
      height="32"
      viewBox="0 0 32 32"
      width="32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        clipRule="evenodd"
        d="M20.5465 9.88L18.6665 8L10.6665 16L18.6665 24L20.5465 22.12L14.4398 16L20.5465 9.88Z"
        fill={color}
        fillRule="evenodd"
      />
    </svg>
  );
};

Icon481.propTypes = {
  color: PropTypes.string,
};
