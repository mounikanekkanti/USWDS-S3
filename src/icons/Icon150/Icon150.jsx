/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Icon150 = ({ color = "#565C65", className }) => {
  return (
    <svg
      className={`icon-150 ${className}`}
      fill="none"
      height="17"
      viewBox="0 0 16 17"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        clipRule="evenodd"
        d="M8 5.83374L4 9.83374L4.94 10.7737L8 7.72041L11.06 10.7737L12 9.83374L8 5.83374Z"
        fill={color}
        fillRule="evenodd"
      />
    </svg>
  );
};

Icon150.propTypes = {
  color: PropTypes.string,
};
