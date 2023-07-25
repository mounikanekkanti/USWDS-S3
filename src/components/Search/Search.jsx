/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Icon151 } from "../../icons/Icon151";
import { Vector4 } from "../../icons/Vector4";
import "./style.css";

export const Search = ({ size, className, overlapClassName, vector4StyleOverrideClassName, groupClassName }) => {
  return (
    <div className={`search size-${size} ${className}`}>
      <div className={`overlap ${overlapClassName}`}>
        {size === "default" && (
          <>
            <img className="img" alt="Rectangle" src="/img/rectangle-1.png" />
            <div className={`overlap-group-wrapper ${groupClassName}`}>
              <div className="search-wrapper">
                <div className="text-wrapper-7">Search</div>
              </div>
            </div>
          </>
        )}

        {["big", "small"].includes(size) && (
          <>
            <Vector4 className={vector4StyleOverrideClassName} />
            <div className={`group-2 ${groupClassName}`}>
              {size === "big" && (
                <div className="overlap-group-3">
                  <div className="text-wrapper-8">Search</div>
                </div>
              )}

              {size === "small" && <Icon151 className="icon-151" color="white" />}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

Search.propTypes = {
  size: PropTypes.oneOf(["big", "small", "default"]),
};
