/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const IconsPlay4 = ({ color = "black", className }) => {
  return (
    <svg
      className={`icons-play-4 ${className}`}
      fill="none"
      height="26"
      viewBox="0 0 26 26"
      width="26"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        clipRule="evenodd"
        d="M4.33748 3.25208C3.34013 2.75341 2.16666 3.47865 2.16666 4.59372V21.4063C2.16666 22.5214 3.34013 23.2466 4.33748 22.7479L21.15 14.3416C22.2556 13.7889 22.2556 12.2112 21.15 11.6584L4.33748 3.25208Z"
        fill={color}
        fillRule="evenodd"
      />
    </svg>
  );
};

IconsPlay4.propTypes = {
  color: PropTypes.string,
};
