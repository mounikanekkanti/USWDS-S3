/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Vector38 } from "../../icons/Vector38";
import { DataElement } from "../DataElement";
import { DataElementSelectorProgramsNoNo } from "../DataElementSelectorProgramsNoNo";
import { DataElementWrapper } from "../DataElementWrapper";
import { DataFilterHeadings } from "../DataFilterHeadings";
import { DivWrapper } from "../DivWrapper";
import { QuickSearchFilter } from "../QuickSearchFilter";
import { Topic } from "../Topic";
import "./style.css";

export const TopicFilter = ({
  subject,
  selected,
  className,
  quickSearchFilterIcon = <Vector38 className="vector-35" color="#565C65" />,
}) => {
  return (
    <div className={`topic-filter subject-${subject} ${className}`}>
      {subject === "release-notes" && (
        <div className="frame-14">
          <div className="frame-14">
            <div className="list-2">
              <Topic className="topic-instance" text="Data element name" type="element" />
              <Topic className="topic-instance" text="Data element name" type="element" />
              <Topic className="topic-instance" text="Data element name" type="element" />
              <Topic className="topic-instance" text="Data element name" type="element" />
              <Topic className="topic-instance" text="Data element name" type="element" />
              <Topic className="topic-instance" text="Data element name" type="element" />
              <Topic className="topic-instance" text="Data element name" type="element" />
              <Topic className="topic-instance" text="Data element name" type="element" />
              <Topic className="topic-instance" text="Data element name" type="element" />
            </div>
          </div>
        </div>
      )}

      {subject === "topics" && (
        <>
          <DataFilterHeadings
            className="instance-node-2"
            level="two"
            text="Use the filters to show related content"
            text1="Select Topics and Sub-topics"
          />
          <QuickSearchFilter
            className="instance-node-2"
            icon={quickSearchFilterIcon}
            property1="default"
            text="Type to filter topics (132)"
          />
          <DataElement category="content-type" className="instance-node-2" expanded={false} tiles />
          <DataElementWrapper className="data-element-instance" />
          <DivWrapper className="data-element-instance" />
          <DataElementSelectorProgramsNoNo className="instance-node-2" />
          <DataElement category="demographics" className="data-element-instance" expanded={false} tiles={false} />
        </>
      )}
    </div>
  );
};

TopicFilter.propTypes = {
  subject: PropTypes.oneOf(["release-notes", "topics"]),
  selected: PropTypes.bool,
};
