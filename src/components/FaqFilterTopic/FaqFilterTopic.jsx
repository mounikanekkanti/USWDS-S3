/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Icon27 } from "../../icons/Icon27";
import "./style.css";

export const FaqFilterTopic = ({
  level,
  className,
  text = "About AGID",
  icon = <Icon27 className="icon-27" color="#565C65" />,
  text1 = "What is AGID?",
}) => {
  return (
    <div className={`FAQ-filter-topic ${level} ${className}`}>
      <div className="check-label-info">
        <div className="about-AGID">
          {level === "subject" && <>{text}</>}

          {["question", "selected"].includes(level) && <>{text1}</>}
        </div>
      </div>
      {icon}
    </div>
  );
};

FaqFilterTopic.propTypes = {
  level: PropTypes.oneOf(["subject", "question", "selected"]),
  text: PropTypes.string,
  text1: PropTypes.string,
};
