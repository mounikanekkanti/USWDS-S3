/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const IconTools = ({ color = "#1B1B1B", className }) => {
  return (
    <svg
      className={`icon-tools ${className}`}
      fill="none"
      height="50"
      viewBox="0 0 50 50"
      width="50"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M21.6146 22.5816L9.34026 34.8559C9.01742 35.1784 8.76131 35.5613 8.58658 35.9828C8.41184 36.4043 8.3219 36.8562 8.3219 37.3125C8.3219 37.7688 8.41184 38.2206 8.58658 38.6421C8.76131 39.0637 9.01742 39.4466 9.34026 39.7691C9.99139 40.42 10.8744 40.7857 11.7951 40.7857C12.7158 40.7857 13.5988 40.42 14.25 39.7691L26.5243 27.4913M34.0156 28.125L40.7482 34.8576C41.3992 35.5088 41.7649 36.3918 41.7649 37.3125C41.7649 38.2332 41.3992 39.1162 40.7482 39.7673C40.0971 40.4183 39.2141 40.784 38.2934 40.784C37.3727 40.784 36.4897 40.4183 35.8385 39.7673L25.059 28.9896M15.8559 14.4166L12.1701 15.6423L8.48956 9.50518L10.9444 7.05032L17.0833 10.7326L15.8559 14.4166ZM15.8559 14.4166L20.7691 19.3298"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        className="path"
        d="M21.6145 22.5816C20.1492 18.8437 20.4357 13.9392 23.4565 10.9184C26.4774 7.89755 32.0503 7.23609 35.118 9.07811L29.8402 14.3559L29.3489 19.7569L34.7499 19.2673L40.0277 13.9878C41.8714 17.0573 41.2083 22.6302 38.1874 25.6493C35.1666 28.6701 30.2638 28.9566 26.526 27.4913"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
};

IconTools.propTypes = {
  color: PropTypes.string,
};
