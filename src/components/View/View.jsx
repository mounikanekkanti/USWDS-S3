/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { ResultsFilter } from "../ResultsFilter";
import "./style.css";

export const View = ({ view, className }) => {
  return (
    <div className={`view ${className}`}>
      <ResultsFilter
        checked={view === "list" ? "on" : "off"}
        className={`${view === "list" ? "class-12" : "class-13"}`}
        type="list-view"
      />
      <ResultsFilter
        checked={view === "list" ? "off" : "on"}
        className={`${view === "list" ? "class-13" : "class-12"}`}
        type="grid-view"
      />
    </div>
  );
};

View.propTypes = {
  view: PropTypes.oneOf(["grid", "list"]),
};
