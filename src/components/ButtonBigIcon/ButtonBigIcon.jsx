/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { IconsPlay4 } from "../../icons/IconsPlay4";
import "./style.css";

export const ButtonBigIcon = ({
  size,
  state,
  className,
  playTheVideoClassName,
  text = "Play the Video",
  icon = <IconsPlay4 className="icons-play" color="var( --colors-primary-primary-light)" />,
}) => {
  return (
    <div className={`button-big-icon state-3-${state} ${className}`}>
      <div className={`play-the-video ${playTheVideoClassName}`}>{text}</div>
      {icon}
    </div>
  );
};

ButtonBigIcon.propTypes = {
  size: PropTypes.oneOf(["big-icon"]),
  state: PropTypes.oneOf(["disabled", "hover", "active", "default"]),
  text: PropTypes.string,
};
