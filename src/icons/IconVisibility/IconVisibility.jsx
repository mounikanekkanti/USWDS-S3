/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const IconVisibility = ({ color = "black", className }) => {
  return (
    <svg
      className={`icon-visibility ${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        clipRule="evenodd"
        d="M8 3C4.66667 3 1.82001 5.07333 0.666672 8C1.82001 10.9267 4.66667 13 8 13C11.3333 13 14.18 10.9267 15.3333 8C14.18 5.07333 11.3333 3 8 3ZM8 11.3333C6.16 11.3333 4.66667 9.84 4.66667 8C4.66667 6.16 6.16 4.66667 8 4.66667C9.84 4.66667 11.3333 6.16 11.3333 8C11.3333 9.84 9.84 11.3333 8 11.3333ZM8 6C6.89334 6 6 6.89333 6 8C6 9.10667 6.89334 10 8 10C9.10667 10 10 9.10667 10 8C10 6.89333 9.10667 6 8 6Z"
        fill={color}
        fillRule="evenodd"
      />
    </svg>
  );
};

IconVisibility.propTypes = {
  color: PropTypes.string,
};
