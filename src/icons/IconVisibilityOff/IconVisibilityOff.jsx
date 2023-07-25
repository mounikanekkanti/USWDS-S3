/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const IconVisibilityOff = ({ color = "black", className }) => {
  return (
    <svg
      className={`icon-visibility-off ${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        clipRule="evenodd"
        d="M8.00001 4.66667C9.84 4.66667 11.3333 6.16 11.3333 8C11.3333 8.43333 11.2467 8.84 11.0933 9.22L13.04 11.1667C14.0467 10.3267 14.84 9.24 15.3267 8C14.1733 5.07333 11.3267 3 7.99334 3C7.06001 3 6.16667 3.16667 5.34001 3.46667L6.78001 4.90667C7.16001 4.75333 7.56667 4.66667 8.00001 4.66667ZM1.33334 2.84667L2.85334 4.36667L3.16001 4.67333C2.05334 5.53333 1.18667 6.68 0.666672 8C1.82001 10.9267 4.66667 13 8.00001 13C9.03334 13 10.02 12.8 10.92 12.44L11.2 12.72L13.1533 14.6667L14 13.82L2.18001 2L1.33334 2.84667ZM5.02001 6.53333L6.05334 7.56667C6.02001 7.70667 6.00001 7.85333 6.00001 8C6.00001 9.10667 6.89334 10 8.00001 10C8.14667 10 8.29334 9.98 8.43334 9.94667L9.46667 10.98C9.02001 11.2 8.52667 11.3333 8.00001 11.3333C6.16001 11.3333 4.66667 9.84 4.66667 8C4.66667 7.47333 4.80001 6.98 5.02001 6.53333ZM7.89334 6.01333L9.99334 8.11333L10.0067 8.00667C10.0067 6.9 9.11334 6.00667 8.00667 6.00667L7.89334 6.01333Z"
        fill={color}
        fillRule="evenodd"
      />
    </svg>
  );
};

IconVisibilityOff.propTypes = {
  color: PropTypes.string,
};
