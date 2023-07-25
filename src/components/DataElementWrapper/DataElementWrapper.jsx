/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { IconAdd } from "../../icons/IconAdd";
import "./style.css";

export const DataElementWrapper = ({ className }) => {
  return (
    <div className={`data-element-wrapper ${className}`}>
      <div className="topic-6">
        <div className="frame-70">
          <div className="geography">Geography</div>
          <div className="element-29">[0/3]</div>
          <IconAdd className="icon-add" color="#1B1B1B" />
        </div>
      </div>
    </div>
  );
};
