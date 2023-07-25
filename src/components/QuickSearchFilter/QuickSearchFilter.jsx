/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Vector38 } from "../../icons/Vector38";
import "./style.css";

export const QuickSearchFilter = ({
  property1,
  className,
  text = "Type to filter topics (132)",
  icon = <Vector38 className="vector-38" color="#565C65" />,
}) => {
  return (
    <div className={`quick-search-filter ${className}`}>
      <div className="div">
        <p className="type-to-filter">{text}</p>
        {icon}
      </div>
    </div>
  );
};

QuickSearchFilter.propTypes = {
  property1: PropTypes.oneOf(["default"]),
  text: PropTypes.string,
};
