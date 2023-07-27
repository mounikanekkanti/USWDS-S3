/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Icon38 = ({ color = "var(--colors-primary-primary)", className }) => {
  return (
    <svg
      className={`icon-38 ${className}`}
      fill="none"
      height="36"
      viewBox="0 0 36 36"
      width="36"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        clipRule="evenodd"
        d="M24.885 12.885L18 19.755L11.115 12.885L9 15L18 24L27 15L24.885 12.885Z"
        fill={color}
        fillRule="evenodd"
      />
    </svg>
  );
};

Icon38.propTypes = {
  color: PropTypes.string,
};
