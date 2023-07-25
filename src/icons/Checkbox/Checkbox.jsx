/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Checkbox = ({ color = "#F0F0F0", className }) => {
  return (
    <svg
      className={`checkbox ${className}`}
      fill="none"
      height="19"
      viewBox="0 0 18 19"
      width="18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M1.5 1.25H2.25H16.5C16.6989 1.25 16.8897 1.32902 17.0303 1.46967L17.5601 0.939874L17.0303 1.46967C17.171 1.61032 17.25 1.80109 17.25 2V17C17.25 17.1989 17.171 17.3897 17.0303 17.5303L17.5607 18.0607L17.0303 17.5303C16.8897 17.671 16.6989 17.75 16.5 17.75H1.5C1.30109 17.75 1.11032 17.671 0.969671 17.5303L0.44147 18.0585L0.969669 17.5303C0.829018 17.3897 0.75 17.1989 0.75 17V2C0.75 1.80109 0.829018 1.61032 0.96967 1.46967C1.11032 1.32902 1.30109 1.25 1.5 1.25Z"
        stroke={color}
        strokeWidth="1.5"
      />
    </svg>
  );
};

Checkbox.propTypes = {
  color: PropTypes.string,
};
