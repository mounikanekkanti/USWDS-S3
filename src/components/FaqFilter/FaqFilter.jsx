/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Icon21 } from "../../icons/Icon21";
import { Icon27 } from "../../icons/Icon27";
import { IconArrowForward } from "../../icons/IconArrowForward";
import { Frame } from "../Frame";
import { Scroll } from "../Scroll";
import "./style.css";

export const FaqFilter = ({
  type,
  className,
  frameClassName,
  frameClassNameOverride,
  frameFaqFilterTopicText = "Annexed",
  frameFaqFilterTopicIcon = <IconArrowForward className="icon-116" color="#71767A" />,
  frameFaqFilterTopicText1 = "Allotment",
  frameFaqFilterTopicText2 = "AAA - Area Agencies on Aging",
  override = <IconArrowForward className="icon-116" color="#71767A" />,
  frameFaqFilterTopicText3 = "ACL - Administration",
  frameFaqFilterTopicIcon1 = <Icon21 className="icon-2" color="#565C65" />,
  frameFaqFilterTopicIcon2 = <IconArrowForward className="icon-116" color="#71767A" />,
  frameFaqFilterTopicLevelSubjectClassName,
  frameFaqFilterTopicIcon3 = <IconArrowForward className="icon-116" color="#71767A" />,
  frameFaqFilterTopicText4 = "Atrophy",
  frameFaqFilterTopicIcon4 = <IconArrowForward className="icon-116" color="#71767A" />,
  frameFaqFilterTopicLevel = "question",
  frameFaqFilterTopicIcon5 = <IconArrowForward className="icon-116" color="#71767A" />,
  frameFaqFilterTopicText5 = "AGID - AGing, Independence, and Disability",
  frameFaqFilterTopicIcon6 = <IconArrowForward className="icon-116" color="#71767A" />,
  frameFaqFilterTopicIcon7 = <IconArrowForward className="icon-116" color="#71767A" />,
  frameFaqFilterTopicIcon8 = <Icon27 className="icon-2" color="#565C65" />,
  frameExpandedYesClassName,
  frameFaqFilterTopicIcon9 = <Icon27 className="icon-2" color="#565C65" />,
  frameExpandedYesClassNameOverride,
  frameFaqFilterTopicIcon10 = <Icon27 className="icon-2" color="#565C65" />,
  frameExpandedNoClassName,
  frameFaqFilterTopicIcon11 = <Icon27 className="icon-2" color="#565C65" />,
  frameExpandedNoClassNameOverride,
  frameFaqFilterTopicIcon12 = <Icon27 className="icon-2" color="#565C65" />,
  frameFaqFilterTopicWrapperClassName,
  frameFaqFilterTopicIcon13 = <Icon27 className="icon-2" color="#565C65" />,
  frameFaqFilterTopicWrapperClassNameOverride,
  frameFaqFilterTopicIcon14 = <Icon27 className="icon-2" color="#565C65" />,
  frameDivClassName,
}) => {
  return (
    <div className={`FAQ-filter ${type} ${className}`}>
      {type === "FAQ" && (
        <>
          <Frame
            FAQFilterTopicIcon={<Icon21 className="icon-2" color="#565C65" />}
            FAQFilterTopicIcon1={<IconArrowForward className="icon-116" color="#71767A" />}
            FAQFilterTopicIcon2={<IconArrowForward className="icon-116" color="#71767A" />}
            FAQFilterTopicIcon3={<IconArrowForward className="icon-116" color="#71767A" />}
            FAQFilterTopicIcon4={<IconArrowForward className="icon-116" color="#71767A" />}
            FAQFilterTopicIcon5={<IconArrowForward className="icon-116" color="#71767A" />}
            FAQFilterTopicIcon6={<IconArrowForward className="icon-116" color="#71767A" />}
            FAQFilterTopicIcon7={<IconArrowForward className="icon-116" color="#71767A" />}
            FAQFilterTopicLevel="question"
            FAQFilterTopicLevelSubjectClassName="frame-301"
            FAQFilterTopicText="About AGID"
            FAQFilterTopicText1="What is AGID?"
            FAQFilterTopicText2="How can I use AGID data?"
            FAQFilterTopicText3="How is AGID data collected?"
            FAQFilterTopicText4="What type of information is available in AGID data?"
            FAQFilterTopicText5="How often is AGID data updated?"
            FAQFilterTopicText6="For which years is AGID data available?"
            FAQFilterTopicText7="Is my personal information displayed on AGID?"
            FAQFilterTopicText8="How is AGID funded?"
            className="frame-301"
            expanded
            override={<IconArrowForward className="icon-116" color="#71767A" />}
          />
          <Frame
            FAQFilterTopicIcon8={<Icon27 className="icon-2" color="#565C65" />}
            FAQFilterTopicLevelSubjectClassNameOverride="frame-301"
            FAQFilterTopicText9="ACL Programs"
            className="frame-301"
            expanded={false}
          />
          <Frame
            FAQFilterTopicIcon8={<Icon27 className="icon-2" color="#565C65" />}
            FAQFilterTopicLevelSubjectClassNameOverride="frame-301"
            FAQFilterTopicText9="Contact"
            className="frame-301"
            expanded={false}
          />
          <Frame
            FAQFilterTopicIcon8={<Icon27 className="icon-2" color="#565C65" />}
            FAQFilterTopicLevelSubjectClassNameOverride="frame-301"
            FAQFilterTopicText9="Data Sources"
            className="frame-301"
            expanded={false}
          />
          <Frame
            FAQFilterTopicIcon8={<Icon27 className="icon-2" color="#565C65" />}
            FAQFilterTopicLevelSubjectClassNameOverride="frame-301"
            FAQFilterTopicText9="Functionality"
            className="frame-301"
            expanded={false}
          />
          <Frame
            FAQFilterTopicIcon8={<Icon27 className="icon-2" color="#565C65" />}
            FAQFilterTopicLevelSubjectClassNameOverride="frame-301"
            FAQFilterTopicText9="Visualizations"
            className="frame-301"
            expanded={false}
          />
        </>
      )}

      {type === "glossary" && (
        <div className={`frame-2 ${frameClassName}`}>
          <div className={`frame-3 ${frameClassNameOverride}`}>
            <Frame
              FAQFilterTopicIcon={frameFaqFilterTopicIcon1}
              FAQFilterTopicIcon1={frameFaqFilterTopicIcon}
              FAQFilterTopicIcon2={frameFaqFilterTopicIcon7}
              FAQFilterTopicIcon3={frameFaqFilterTopicIcon6}
              FAQFilterTopicIcon4={override}
              FAQFilterTopicIcon5={frameFaqFilterTopicIcon3}
              FAQFilterTopicIcon6={frameFaqFilterTopicIcon5}
              FAQFilterTopicIcon7={frameFaqFilterTopicIcon2}
              FAQFilterTopicLevel={frameFaqFilterTopicLevel}
              FAQFilterTopicLevelSubjectClassName={frameFaqFilterTopicLevelSubjectClassName}
              FAQFilterTopicText="A"
              FAQFilterTopicText1={frameFaqFilterTopicText2}
              FAQFilterTopicText2={frameFaqFilterTopicText3}
              FAQFilterTopicText3="Administration"
              FAQFilterTopicText4="Aging"
              FAQFilterTopicText5={frameFaqFilterTopicText5}
              FAQFilterTopicText6={frameFaqFilterTopicText1}
              FAQFilterTopicText7={frameFaqFilterTopicText}
              FAQFilterTopicText8={frameFaqFilterTopicText4}
              className="frame-301"
              expanded
              override={frameFaqFilterTopicIcon4}
            />
            <Frame
              FAQFilterTopicIcon8={frameFaqFilterTopicIcon8}
              FAQFilterTopicLevelSubjectClassNameOverride="frame-301"
              FAQFilterTopicText9="B"
              className={frameExpandedYesClassName}
              expanded={false}
            />
            <Frame
              FAQFilterTopicIcon8={frameFaqFilterTopicIcon9}
              FAQFilterTopicLevelSubjectClassNameOverride="frame-301"
              FAQFilterTopicText9="C"
              className={frameExpandedYesClassNameOverride}
              expanded={false}
            />
            <Frame
              FAQFilterTopicIcon8={frameFaqFilterTopicIcon10}
              FAQFilterTopicLevelSubjectClassNameOverride="frame-301"
              FAQFilterTopicText9="D"
              className={frameExpandedNoClassName}
              expanded={false}
            />
            <Frame
              FAQFilterTopicIcon8={frameFaqFilterTopicIcon11}
              FAQFilterTopicLevelSubjectClassNameOverride="frame-301"
              FAQFilterTopicText9="E"
              className={frameExpandedNoClassNameOverride}
              expanded={false}
            />
            <Frame
              FAQFilterTopicIcon8={frameFaqFilterTopicIcon12}
              FAQFilterTopicLevelSubjectClassNameOverride="frame-301"
              FAQFilterTopicText9="F"
              className={frameFaqFilterTopicWrapperClassName}
              expanded={false}
            />
            <Frame
              FAQFilterTopicIcon8={frameFaqFilterTopicIcon13}
              FAQFilterTopicLevelSubjectClassNameOverride="frame-301"
              FAQFilterTopicText9="G"
              className={frameFaqFilterTopicWrapperClassNameOverride}
              expanded={false}
            />
            <Frame
              FAQFilterTopicIcon8={frameFaqFilterTopicIcon14}
              FAQFilterTopicLevelSubjectClassNameOverride="frame-301"
              FAQFilterTopicText9="H"
              className={frameDivClassName}
              expanded={false}
            />
          </div>
          <Scroll className="scroll-instance" rectangleClassName="instance-node" />
        </div>
      )}
    </div>
  );
};

FaqFilter.propTypes = {
  type: PropTypes.oneOf(["FAQ", "glossary"]),
  frameFaqFilterTopicText: PropTypes.string,
  frameFaqFilterTopicText1: PropTypes.string,
  frameFaqFilterTopicText2: PropTypes.string,
  frameFaqFilterTopicText3: PropTypes.string,
  frameFaqFilterTopicText4: PropTypes.string,
  frameFaqFilterTopicLevel: PropTypes.string,
  frameFaqFilterTopicText5: PropTypes.string,
};
