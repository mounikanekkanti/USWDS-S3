/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const IconArrowBack = ({ color = "black", className }) => {
  return (
    <svg
      className={`icon-arrow-back ${className}`}
      fill="none"
      height="50"
      viewBox="0 0 50 50"
      width="50"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        clipRule="evenodd"
        d="M41.6666 22.9166H16.3125L27.9583 11.2708L25 8.33325L8.33331 24.9999L25 41.6666L27.9375 38.7291L16.3125 27.0833H41.6666V22.9166Z"
        fill={color}
        fillRule="evenodd"
      />
    </svg>
  );
};

IconArrowBack.propTypes = {
  color: PropTypes.string,
};
