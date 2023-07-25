/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { Icon21 } from "../../icons/Icon21";
import "./style.css";

export const LoadMore = ({ className }) => {
  return (
    <div className={`load-more ${className}`}>
      <div className="text-wrapper-16">Load More</div>
      <Icon21 className="icon-76" color="#005EA2" />
    </div>
  );
};
