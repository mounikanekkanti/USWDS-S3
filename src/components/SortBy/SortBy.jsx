/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Icon177 } from "../../icons/Icon177";
import { Icon266 } from "../../icons/Icon266";
import "./style.css";

export const SortBy = ({ expanded, className, text = "Sort by Type" }) => {
  return (
    <div className={`sort-by expanded-${expanded} ${className}`}>
      {!expanded && (
        <>
          <div className="sort-by-type">{text}</div>
          <Icon177 className="icon-7" color="#71767A" />
        </>
      )}

      {expanded && (
        <>
          <div className="frame-15">
            <div className="sort-by-type-2">{text}</div>
            <Icon266 className="icon-7" color="#3D4551" />
          </div>
          <div className="category-drop">
            <div className="single-entry-wrapper">
              <div className="single-entry">
                <div className="category">Newest</div>
              </div>
            </div>
            <div className="single-entry-wrapper">
              <div className="single-entry">
                <div className="category">Oldest</div>
              </div>
            </div>
            <div className="single-entry-wrapper">
              <div className="single-entry">
                <div className="category">Type</div>
              </div>
            </div>
            <div className="single-entry-wrapper">
              <div className="single-entry">
                <div className="category">A-Z</div>
              </div>
            </div>
            <div className="single-entry-wrapper">
              <div className="single-entry">
                <div className="category">Z-A</div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

SortBy.propTypes = {
  expanded: PropTypes.bool,
  text: PropTypes.string,
};
