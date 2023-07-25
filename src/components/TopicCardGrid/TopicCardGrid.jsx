/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const TopicCardGrid = ({
  type,
  className,
  text = "ACL Special Tabulations",
  americanCommunityClassName,
  text1 = "Version 2.64: 2023 NSOAAP LTCOP",
}) => {
  return (
    <div className={`topic-card-grid type-0-${type} ${className}`}>
      {(type === "briefs-and-blogs" ||
        type === "codebooks" ||
        type === "data-report" ||
        type === "data-set" ||
        type === "release-notes" ||
        type === "state-profiles" ||
        type === "tutorial" ||
        type === "webinar") && (
        <div className="frame-16">
          <div className="frame-17">
            <div className="frame-18">
              <div className="div-4">
                {type === "data-report" && <>Data Report</>}

                {type === "state-profiles" && <>State Profile</>}

                {type === "codebooks" && <>Codebook</>}

                {type === "data-set" && <>Data Set</>}

                {type === "release-notes" && <>Release Notes</>}

                {type === "briefs-and-blogs" && <>Briefs &amp; Blogs</>}

                {type === "webinar" && <>Webinar</>}

                {type === "tutorial" && <>Tutorials</>}
              </div>
              {["briefs-and-blogs", "codebooks", "data-set", "release-notes", "tutorial", "webinar"].includes(type) && (
                <p
                  className={`national-survey-of ${
                    ["briefs-and-blogs", "data-set", "release-notes", "tutorial", "webinar"].includes(type)
                      ? americanCommunityClassName
                      : undefined
                  }`}
                >
                  {type === "codebooks" && <>National Survey of Older Americans Act Participants (NSOAAP)</>}

                  {type === "data-set" && <>American Community Survey (ACS) Special Tabulations on Aging</>}

                  {type === "release-notes" && <>{text1}</>}

                  {type === "briefs-and-blogs" && <>Blog Article About Various Topics</>}

                  {type === "webinar" && <>AGID Year in Review 2022 Webinar</>}

                  {type === "tutorial" && <>How to Create a Custom Query</>}
                </p>
              )}

              {["data-report", "state-profiles"].includes(type) && (
                <div className={`data-report-name ${americanCommunityClassName}`}>
                  {type === "data-report" && <>Data Report Name</>}

                  {type === "state-profiles" && <>Alabama State Profile</>}
                </div>
              )}
            </div>
            <p className="p">
              Brief dataset summary Lacinia in quis nisl, Ut mattis turpis in, massa dapibus posuere, Aliquam
              scelerisque fringilla diam.
            </p>
          </div>
          <div className="frame-19">
            <div className="frame-18">
              <div className="years-2">
                {["codebooks", "data-report", "data-set", "state-profiles"].includes(type) && <>Years</>}

                {["briefs-and-blogs", "release-notes", "tutorial", "webinar"].includes(type) && <>Date</>}
              </div>
              <div className="div-5">
                {["codebooks", "data-report", "data-set", "state-profiles"].includes(type) && <>2019-2022</>}

                {["briefs-and-blogs", "release-notes", "tutorial", "webinar"].includes(type) && <>1/24/23</>}
              </div>
            </div>
            <div className="frame-20">
              <div className="data-set-3">
                {["codebooks", "release-notes"].includes(type) && <>Data Set</>}

                {["briefs-and-blogs", "data-report", "data-set", "state-profiles", "tutorial", "webinar"].includes(
                  type
                ) && <>Topics</>}
              </div>
              {["data-report", "data-set"].includes(type) && (
                <p className="p">Aging, Elder Care, Meal Services, Community Living</p>
              )}

              {["briefs-and-blogs", "codebooks", "release-notes", "state-profiles", "tutorial", "webinar"].includes(
                type
              ) && (
                <div className="div-5">
                  {["briefs-and-blogs", "release-notes", "webinar"].includes(type) && <>{text}</>}

                  {type === "state-profiles" && <>State Level Data</>}

                  {type === "tutorial" && <>Data Explorer</>}

                  {type === "codebooks" && <>NSOAAP</>}
                </div>
              )}
            </div>
          </div>
          {type === "codebooks" && (
            <div className="frame-21">
              <div className="div-4">Download Codebook:</div>
              <div className="frame-22">
                <div className="text-wrapper-14">PDF</div>
                <div className="text-wrapper-14">DOCX</div>
                <div className="text-wrapper-14">CSV</div>
                <div className="text-wrapper-14">XLSML</div>
              </div>
            </div>
          )}
        </div>
      )}

      {type === "data-report-image" && (
        <>
          <div className="rectangle-wrapper">
            <img className="rectangle-3" alt="Rectangle" src="/img/rectangle-828.png" />
          </div>
          <div className="frame-23">
            <div className="frame-17">
              <div className="frame-18">
                <div className="div-4">Data Report</div>
                <div className="data-report-name">Data Report Name</div>
              </div>
              <p className="p">
                Brief dataset summary Lacinia in quis nisl, Ut mattis turpis in, massa dapibus posuere, Aliquam
                scelerisque fringilla diam.
              </p>
            </div>
            <div className="frame-19">
              <div className="frame-18">
                <div className="text-wrapper-15">Years</div>
                <div className="div-5">2019-2022</div>
              </div>
              <div className="frame-24">
                <div className="text-wrapper-15">Topics</div>
                <p className="p">Aging, Elder Care, Meal Services, Community Living</p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

TopicCardGrid.propTypes = {
  type: PropTypes.oneOf([
    "briefs-and-blogs",
    "tutorial",
    "data-report-image",
    "data-set",
    "release-notes",
    "codebooks",
    "webinar",
    "state-profiles",
    "data-report",
  ]),
  text: PropTypes.string,
  text1: PropTypes.string,
};
