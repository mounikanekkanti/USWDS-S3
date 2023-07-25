/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Icon311 = ({ color = "#1B1B1B", className }) => {
  return (
    <svg
      className={`icon-311 ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path className="path" clipRule="evenodd" d="M19 13H5V11H19V13Z" fill={color} fillRule="evenodd" />
    </svg>
  );
};

Icon311.propTypes = {
  color: PropTypes.string,
};
