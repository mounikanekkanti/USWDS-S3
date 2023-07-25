/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Icon61 } from "../../icons/Icon61";
import "./style.css";

export const FooterPrimaryLink = ({ dropdown, className, documentationClassName, text = "Documentation" }) => {
  return (
    <div className={`footer-primary-link dropdown-${dropdown} ${className}`}>
      {!dropdown && <div className={`documentation ${documentationClassName}`}>{text}</div>}

      {dropdown && (
        <>
          <Icon61 className="icon-61" color="black" />
          <div className="documentation-2">{text}</div>
        </>
      )}
    </div>
  );
};

FooterPrimaryLink.propTypes = {
  dropdown: PropTypes.bool,
  text: PropTypes.string,
};
