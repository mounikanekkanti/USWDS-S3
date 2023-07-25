/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const IconCalendarToday = ({ color = "black", className }) => {
  return (
    <svg
      className={`icon-calendar-today ${className}`}
      fill="none"
      height="32"
      viewBox="0 0 32 32"
      width="32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        clipRule="evenodd"
        d="M26.6667 3.99998H25.3333V1.33331H22.6667V3.99998H9.33334V1.33331H6.66667V3.99998H5.33334C3.86667 3.99998 2.66667 5.19998 2.66667 6.66665V28C2.66667 29.4666 3.86667 30.6666 5.33334 30.6666H26.6667C28.1333 30.6666 29.3333 29.4666 29.3333 28V6.66665C29.3333 5.19998 28.1333 3.99998 26.6667 3.99998ZM26.6667 28H5.33334V10.6666H26.6667V28Z"
        fill={color}
        fillRule="evenodd"
      />
    </svg>
  );
};

IconCalendarToday.propTypes = {
  color: PropTypes.string,
};
