/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const DataFilterHeadings = ({
  level,
  className,
  text = "Use the filters to create a custom query.",
  text1 = "Select Data Set",
  dataExplorerClassName,
  text2 = "Data Explorer",
  hasUseTheFiltersTo = true,
}) => {
  return (
    <div className={`data-filter-headings ${className}`}>
      <div className={`data-explorer ${level} ${dataExplorerClassName}`}>
        {level === "one" && <>{text2}</>}

        {level === "two" && <>{text1}</>}
      </div>
      {hasUseTheFiltersTo && <p className={`use-the-filters-to level-${level}`}>{text}</p>}
    </div>
  );
};

DataFilterHeadings.propTypes = {
  level: PropTypes.oneOf(["two", "one"]),
  text: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
  hasUseTheFiltersTo: PropTypes.bool,
};
