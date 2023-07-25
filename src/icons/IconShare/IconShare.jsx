/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const IconShare = ({ color = "black", className }) => {
  return (
    <svg
      className={`icon-share ${className}`}
      fill="none"
      height="26"
      viewBox="0 0 26 26"
      width="26"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        clipRule="evenodd"
        d="M19.5 17.4203C18.6767 17.4203 17.94 17.7453 17.3767 18.2545L9.6525 13.7587C9.70667 13.5095 9.75 13.2603 9.75 13.0003C9.75 12.7403 9.70667 12.4912 9.6525 12.242L17.29 7.78949C17.875 8.33116 18.6442 8.66699 19.5 8.66699C21.2983 8.66699 22.75 7.21533 22.75 5.41699C22.75 3.61866 21.2983 2.16699 19.5 2.16699C17.7017 2.16699 16.25 3.61866 16.25 5.41699C16.25 5.67699 16.2933 5.92616 16.3475 6.17533L8.71 10.6278C8.125 10.0862 7.35583 9.75033 6.5 9.75033C4.70167 9.75033 3.25 11.202 3.25 13.0003C3.25 14.7987 4.70167 16.2503 6.5 16.2503C7.35583 16.2503 8.125 15.9145 8.71 15.3728L16.4233 19.8795C16.3692 20.107 16.3367 20.3453 16.3367 20.5837C16.3367 22.3278 17.7558 23.747 19.5 23.747C21.2442 23.747 22.6633 22.3278 22.6633 20.5837C22.6633 18.8395 21.2442 17.4203 19.5 17.4203Z"
        fill={color}
        fillRule="evenodd"
      />
    </svg>
  );
};

IconShare.propTypes = {
  color: PropTypes.string,
};
