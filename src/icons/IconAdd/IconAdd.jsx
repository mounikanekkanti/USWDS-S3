/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const IconAdd = ({ color = "black", className }) => {
  return (
    <svg
      className={`icon-add ${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        clipRule="evenodd"
        d="M12.6667 8.66667H8.66667V12.6667H7.33334V8.66667H3.33334V7.33333H7.33334V3.33333H8.66667V7.33333H12.6667V8.66667Z"
        fill={color}
        fillRule="evenodd"
      />
    </svg>
  );
};

IconAdd.propTypes = {
  color: PropTypes.string,
};
