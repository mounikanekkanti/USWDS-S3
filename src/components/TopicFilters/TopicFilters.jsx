/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Vector38 } from "../../icons/Vector38";
import { DateInput } from "../DateInput";
import { TopicFilter } from "../TopicFilter";
import "./style.css";

export const TopicFilters = ({
  property1,
  className,
  topicFilterQuickSearchFilterIcon = <Vector38 className="vector-9" color="#565C65" />,
  topicFilterSubjectReleaseClassName,
}) => {
  return (
    <div className={`topic-filters ${className}`}>
      <div className="search-for-content">Search for Content</div>
      <p className="use-the-filters">Use the filters below to search for content.</p>
      <div className="frame-73">
        <DateInput
          className="date-input-4"
          hint={false}
          iconCalendarTodayColor="#005EA2"
          open={false}
          textInputInputClassName="date-input-6"
          textInputTextInputLabel="Start Data"
          textInputTextInputLabelClassName="date-input-5"
        />
        <DateInput
          className="date-input-4"
          hint={false}
          iconCalendarTodayColor="#005EA2"
          open={false}
          textInputInputClassName="date-input-6"
          textInputTextInputLabel="End Data"
          textInputTextInputLabelClassName="date-input-5"
        />
      </div>
      <TopicFilter
        className={topicFilterSubjectReleaseClassName}
        quickSearchFilterIcon={topicFilterQuickSearchFilterIcon}
        selected={false}
        subject="topics"
      />
    </div>
  );
};

TopicFilters.propTypes = {
  property1: PropTypes.oneOf(["default"]),
};
