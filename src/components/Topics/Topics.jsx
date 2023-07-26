/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Checkbox43 } from "../../icons/Checkbox43";
import { Checkbox46 } from "../../icons/Checkbox46";
import { Checkbox72 } from "../../icons/Checkbox72";
import { Icon21 } from "../../icons/Icon21";
import { Icon27 } from "../../icons/Icon27";
import { Icon311 } from "../../icons/Icon311";
import { Icon329 } from "../../icons/Icon329";
import { Icon442 } from "../../icons/Icon442";
import { Icon446 } from "../../icons/Icon446";
import { Icon458 } from "../../icons/Icon458";
import { Icon460 } from "../../icons/Icon460";
import { IconAdd } from "../../icons/IconAdd";
import { IconError } from "../../icons/IconError";
import { Radio1 } from "../../icons/Radio1";
import { SelectedNo } from "../../icons/SelectedNo";
import "./style.css";

export const Topics = ({
  level,
  selected,
  info,
  expanded,
  dataAvailable,
  className,
  icon = <Checkbox43 className="instance-node-7" />,
  text = "State Name",
  stateIndependentClassName,
  text1 = "Sub-topic [0/9]",
  override = <Icon329 className="instance-node-6" color="#71767A" />,
  visible = true,
  subTopicClassName,
  visible1 = true,
}) => {
  return (
    <div
      className={`topics level-${level} ${dataAvailable} info-${info} selected-${selected} expanded-0-${expanded} ${className}`}
    >
      {((dataAvailable === "no" && !info) ||
        (dataAvailable === "yes" && !info && level === "suv-subtopic") ||
        (dataAvailable === "yes" && level === "state") ||
        level === "release-note" ||
        (level === "state-radio" && selected) ||
        level === "sub-subtopic-no-info" ||
        level === "sub-topic-no-info") && (
        <div className="check-label-info-2">
          {(level === "sub-topic" ||
            (!selected && level === "release-note") ||
            (!selected && level === "sub-topic-no-info")) && <SelectedNo className="instance-node-6" />}

          {level === "release-note" && !selected && (
            <>
              <p className="state-independent">State Independent Living Services Program PPR</p>
              <Icon329 className="instance-node-6" color="#71767A" />
            </>
          )}

          {selected && ["sub-topic-no-info", "suv-subtopic"].includes(level) && (
            <Checkbox72 className={`${level === "sub-topic-no-info" ? "instance-node-6" : "instance-node-7"}`} />
          )}

          {["sub-topic-no-info", "sub-topic"].includes(level) && (
            <div className="sub-topic-2">
              {dataAvailable === "yes" && <>{text1}</>}

              {dataAvailable === "no" && <>Sub-topic</>}
            </div>
          )}

          {!expanded && level === "sub-topic-no-info" && <Icon27 className="icon-9" color="#71767A" />}

          {(level === "state-radio" ||
            level === "sub-subtopic-no-info" ||
            (selected && level === "release-note") ||
            (dataAvailable === "yes" && level === "state")) && <>{icon}</>}

          {selected && level === "release-note" && (
            <p className={`state-independent-2 ${stateIndependentClassName}`}>
              State Independent Living Services Program PPR
            </p>
          )}

          {expanded && <Icon21 className="icon-9" color="#71767A" />}

          {level === "suv-subtopic" && dataAvailable === "yes" && !selected && (
            <Checkbox43 className="instance-node-7" />
          )}

          {(level === "state-radio" ||
            level === "sub-subtopic-no-info" ||
            (dataAvailable === "yes" && level === "state")) && (
            <div className={`sub-subtopic ${stateIndependentClassName}`}>
              {level === "sub-subtopic-no-info" && <>Sub-subtopic</>}

              {["state-radio", "state"].includes(level) && <>{text}</>}
            </div>
          )}

          {dataAvailable === "no" && ["state", "suv-subtopic"].includes(level) && (
            <Checkbox46 className="instance-node-7" />
          )}

          {(level === "suv-subtopic" || (dataAvailable === "no" && level === "state")) && (
            <div className="sub-subtopic-2">
              {level === "suv-subtopic" && <>Sub-subtopic</>}

              {level === "state" && <>{text}</>}
            </div>
          )}

          {dataAvailable === "no" && ["state", "suv-subtopic"].includes(level) && (
            <Icon460 className="instance-node-7" color="#FA9441" />
          )}

          {level === "suv-subtopic" && dataAvailable === "yes" && (
            <Icon458 className="instance-node-7" color={selected ? "var( --colors-primary-primary-light)" : "#71767A"} />
          )}

          {level === "sub-topic" && <Icon446 className="instance-node-6" />}
        </div>
      )}

      {dataAvailable === "yes" && info && (
        <>
          <div className="check-label-info-3">
            {!expanded && level === "sub-topic" && (
              <div className="frame-64">
                {!selected && (
                  <>
                    <SelectedNo className="instance-node-6" />
                    <div className="sub-topic-3">{text1}</div>
                  </>
                )}

                {selected && (
                  <>
                    <Checkbox72 className="instance-node-6" />
                    <div className="div-8">{text1}</div>
                  </>
                )}
              </div>
            )}

            {expanded && (
              <div className="frame-65">
                {!selected && (
                  <>
                    <SelectedNo className="instance-node-6" />
                    <div className="sub-topic-3">{text1}</div>
                  </>
                )}

                {selected && (
                  <>
                    <Checkbox72 className="instance-node-6" />
                    <div className="div-8">{text1}</div>
                  </>
                )}
              </div>
            )}

            {level === "sub-topic" && <Icon442 className="instance-node-6" color="var( --colors-primary-primary-light)" />}

            {expanded && <Icon21 className="icon-9" color="#71767A" />}

            {level === "suv-subtopic" && !selected && (
              <>
                <Checkbox43 className="instance-node-7" />
                <div className="text-wrapper-18">Sub-subtopic</div>
                <Icon442 className="instance-node-7" color="var( --colors-primary-primary-light)" />
              </>
            )}

            {selected && level === "suv-subtopic" && (
              <>
                <Checkbox72 className="instance-node-7" />
                <div className="sub-subtopic-3">Sub-subtopic</div>
                <Icon442 className="instance-node-7" color="var( --colors-primary-primary-light)" />
              </>
            )}

            {!expanded && level === "sub-topic" && <Icon27 className="icon-9" color="#71767A" />}
          </div>
          <p className="brief-description-of">
            Brief description of the subtopic. Can span to one or two or any number of multiple lines.
          </p>
        </>
      )}

      {((dataAvailable === "no" && info) ||
        dataAvailable === "unavailable-with-selected-data-set-unavailable-with-selected-data-set" ||
        (expanded && level === "data-set") ||
        (expanded && level === "geo-type") ||
        (expanded && level === "topic")) && (
        <>
          <div className="check-label-info-4">
            {dataAvailable === "unavailable-with-selected-data-set-unavailable-with-selected-data-set" && (
              <>
                <SelectedNo className="instance-node-6" />
                <div className="sub-topic-4">Sub-topic</div>
              </>
            )}

            {dataAvailable === "no" && (
              <>
                <Checkbox46 className="instance-node-7" />
                <div className="sub-subtopic-4">
                  {level === "suv-subtopic" && <>Sub-subtopic</>}

                  {level === "state" && <>{text}</>}
                </div>
              </>
            )}

            {!expanded && (
              <IconError
                className={`${dataAvailable === "no" ? "instance-node-7" : "instance-node-6"}`}
                color="#FA9441"
              />
            )}

            {!info && (
              <>
                <div className="services-2">
                  {level === "topic" && <>Services</>}

                  {level === "geo-type" && <>States and Territories</>}

                  {level === "data-set" && <>State Performance Reports (SPR)</>}
                </div>
                <Icon311 className="icon-10" color="#1B1B1B" />
              </>
            )}
          </div>
          <div className="single-entry-2">
            {!expanded && <p className="unavailable-with">Unavailable with selected data set</p>}

            {level === "topic" && (
              <>
                <div className="topic-list-item">
                  <div className="single-entry-3">
                    <Checkbox43 className="instance-node-7" />
                    <div className="ACL-administration">ACL Administration</div>
                  </div>
                </div>
                <div className="topic-list-item-2">
                  <div className="single-entry-3">
                    <Checkbox43 className="instance-node-7" />
                    <div className="ACL-administration">Aging</div>
                  </div>
                </div>
                <div className="topic-list-item">
                  <div className="single-entry-3">
                    <Checkbox43 className="instance-node-7" />
                    <div className="ACL-administration">Demographics</div>
                  </div>
                </div>
                <div className="topic-list-item">
                  <div className="single-entry-3">
                    <Checkbox43 className="instance-node-7" />
                    <div className="ACL-administration">Disability</div>
                  </div>
                </div>
                <div className="topic-list-item">
                  <div className="single-entry-3">
                    <Checkbox43 className="instance-node-7" />
                    <div className="ACL-administration">Program&nbsp;&nbsp;Performance</div>
                  </div>
                </div>
              </>
            )}

            {["data-set", "topic"].includes(level) && (
              <div className="topic-list-item-3">
                <div className="single-entry-3">
                  <Checkbox72 className="instance-node-7" />
                  <div className="div-8">
                    {level === "topic" && <>Services</>}

                    {level === "data-set" && <>State Performance Reports (SPR)</>}
                  </div>
                </div>
              </div>
            )}

            {["data-set", "geo-type"].includes(level) && (
              <div className="topic-list-item-4">
                <div className="single-entry-3">
                  <Checkbox43 className="instance-node-7" />
                  {level === "data-set" && (
                    <p className="ACL-administration-2">American Indian, Alaskan Native, and Native Hawaiian PPR</p>
                  )}

                  {level === "geo-type" && <div className="ACL-administration">National</div>}
                </div>
              </div>
            )}

            {level === "data-set" && (
              <>
                <div className="topic-list-item-4">
                  <div className="single-entry-3">
                    <Checkbox43 className="instance-node-7" />
                    <p className="ACL-administration-2">National Ombudsman Reporting System (NORS)</p>
                  </div>
                </div>
                <div className="topic-list-item-4">
                  <div className="single-entry-3">
                    <Checkbox43 className="instance-node-7" />
                    <p className="ACL-administration-2">National Survey of Older Americans Act Participants (NSOAAP)</p>
                  </div>
                </div>
                <div className="topic-list-item-4">
                  <div className="single-entry-3">
                    <Checkbox43 className="instance-node-7" />
                    <p className="ACL-administration-2">American Community Survey (ACS) Demographic Data</p>
                  </div>
                </div>
                <div className="topic-list-item-4">
                  <div className="single-entry-3">
                    <Checkbox43 className="instance-node-7" />
                    <p className="ACL-administration-2">American Community Survey (ACS) Special Tabulations on Aging</p>
                  </div>
                </div>
                <div className="topic-list-item-4">
                  <div className="single-entry-3">
                    <Checkbox43 className="instance-node-7" />
                    <p className="ACL-administration-2">Centers for Independent Living Program PPR</p>
                  </div>
                </div>
                <div className="topic-list-item-4">
                  <div className="single-entry-3">
                    <Checkbox43 className="instance-node-7" />
                    <p className="ACL-administration-2">State Independent Living Services Program PPR</p>
                  </div>
                </div>
              </>
            )}

            {level === "geo-type" && (
              <>
                <div className="topic-list-item-3">
                  <div className="single-entry-3">
                    <Checkbox72 className="instance-node-7" />
                    <div className="div-8">States and Territories</div>
                  </div>
                </div>
                <div className="topic-list-item-4">
                  <div className="single-entry-3">
                    <Checkbox43 className="instance-node-7" />
                    <div className="ACL-administration">Regions</div>
                  </div>
                </div>
                <div className="topic-list-item-4">
                  <div className="single-entry-3">
                    <Checkbox43 className="instance-node-7" />
                    <div className="ACL-administration">Tribal Organizations by State</div>
                  </div>
                </div>
                <div className="topic-list-item-4">
                  <div className="single-entry-3">
                    <Checkbox43 className="instance-node-7" />
                    <div className="ACL-administration">Tribal Organizations by Name</div>
                  </div>
                </div>
              </>
            )}
          </div>
        </>
      )}

      {!expanded && ["data-set", "geo-type", "topic"].includes(level) && (
        <>
          <div className="services-3">
            {level === "topic" && <>Services</>}

            {level === "geo-type" && <>Select Geographic Data Type</>}

            {level === "data-set" && <>Select Data Set(s)</>}
          </div>
          <IconAdd className="icon-10" color="#1B1B1B" />
        </>
      )}

      {level === "state-radio" && !selected && <Radio1 className="instance-node-7" color="#71767A" />}

      {(!info || !selected) &&
        (!info || level === "state-radio") &&
        (!selected || dataAvailable === "yes") &&
        (!selected || level === "sub-topic") &&
        (dataAvailable === "yes" || level === "state-radio") &&
        ["sub-topic", "state-radio"].includes(level) && (
          <div className="check-label-info-5">
            {level === "state-radio" && <div className="text-wrapper-18">{text}</div>}

            {level === "sub-topic" && !selected && <SelectedNo className="instance-node-6" />}

            {selected && <Checkbox72 className="instance-node-6" />}

            {level === "sub-topic" && <div className={`sub-topic-5 ${subTopicClassName}`}>{text1}</div>}
          </div>
        )}

      {!info && level === "sub-topic" && dataAvailable === "yes" && (
        <>
          <>{visible1 && <>{override}</>}</>
          <>
            {visible && (
              <>
                <>
                  {!expanded && <Icon27 className="icon-9" color="#71767A" />}

                  {expanded && <Icon21 className="icon-9" color="#71767A" />}
                </>
              </>
            )}
          </>
        </>
      )}
    </div>
  );
};

Topics.propTypes = {
  level: PropTypes.oneOf([
    "geo-type",
    "state",
    "data-set",
    "release-note",
    "state-radio",
    "sub-subtopic-no-info",
    "sub-topic-no-info",
    "sub-topic",
    "suv-subtopic",
    "topic",
  ]),
  selected: PropTypes.bool,
  info: PropTypes.bool,
  expanded: PropTypes.bool,
  dataAvailable: PropTypes.oneOf([
    "unavailable-with-selected-data-set-unavailable-with-selected-data-set",
    "yes",
    "no",
  ]),
  text: PropTypes.string,
  text1: PropTypes.string,
  visible: PropTypes.bool,
  visible1: PropTypes.bool,
};
