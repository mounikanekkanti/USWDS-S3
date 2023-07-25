/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Icon190 } from "../../icons/Icon190";
import { IconAdd } from "../../icons/IconAdd";
import { IconVisibility } from "../../icons/IconVisibility";
import { IconVisibilityOff } from "../../icons/IconVisibilityOff";
import "./style.css";

export const Topic = ({ type, className, text = "Data element name" }) => {
  return (
    <div className={`topic ${className}`}>
      {type === "element" && (
        <>
          <div className="div-3">{text}</div>
          <Icon190 className="icon-5" color="#565C65" />
        </>
      )}

      {["see-all", "show-less"].includes(type) && (
        <div className="frame-13">
          {type === "see-all" && <IconAdd className="icon-5" color="#565C65" />}

          <div className="div-3">
            {type === "see-all" && <>6 more</>}

            {type === "show-less" && <>show less</>}
          </div>
        </div>
      )}

      {type === "see-all" && <IconVisibility className="icon-5" color="#565C65" />}

      {type === "show-less" && <IconVisibilityOff className="icon-5" color="#565C65" />}
    </div>
  );
};

Topic.propTypes = {
  type: PropTypes.oneOf(["see-all", "element", "show-less"]),
  text: PropTypes.string,
};
