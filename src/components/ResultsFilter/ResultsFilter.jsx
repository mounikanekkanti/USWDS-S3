/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Checkbox } from "../../icons/Checkbox";
import { Checkbox67 } from "../../icons/Checkbox67";
import { Checkbox72 } from "../../icons/Checkbox72";
import { Icon175 } from "../../icons/Icon175";
import { IconGridView } from "../../icons/IconGridView";
import "./style.css";

export const ResultsFilter = ({ type, checked, className }) => {
  return (
    <div className={`results-filter ${type} ${checked} ${className}`}>
      <div className="check-label">
        {((checked === "off" && type === "brief") ||
          (checked === "off" && type === "codebook") ||
          (checked === "off" && type === "data-report") ||
          (checked === "off" && type === "data-set") ||
          (checked === "off" && type === "release-notes") ||
          (checked === "off" && type === "view-all")) && (
          <Checkbox className="checkbox-2" color={type === "view-all" ? "#005EA2" : "#F0F0F0"} />
        )}

        {((checked === "on" && type === "brief") ||
          (checked === "on" && type === "codebook") ||
          (checked === "on" && type === "data-report") ||
          (checked === "on" && type === "data-set") ||
          (checked === "on" && type === "release-notes")) && <Checkbox67 className="checkbox-2" />}

        {((checked === "off" && type === "view-all") ||
          type === "brief" ||
          type === "codebook" ||
          type === "data-report" ||
          type === "data-set" ||
          type === "grid-view" ||
          type === "list-view" ||
          type === "release-notes") && (
          <div className="data-set-2">
            {type === "data-set" && <>Data Set (2)</>}

            {type === "data-report" && <>Report (3)</>}

            {type === "release-notes" && <>Release Notes (5)</>}

            {type === "brief" && <>Brief &amp; Blog (2)</>}

            {type === "codebook" && <>Codebook (2)</>}

            {type === "view-all" && <>View All (15)</>}

            {type === "grid-view" && <>Grid View</>}

            {type === "list-view" && <>List View</>}
          </div>
        )}

        {checked === "on" && type === "view-all" && (
          <>
            <Checkbox72 className="checkbox-2" />
            <div className="view-all-2">View All (15)</div>
          </>
        )}

        {type === "list-view" && <Icon175 className="icon-6" color={checked === "on" ? "white" : "#71767A"} />}

        {type === "grid-view" && <IconGridView className="icon-6" color={checked === "on" ? "white" : "#71767A"} />}
      </div>
    </div>
  );
};

ResultsFilter.propTypes = {
  type: PropTypes.oneOf([
    "list-view",
    "data-set",
    "view-all",
    "release-notes",
    "grid-view",
    "brief",
    "data-report",
    "codebook",
  ]),
  checked: PropTypes.oneOf(["off", "on"]),
};
