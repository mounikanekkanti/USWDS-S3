/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const IconNavigateFarNext = ({ color = "black", className }) => {
  return (
    <svg
      className={`icon-navigate-far-next ${className}`}
      fill="none"
      height="32"
      viewBox="0 0 32 32"
      width="32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        clipRule="evenodd"
        d="M18.6667 8L26.6667 16L18.6667 24L16.7867 22.12L22.8934 16L16.7867 9.88L18.6667 8ZM8.00003 8L16 16L8.00003 24L6.12003 22.12L12.2267 16L6.12003 9.88L8.00003 8Z"
        fill={color}
        fillRule="evenodd"
      />
    </svg>
  );
};

IconNavigateFarNext.propTypes = {
  color: PropTypes.string,
};
