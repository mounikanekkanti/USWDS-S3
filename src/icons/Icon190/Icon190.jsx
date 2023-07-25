/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Icon190 = ({ color = "#565C65", className }) => {
  return (
    <svg
      className={`icon-190 ${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        clipRule="evenodd"
        d="M12.6667 4.27301L11.7267 3.33301L8.00001 7.05967L4.27334 3.33301L3.33334 4.27301L7.06001 7.99967L3.33334 11.7263L4.27334 12.6663L8.00001 8.93967L11.7267 12.6663L12.6667 11.7263L8.94001 7.99967L12.6667 4.27301Z"
        fill={color}
        fillRule="evenodd"
      />
    </svg>
  );
};

Icon190.propTypes = {
  color: PropTypes.string,
};
