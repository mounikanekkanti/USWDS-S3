/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Icon144 = ({ color = "white", className }) => {
  return (
    <svg
      className={`icon-144 ${className}`}
      fill="none"
      height="50"
      viewBox="0 0 50 50"
      width="50"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M25 44.6964C24.981 44.6744 24.9615 44.6518 24.9416 44.6287C24.547 44.1707 23.9821 43.5029 23.3037 42.667C21.9462 40.9944 20.1374 38.6525 18.3301 35.9738C16.5213 33.2929 14.7233 30.2884 13.3798 27.2894C12.0318 24.2806 11.1667 21.3326 11.1667 18.75C11.1667 11.1017 17.3517 4.91667 25 4.91667C32.6483 4.91667 38.8333 11.1017 38.8333 18.75C38.8333 21.3326 37.9682 24.2806 36.6202 27.2894C35.2767 30.2884 33.4787 33.2929 31.6699 35.9738C29.8626 38.6525 28.0538 40.9944 26.6963 42.667C26.0179 43.5029 25.453 44.1707 25.0584 44.6287C25.0385 44.6518 25.019 44.6744 25 44.6964ZM19.0417 18.75C19.0417 22.0392 21.7108 24.7083 25 24.7083C28.2892 24.7083 30.9583 22.0392 30.9583 18.75C30.9583 15.4608 28.2892 12.7917 25 12.7917C21.7108 12.7917 19.0417 15.4608 19.0417 18.75Z"
        stroke={color}
        strokeWidth="1.5"
      />
    </svg>
  );
};

Icon144.propTypes = {
  color: PropTypes.string,
};
