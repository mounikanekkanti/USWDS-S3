/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Icon478 } from "../../icons/Icon478";
import { Icon481 } from "../../icons/Icon481";
import { Icon61 } from "../../icons/Icon61";
import { IconCalendarToday } from "../../icons/IconCalendarToday";
import { IconNavigateFarNext } from "../../icons/IconNavigateFarNext";
import { Vector38 } from "../../icons/Vector38";
import { TextInput } from "../TextInput";
import "./style.css";

export const DateInput = ({
  open,
  hint,
  className,
  textInputTextInputLabelClassName,
  textInputTextInputLabel = "Text input label",
  textInputInputClassName,
  iconCalendarTodayColor = "#1B1B1B",
}) => {
  return (
    <div className={`date-input open-${open} hint-${hint} ${className}`}>
      {!open && (
        <>
          <TextInput
            className="text-input-instance"
            helperText={hint ? "mm/dd/yyyy" : undefined}
            helperText1={!hint ? false : true}
            inputClassName={textInputInputClassName}
            textInputLabel={textInputTextInputLabel}
            textInputLabelClassName={textInputTextInputLabelClassName}
            type="default"
          />
          <div className="icon-calendar-today-wrapper">
            <IconCalendarToday className="icon-calendar-today" color={iconCalendarTodayColor} />
          </div>
        </>
      )}

      {open && (
        <>
          <div className="overlap-2">
            <div className="rectangle-2" />
            <div className="div-2">
              {!hint && (
                <TextInput
                  className="text-input-instance"
                  helperText1={false}
                  inputClassName="text-input-2"
                  textInputLabel="Text input label"
                  type="default"
                />
              )}

              {hint && (
                <div className="text-input-3">
                  <div className="frame-12">
                    <div className="text-input-label-i">Text input label</div>
                    <div className="helper-text-i">mm/dd/yyyy</div>
                  </div>
                  <div className="vector-wrapper">
                    <Vector38 className="vector-13" color="#1B1B1B" />
                  </div>
                </div>
              )}

              <div className="icon-calendar-today-wrapper">
                <IconCalendarToday className="icon-calendar-today" color="#1B1B1B" />
              </div>
            </div>
          </div>
          <div className="calendar">
            <div className="overlap-group-4">
              <div className="overlap-3">
                <div className="text-wrapper-12">2</div>
                <div className="text-wrapper-13">1</div>
              </div>
              <div className="element-2">30</div>
              <div className="element-3">29</div>
              <div className="element-4">28</div>
              <div className="element-5">27</div>
              <div className="element-6">26</div>
              <div className="overlap-4">
                <div className="text-wrapper-12">25</div>
                <div className="text-wrapper-13">24</div>
              </div>
              <div className="element-7">23</div>
              <div className="element-8">22</div>
              <div className="element-9">21</div>
              <div className="element-10">20</div>
              <div className="element-11">19</div>
              <div className="overlap-5">
                <div className="text-wrapper-12">18</div>
                <div className="text-wrapper-13">17</div>
              </div>
              <div className="element-12">16</div>
              <div className="element-13">15</div>
              <div className="element-14">14</div>
              <div className="element-15">13</div>
              <div className="element-16">12</div>
              <div className="overlap-6">
                <div className="text-wrapper-12">11</div>
                <div className="text-wrapper-13">10</div>
              </div>
              <div className="element-17">9</div>
              <div className="element-18">8</div>
              <div className="element-19">7</div>
              <div className="element-20">6</div>
              <div className="element-21">5</div>
              <div className="overlap-7">
                <div className="text-wrapper-12">4</div>
                <div className="text-wrapper-13">3</div>
              </div>
              <div className="element-22">2</div>
              <div className="element-23">1</div>
              <div className="element-24">31</div>
              <div className="element-25">30</div>
              <div className="element-26">29</div>
              <div className="overlap-8">
                <div className="text-wrapper-12">S</div>
                <div className="text-wrapper-13">F</div>
              </div>
              <div className="th">Th</div>
              <div className="w">W</div>
              <div className="t">T</div>
              <div className="m">M</div>
              <div className="s">S</div>
              <div className="element-27">2020</div>
              <div className="april">April</div>
              <Icon61 className={`${hint ? "class-4" : "class-5"}`} color="#1B1B1B" />
              <IconNavigateFarNext className={`${hint ? "class-6" : "class-7"}`} color="#1B1B1B" />
              <Icon481 className={`${hint ? "class-8" : "class-9"}`} color="#1B1B1B" />
              <Icon478 className={`${hint ? "class-10" : "class-11"}`} color="#1B1B1B" />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

DateInput.propTypes = {
  open: PropTypes.bool,
  hint: PropTypes.bool,
  textInputTextInputLabel: PropTypes.string,
  iconCalendarTodayColor: PropTypes.string,
};
