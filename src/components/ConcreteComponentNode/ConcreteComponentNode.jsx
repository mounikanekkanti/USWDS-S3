/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Checkbox72 } from "../../icons/Checkbox72";
import { SelectedNo } from "../../icons/SelectedNo";
import "./style.css";

export const ConcreteComponentNode = ({ selected }) => {
  return (
    <>
      {selected && <Checkbox72 className="instance-node-5" />}

      {!selected && <SelectedNo className="instance-node-5" />}
    </>
  );
};

ConcreteComponentNode.propTypes = {
  selected: PropTypes.bool,
};
