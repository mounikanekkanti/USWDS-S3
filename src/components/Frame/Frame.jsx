/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Icon21 } from "../../icons/Icon21";
import { Icon27 } from "../../icons/Icon27";
import { IconArrowForward } from "../../icons/IconArrowForward";
import { FaqFilterTopic } from "../FaqFilterTopic";
import "./style.css";

export const Frame = ({
  expanded,
  className,
  FAQFilterTopicText = "About AGID",
  FAQFilterTopicIcon = <Icon21 className="icon-instance-node" color="#565C65" />,
  FAQFilterTopicLevel = "question",
  FAQFilterTopicText1 = "What is AGID?",
  override = <IconArrowForward className="icon-arrow-forward" color="#71767A" />,
  FAQFilterTopicLevelSubjectClassName,
  FAQFilterTopicText2 = "How can I use AGID data?",
  FAQFilterTopicIcon1 = <IconArrowForward className="icon-arrow-forward" color="#71767A" />,
  FAQFilterTopicText3 = "How is AGID data collected?",
  FAQFilterTopicIcon2 = <IconArrowForward className="icon-arrow-forward" color="#71767A" />,
  FAQFilterTopicText4 = "What type of information is available in AGID data?",
  FAQFilterTopicIcon3 = <IconArrowForward className="icon-arrow-forward" color="#71767A" />,
  FAQFilterTopicText5 = "How often is AGID data updated?",
  FAQFilterTopicIcon4 = <IconArrowForward className="icon-arrow-forward" color="#71767A" />,
  FAQFilterTopicText6 = "For which years is AGID data available?",
  FAQFilterTopicIcon5 = <IconArrowForward className="icon-arrow-forward" color="#71767A" />,
  FAQFilterTopicText7 = "Is my personal information displayed on AGID?",
  FAQFilterTopicIcon6 = <IconArrowForward className="icon-arrow-forward" color="#71767A" />,
  FAQFilterTopicText8 = "How is AGID funded?",
  FAQFilterTopicIcon7 = <IconArrowForward className="icon-arrow-forward" color="#71767A" />,
  FAQFilterTopicText9 = "About AGID",
  FAQFilterTopicIcon8 = <Icon27 className="icon-instance-node" color="#565C65" />,
  FAQFilterTopicLevelSubjectClassNameOverride,
}) => {
  return (
    <div className={`frame ${className}`}>
      <FaqFilterTopic
        className={`${expanded ? "FAQ-filter-topic-instance" : FAQFilterTopicLevelSubjectClassNameOverride}`}
        icon={expanded ? FAQFilterTopicIcon : FAQFilterTopicIcon8}
        level="subject"
        text={expanded ? FAQFilterTopicText : FAQFilterTopicText9}
      />
      {expanded && (
        <>
          <FaqFilterTopic
            className={FAQFilterTopicLevelSubjectClassName}
            icon={override}
            level={FAQFilterTopicLevel}
            text1={FAQFilterTopicText1}
          />
          <FaqFilterTopic
            className="FAQ-filter-topic-instance"
            icon={FAQFilterTopicIcon1}
            level="question"
            text1={FAQFilterTopicText2}
          />
          <FaqFilterTopic
            className="FAQ-filter-topic-instance"
            icon={FAQFilterTopicIcon2}
            level="question"
            text1={FAQFilterTopicText3}
          />
          <FaqFilterTopic
            className="FAQ-filter-topic-instance"
            icon={FAQFilterTopicIcon3}
            level="question"
            text1={FAQFilterTopicText4}
          />
          <FaqFilterTopic
            className="FAQ-filter-topic-instance"
            icon={FAQFilterTopicIcon4}
            level="question"
            text1={FAQFilterTopicText5}
          />
          <FaqFilterTopic
            className="FAQ-filter-topic-instance"
            icon={FAQFilterTopicIcon5}
            level="question"
            text1={FAQFilterTopicText6}
          />
          <FaqFilterTopic
            className="FAQ-filter-topic-instance"
            icon={FAQFilterTopicIcon6}
            level="question"
            text1={FAQFilterTopicText7}
          />
          <FaqFilterTopic
            className="FAQ-filter-topic-instance"
            icon={FAQFilterTopicIcon7}
            level="question"
            text1={FAQFilterTopicText8}
          />
        </>
      )}
    </div>
  );
};

Frame.propTypes = {
  expanded: PropTypes.bool,
  FAQFilterTopicText: PropTypes.string,
  FAQFilterTopicLevel: PropTypes.string,
  FAQFilterTopicText1: PropTypes.string,
  FAQFilterTopicText2: PropTypes.string,
  FAQFilterTopicText3: PropTypes.string,
  FAQFilterTopicText4: PropTypes.string,
  FAQFilterTopicText5: PropTypes.string,
  FAQFilterTopicText6: PropTypes.string,
  FAQFilterTopicText7: PropTypes.string,
  FAQFilterTopicText8: PropTypes.string,
  FAQFilterTopicText9: PropTypes.string,
};
