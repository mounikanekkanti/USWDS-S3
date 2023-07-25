/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Icon484 } from "../../icons/Icon484";
import { Line11 } from "../../icons/Line11";
import { Line12 } from "../../icons/Line12";
import { Vector38 } from "../../icons/Vector38";
import { Vector45 } from "../../icons/Vector45";
import "./style.css";

export const TextInput = ({
  errorMessage = "Helpful error message",
  helperText = "Helper text",
  textInputLabel = "Text input label",
  type,
  helperText1,
  className,
  textInputLabelClassName,
  inputClassName,
}) => {
  return (
    <div className={`text-input type-1-${type} ${className}`}>
      {["default", "focused", "prefix", "required", "success", "suffix"].includes(type) && (
        <>
          <div className={`text-input-label helper-text-${helperText1} type-2-${type} ${textInputLabelClassName}`}>
            {((!helperText1 && type === "default") ||
              (!helperText1 && type === "focused") ||
              (!helperText1 && type === "prefix") ||
              (!helperText1 && type === "success") ||
              (!helperText1 && type === "suffix")) && <>{textInputLabel}</>}

            {(helperText1 || type === "required") && (
              <>
                <div className="text-input-label-2">
                  {["default", "focused", "prefix", "success", "suffix"].includes(type) && <>{textInputLabel}</>}

                  {!helperText1 && <>Text input label</>}

                  {type === "required" && helperText1 && (
                    <>
                      <div className="text-input-label-3">Text input label</div>
                      <div className="element">*</div>
                    </>
                  )}
                </div>
                <div className="helper-text">
                  {helperText1 && <>{helperText}</>}

                  {!helperText1 && <>*</>}
                </div>
              </>
            )}
          </div>
          <div className={`input ${inputClassName}`}>
            {["focused", "suffix"].includes(type) && (
              <div className="overlap_group">
                {type === "focused" && (
                  <>
                    <Vector38 className="vector-39" color="#1B1B1B" />
                    <Vector45 className="vector-45" />
                  </>
                )}

                {type === "suffix" && <>lbs.</>}
              </div>
            )}

            {type === "prefix" && <Icon484 className="icon-484" color="#757575" />}
          </div>
        </>
      )}

      {type === "error" && !helperText1 && <Line11 className="line-2" />}

      {type === "error" && helperText1 && <Line12 className="line-2" />}

      {type === "error" && (
        <div className={`frame-10 ${inputClassName}`}>
          <div className="frame-11">
            <div className={`text-input-label-4 helper-text-2-${helperText1}`}>
              {!helperText1 && <>{textInputLabel}</>}

              {helperText1 && (
                <>
                  <div className="text-input-label-5">{textInputLabel}</div>
                  <div className="helper-text-2">Helper text</div>
                </>
              )}
            </div>
            <div className="helpful-error">{errorMessage}</div>
          </div>
          <div className="input-2" />
        </div>
      )}
    </div>
  );
};

TextInput.propTypes = {
  errorMessage: PropTypes.string,
  helperText: PropTypes.string,
  textInputLabel: PropTypes.string,
  type: PropTypes.oneOf(["prefix", "suffix", "default", "success", "focused", "error", "required"]),
  helperText1: PropTypes.bool,
};
