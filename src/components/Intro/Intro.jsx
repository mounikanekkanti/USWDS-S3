/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Intro = ({
  type,
  className,
  leftClassName,
  releaseNotesDataClassName,
  text = "Release Notes &amp; Data Set Updates",
  theAgingClassName,
  text1 = "The AGing, Independence, and Disability (AGID) Program Data Portal is an on-line query system based on ACL-related data files and surveys, and includes population characteristics from the Census Bureau for comparison purposes. Data Portal is an on-line query system based on ACL-related data files and surveys, and includes population characteristics from the Census Bureau for comparison purposes.",
}) => {
  return (
    <div className={`intro ${className}`}>
      <div className={`left ${type} ${leftClassName}`}>
        <div className="title">
          {type === "default" && <p className={`text-wrapper ${releaseNotesDataClassName}`}>{text}</p>}

          {type === "wide" && <div className={`text-wrapper ${releaseNotesDataClassName}`}>State Profiles</div>}
        </div>
        <div className="content">
          <p className={`the-aging ${theAgingClassName}`}>{text1}</p>
        </div>
      </div>
    </div>
  );
};

Intro.propTypes = {
  type: PropTypes.oneOf(["wide", "default"]),
  text: PropTypes.string,
  text1: PropTypes.string,
};
