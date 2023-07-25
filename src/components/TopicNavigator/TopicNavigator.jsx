/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Icon256 } from "../../icons/Icon256";
import { Icon257 } from "../../icons/Icon257";
import { IconArrowBack } from "../../icons/IconArrowBack";
import { IconShare } from "../../icons/IconShare";
import { Vector38 } from "../../icons/Vector38";
import { ButtonBigIcon } from "../ButtonBigIcon";
import { DateInput } from "../DateInput";
import { LoadMore } from "../LoadMore";
import { ResultsFilter } from "../ResultsFilter";
import { SortBy } from "../SortBy";
import { TopicCardGrid } from "../TopicCardGrid";
import { TopicFilter } from "../TopicFilter";
import { TopicFilters } from "../TopicFilters";
import { View } from "../View";
import "./style.css";

export const TopicNavigator = ({
  view,
  content,
  type,
  className,
  text = "Release Notes",
  topicCardGridText = "ACL Special Tabulations",
  topicCardGridText1 = "ACL Special Tabulations",
  topicCardGridText2 = "ACL Special Tabulations",
  topicCardGridText3 = "ACL Special Tabulations",
  topicCardGridText4 = "ACL Special Tabulations",
  topicCardGridText5 = "ACL Special Tabulations",
  topicCardGridText6 = "ACL Special Tabulations",
  topicCardGridText7 = "ACL Special Tabulations",
  topicCardGridText8 = "ACL Special Tabulations",
  topicCardGridText9 = "ACL Special Tabulations",
  topicCardGridText10 = "ACL Special Tabulations",
  topicCardGridText11 = "ACL Special Tabulations",
}) => {
  return (
    <div className={`topic-navigator ${view} ${content} type-6-${type} ${className}`}>
      {type === "topic" && (
        <TopicFilters
          className="topic-filters-instance"
          property1="default"
          topicFilterQuickSearchFilterIcon={<Vector38 className="vector-18" color="#565C65" />}
          topicFilterSubjectReleaseClassName={`${view === "list" && "topic-filter-instance"} ${
            content === "none" && "class-14"
          }`}
        />
      )}

      {content === "results" && type === "release-notes" && (
        <div className="frame-25">
          <div className="release-notes-2">{text}</div>
          <p className="administration-i">Use the filters below to find Release Notes.</p>
          <div className="frame-26">
            <DateInput
              className="date-input-instance"
              hint={false}
              iconCalendarTodayColor="#005EA2"
              open={false}
              textInputInputClassName="date-input-3"
              textInputTextInputLabel="Start Data"
              textInputTextInputLabelClassName="date-input-2"
            />
            <DateInput
              className="date-input-instance"
              hint={false}
              iconCalendarTodayColor="#005EA2"
              open={false}
              textInputInputClassName="date-input-3"
              textInputTextInputLabel="End Data"
              textInputTextInputLabelClassName="date-input-2"
            />
          </div>
          <TopicFilter className="topic-filter-instance" selected={false} subject="release-notes" />
        </div>
      )}

      {view === "grid" && (
        <div className="frame-27">
          <div className="frame-28">
            {content === "results" && (
              <>
                <div className="types-and-sort">
                  <div className="element-results">76 Results</div>
                  <View view="grid" />
                </div>
                <SortBy
                  className="instance-node-3"
                  expanded={false}
                  text={type === "release-notes" ? "Sort by Type" : undefined}
                />
              </>
            )}

            {content === "none" && <View className="instance-node-3" view="grid" />}
          </div>
          <div className="frame-29">
            {content === "results" && (
              <>
                <div className="column-2">
                  {type === "topic" && (
                    <>
                      <ResultsFilter checked="off" className="instance-node-4" type="grid-view" />
                      <ResultsFilter checked="off" className="instance-node-4" type="grid-view" />
                      <ResultsFilter checked="off" className="instance-node-4" type="grid-view" />
                    </>
                  )}

                  {type === "release-notes" && (
                    <>
                      <TopicCardGrid className="instance-node-4" text={topicCardGridText} type="release-notes" />
                      <TopicCardGrid className="instance-node-4" text={topicCardGridText1} type="release-notes" />
                      <TopicCardGrid className="instance-node-4" text={topicCardGridText2} type="release-notes" />
                    </>
                  )}
                </div>
                <div className="column-2">
                  <TopicCardGrid
                    className="instance-node-4"
                    text={topicCardGridText3}
                    type={type === "release-notes" ? "release-notes" : "data-report"}
                  />
                  <TopicCardGrid
                    className="instance-node-4"
                    text={topicCardGridText4}
                    type={type === "release-notes" ? "release-notes" : "data-report"}
                  />
                  <TopicCardGrid
                    className="instance-node-4"
                    text={topicCardGridText5}
                    type={type === "release-notes" ? "release-notes" : "codebooks"}
                  />
                </div>
                <div className="column-2">
                  <TopicCardGrid className="instance-node-4" text={topicCardGridText6} type="release-notes" />
                  <TopicCardGrid className="instance-node-4" text={topicCardGridText7} type="release-notes" />
                  <TopicCardGrid
                    className="instance-node-4"
                    text={topicCardGridText8}
                    type={type === "release-notes" ? "release-notes" : "codebooks"}
                  />
                </div>
                <div className="column-2">
                  <TopicCardGrid
                    className="instance-node-4"
                    text={topicCardGridText9}
                    type={type === "release-notes" ? "release-notes" : "codebooks"}
                  />
                  <TopicCardGrid
                    className="instance-node-4"
                    text={topicCardGridText10}
                    type={type === "release-notes" ? "release-notes" : "codebooks"}
                  />
                  <TopicCardGrid
                    className="instance-node-4"
                    text={topicCardGridText11}
                    type={type === "release-notes" ? "release-notes" : "codebooks"}
                  />
                </div>
                <LoadMore className="load-more-instance" />
              </>
            )}

            {content === "none" && (
              <div className="frame-30">
                <IconArrowBack className="icon-arrow-back" color="#005EA2" />
                <p className="select-a-content">Select a Content Type to see results</p>
              </div>
            )}
          </div>
        </div>
      )}

      {content === "results" && view === "list" && (
        <>
          <div className="frame-31">
            <div className="element-results-wrapper">
              <div className="element-results">76 Results</div>
            </div>
            <div className="frame-32">
              <div className="topic-card-list">
                <div className="frame-33">
                  <div className="frame-34">
                    <div className="div-6">
                      {type === "release-notes" && <>{text}</>}

                      {type === "topic" && <>Data Set</>}
                    </div>
                    <p className="version">
                      {type === "release-notes" && <>Version 2.64: 2023 NSOAAP LTCOP</>}

                      {type === "topic" && <>National Survey of Older Americans Act Participants (NSOAAP)</>}
                    </p>
                    <p className="p-2">
                      {type === "release-notes" && (
                        <>
                          Brief data report summary Lacinia in quis nisl, Ut mattis turpis in, massa , massa dapibus
                          posuere, Aliquam scelerisque ut mattis turpis infringilla diam.
                        </>
                      )}

                      {type === "topic" && (
                        <>
                          Brief Release note summary Lacinia in quis nisl, Ut mattis turpis in, massa , massa dapibus
                          posuere, Aliquam scelerisque ut mattis turpis infringilla diam.
                        </>
                      )}
                    </p>
                  </div>
                  <div className="frame-35">
                    <div className="frame-36">
                      <div className="frame-37">
                        <div className="topics-i">
                          {type === "topic" && <>Topics</>}

                          {type === "release-notes" && <>Data Set</>}
                        </div>
                        {type === "release-notes" && <div className="administration-i">Administration</div>}

                        {type === "topic" && <p className="p-2">Aging, Elder Care, Meal Services, Community Living</p>}
                      </div>
                    </div>
                  </div>
                  <div className="frame-38">
                    <div className="div-7">
                      {type === "release-notes" && <>Date</>}

                      {type === "topic" && <>Years</>}
                    </div>
                    <div className="element-i">
                      {type === "release-notes" && <>1/24/23</>}

                      {type === "topic" && <>2019-2022</>}
                    </div>
                  </div>
                </div>
              </div>
              <div className="topic-card-list">
                <div className="frame-33">
                  <div className="frame-34">
                    <div className="div-6">
                      {type === "release-notes" && <>{text}</>}

                      {type === "topic" && <>Data Set</>}
                    </div>
                    <p className="version">
                      {type === "release-notes" && <>Version 2.64: 2023 NSOAAP LTCOP</>}

                      {type === "topic" && <>National Survey of Older Americans Act Participants (NSOAAP)</>}
                    </p>
                    <p className="p-2">
                      {type === "release-notes" && (
                        <>
                          Brief data report summary Lacinia in quis nisl, Ut mattis turpis in, massa , massa dapibus
                          posuere, Aliquam scelerisque ut mattis turpis infringilla diam.
                        </>
                      )}

                      {type === "topic" && (
                        <>
                          Brief Release note summary Lacinia in quis nisl, Ut mattis turpis in, massa , massa dapibus
                          posuere, Aliquam scelerisque ut mattis turpis infringilla diam.
                        </>
                      )}
                    </p>
                  </div>
                  <div className="frame-39">
                    <div className="frame-40">
                      <div className="frame-41">
                        <div className="topics-2">
                          {type === "topic" && <>Topics</>}

                          {type === "release-notes" && <>Data Set</>}
                        </div>
                        {type === "release-notes" && <div className="administration-i">Administration</div>}

                        {type === "topic" && <p className="p-2">Aging, Elder Care, Meal Services, Community Living</p>}
                      </div>
                    </div>
                  </div>
                  <div className="frame-38">
                    <div className="div-7">
                      {type === "release-notes" && <>Date</>}

                      {type === "topic" && <>Years</>}
                    </div>
                    <div className="element-i">
                      {type === "release-notes" && <>1/24/23</>}

                      {type === "topic" && <>2019-2022</>}
                    </div>
                  </div>
                </div>
              </div>
              <div className="topic-card-list">
                <div className="frame-33">
                  <div className="frame-34">
                    <div className="div-6">
                      {type === "release-notes" && <>{text}</>}

                      {type === "topic" && <>Data Set</>}
                    </div>
                    <p className="version">
                      {type === "release-notes" && <>Version 2.64: 2023 NSOAAP LTCOP</>}

                      {type === "topic" && <>National Survey of Older Americans Act Participants (NSOAAP)</>}
                    </p>
                    <p className="p-2">
                      {type === "release-notes" && (
                        <>
                          Brief data report summary Lacinia in quis nisl, Ut mattis turpis in, massa , massa dapibus
                          posuere, Aliquam scelerisque ut mattis turpis infringilla diam.
                        </>
                      )}

                      {type === "topic" && (
                        <>
                          Brief Release note summary Lacinia in quis nisl, Ut mattis turpis in, massa , massa dapibus
                          posuere, Aliquam scelerisque ut mattis turpis infringilla diam.
                        </>
                      )}
                    </p>
                  </div>
                  <div className="frame-42">
                    <div className="frame-43">
                      <div className="frame-44">
                        <div className="topics-3">
                          {type === "topic" && <>Topics</>}

                          {type === "release-notes" && <>Data Set</>}
                        </div>
                        {type === "release-notes" && <div className="administration-i">Administration</div>}

                        {type === "topic" && <p className="p-2">Aging, Elder Care, Meal Services, Community Living</p>}
                      </div>
                    </div>
                  </div>
                  <div className="frame-38">
                    <div className="div-7">
                      {type === "release-notes" && <>Date</>}

                      {type === "topic" && <>Years</>}
                    </div>
                    <div className="element-i">
                      {type === "release-notes" && <>1/24/23</>}

                      {type === "topic" && <>2019-2022</>}
                    </div>
                  </div>
                </div>
              </div>
              <div className="topic-card-list">
                <div className="frame-33">
                  <div className="frame-34">
                    <div className="div-6">
                      {type === "topic" && <>Data Report</>}

                      {type === "release-notes" && <>{text}</>}
                    </div>
                    {type === "release-notes" && <p className="version">Version 2.64: 2023 NSOAAP LTCOP</p>}

                    {type === "topic" && <div className="version">Data Report Name</div>}

                    <p className="p-2">
                      Brief data report summary Lacinia in quis nisl, Ut mattis turpis in, massa , massa dapibus
                      posuere, Aliquam scelerisque ut mattis turpis infringilla diam.
                    </p>
                  </div>
                  <div className="frame-45">
                    <div className="frame-46">
                      <div className="frame-46">
                        <div className="source">
                          {type === "topic" && <>Source</>}

                          {type === "release-notes" && <>Data Set</>}
                        </div>
                        <div className="administration-i">Administration</div>
                      </div>
                    </div>
                    {type === "topic" && (
                      <div className="frame-47">
                        <div className="frame-48">
                          <div className="frame-49">
                            <div className="div-7">Topics</div>
                            <p className="p-2">Aging, Elder Care, Meal Services, Community Living</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="frame-38">
                    <div className="div-7">
                      {type === "release-notes" && <>Date</>}

                      {type === "topic" && <>Years</>}
                    </div>
                    <div className="element-i">
                      {type === "release-notes" && <>1/24/23</>}

                      {type === "topic" && <>2019-2022</>}
                    </div>
                  </div>
                </div>
              </div>
              <div className="topic-card-list">
                <div className="frame-33">
                  <div className="frame-34">
                    <div className="div-6">
                      {type === "topic" && <>Data Report</>}

                      {type === "release-notes" && <>{text}</>}
                    </div>
                    {type === "release-notes" && <p className="version">Version 2.64: 2023 NSOAAP LTCOP</p>}

                    {type === "topic" && <div className="version">Data Report Name</div>}

                    <p className="p-2">
                      Brief data report summary Lacinia in quis nisl, Ut mattis turpis in, massa , massa dapibus
                      posuere, Aliquam scelerisque ut mattis turpis infringilla diam.
                    </p>
                  </div>
                  <div className="frame-50">
                    <div className="frame-46">
                      <div className="frame-46">
                        <div className="source-i">
                          {type === "topic" && <>Source</>}

                          {type === "release-notes" && <>Data Set</>}
                        </div>
                        <div className="administration-i">Administration</div>
                      </div>
                    </div>
                    {type === "topic" && (
                      <div className="frame-47">
                        <div className="frame-48">
                          <div className="frame-49">
                            <div className="div-7">Topics</div>
                            <p className="p-2">Aging, Elder Care, Meal Services, Community Living</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="frame-38">
                    <div className="div-7">
                      {type === "release-notes" && <>Date</>}

                      {type === "topic" && <>Years</>}
                    </div>
                    <div className="element-i">
                      {type === "release-notes" && <>1/24/23</>}

                      {type === "topic" && <>2019-2022</>}
                    </div>
                  </div>
                </div>
              </div>
              <div className="topic-card-list">
                <div className="frame-33">
                  <div className="frame-34">
                    <div className="div-6">{text}</div>
                    <p className="version">Version 2.64: 2023 NSOAAP LTCOP</p>
                    <p className="p-2">
                      Brief data report summary Lacinia in quis nisl, Ut mattis turpis in, massa , massa dapibus
                      posuere, Aliquam scelerisque ut mattis turpis infringilla diam.
                    </p>
                  </div>
                  <div className="frame-51">
                    <div className="frame-46">
                      <div className="frame-46">
                        <div className="data-set-i">Data Set</div>
                        <div className="administration-i">Administration</div>
                      </div>
                    </div>
                  </div>
                  <div className="frame-38">
                    <div className="div-7">Date</div>
                    <div className="element-i">1/24/23</div>
                  </div>
                </div>
              </div>
              <div className="topic-card-list">
                <div className="frame-33">
                  <div className="frame-34">
                    <div className="div-6">{text}</div>
                    <p className="version">Version 2.64: 2023 NSOAAP LTCOP</p>
                    <p className="p-2">
                      Brief data report summary Lacinia in quis nisl, Ut mattis turpis in, massa , massa dapibus
                      posuere, Aliquam scelerisque ut mattis turpis infringilla diam.
                    </p>
                  </div>
                  <div className="frame-52">
                    <div className="frame-46">
                      <div className="frame-46">
                        <div className="data-set-i">Data Set</div>
                        <div className="administration-i">Administration</div>
                      </div>
                    </div>
                  </div>
                  <div className="frame-38">
                    <div className="div-7">Date</div>
                    <div className="element-i">1/24/23</div>
                  </div>
                </div>
              </div>
              <div className="topic-card-list">
                <div className="frame-33">
                  <div className="frame-34">
                    <div className="div-6">
                      {type === "release-notes" && <>{text}</>}

                      {type === "topic" && <>Briefs &amp; Blogs</>}
                    </div>
                    <p className="version">
                      {type === "release-notes" && <>Version 2.64: 2023 NSOAAP LTCOP</>}

                      {type === "topic" && <>Blog Post Headline About Various Topics</>}
                    </p>
                    <p className="p-2">
                      Brief data report summary Lacinia in quis nisl, Ut mattis turpis in, massa , massa dapibus
                      posuere, Aliquam scelerisque ut mattis turpis infringilla diam.
                    </p>
                  </div>
                  <div className="frame-53">
                    <div className="frame-46">
                      <div className="frame-46">
                        <div className="data-set-4">
                          {type === "release-notes" && <>Data Set</>}

                          {type === "topic" && <>Topics</>}
                        </div>
                        <div className="administration-i">
                          {type === "release-notes" && <>Administration</>}

                          {type === "topic" && <>Community Living, Disability</>}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="frame-38">
                    <div className="div-7">Date</div>
                    <div className="element-i">1/24/23</div>
                  </div>
                </div>
              </div>
              <div className="topic-card-list">
                <div className="frame-33">
                  <div className="frame-34">
                    <div className="div-6">
                      {type === "release-notes" && <>{text}</>}

                      {type === "topic" && <>Briefs &amp; Blogs</>}
                    </div>
                    <p className="version">
                      {type === "release-notes" && <>Version 2.64: 2023 NSOAAP LTCOP</>}

                      {type === "topic" && <>Blog Post Headline About Various Topics</>}
                    </p>
                    <p className="p-2">
                      Brief data report summary Lacinia in quis nisl, Ut mattis turpis in, massa , massa dapibus
                      posuere, Aliquam scelerisque ut mattis turpis infringilla diam.
                    </p>
                  </div>
                  <div className="frame-54">
                    <div className="frame-46">
                      <div className="frame-46">
                        <div className="data-set-5">
                          {type === "release-notes" && <>Data Set</>}

                          {type === "topic" && <>Topics</>}
                        </div>
                        <div className="administration-i">
                          {type === "release-notes" && <>Administration</>}

                          {type === "topic" && <>Community Living, Disability</>}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="frame-38">
                    <div className="div-7">Date</div>
                    <div className="element-i">1/24/23</div>
                  </div>
                </div>
              </div>
              <LoadMore className="load-more-2" />
            </div>
          </div>
          <div className="frame-55">
            <View className="instance-node-3" view="list" />
            <SortBy className="instance-node-3" expanded={false} text="Sort by Newest" />
          </div>
        </>
      )}

      {content === "notes" && (
        <div className="frame-56">
          <div className="frame-57">
            <div className="frame-58">
              <div className="frame-59">
                <p className="version-2">Version 2.64: 2022 State Performance Report (SPR) Update</p>
                <p className="this-release">
                  This release includes the following updates:
                  <br />
                  <br />
                  This release featured the addition of the 14th National Survey of OAA Participants data. Survey data
                  are available in the Custom Tables section of AGID. Additional information related to the data is
                  available in the Data Files section of AGID.
                  <br />
                  In 2014, questions about sexual orientation taken directly from the Center for Disease Control and
                  Prevention’s National Health Interview Survey (NHIS) were introduced to the National Survey of Older
                  Americans Act Participants (NSOAAP). The first year, the sexual orientation data were analyzed, the
                  Administration (ACL) found the responses to be so small and the standard errors so large that ACL was
                  not confident in the reliability of the estimates and therefore did not make the data available for
                  viewing or downloading.1 As is standard practice with many other federal surveys, ACL decided to
                  collect data over five years to see if when combined, the data could be used to produce more reliable
                  estimates.
                  <br />
                  In 2018, ACL asked the statisticians at Westat (the contractors fielding the NSOAAP) to analyze five
                  years of aggregated data (2014-2018) to see if a large enough sample size was created to reduce
                  standard errors and provide reliable estimates. Westat found that only NSOAAP’s Caregiver survey had a
                  large enough cell size and small enough standard error to provide a reliable estimate (less than 1
                  percent) of survey participants reporting that they are lesbian, gay, or bisexual. In 2019, an
                  aggregated six-year data file (2014-2019) was analyzed producing an estimate with a relative standard
                  error too high to report a reliable estimate.
                  <br />
                  ACL is currently supporting an ad hoc panel of the National Academies of Sciences, Engineering, and
                  Medicine on ‘Measuring Sex, Gender Identity, and Sexual Orientation for the National Institutes of
                  Health.’ This panel is reviewing current measures and methodological issues related to measuring sex,
                  gender identity, and sexual orientation in surveys, research studies, and administrative data. Once
                  the recommendation report from this panel is released in December 2021, ACL will use the information
                  to review and possibly revise or replace the current sexual orientation questions.
                  <br />1 See Department of Health Agency Standards for Reporting Data with Small Numbers at
                  https://www.doh.wa.gov/portals/1/documents/1500/smallnumbers.pdf.
                  <br />
                  Note: NSOAAP 2016-2019: Error Detected
                  <br />
                  There is an issue affecting the age group stratification within the National Survey of OAA
                  Participants (NSOAAP) Custom Tables data for the years 2016-2019. The only affected stratification is
                  “Age Group”, located within the Demographics grouping for the following services: Home Delivered
                  Meals, Congregate Meals, Homemaker, Transportation, and Case Management. The breakout of survey
                  responses and frequencies based on “Age Group” is incorrect and should not be used at this time. No
                  other stratifications are affected by this issue. A correction is expected by the summer of
                  2021.Please note that the NSOAAP survey data files located in the Data Files section have the correct
                  age group data.
                  <br />
                  Factsheets on the Resources page:
                  <br />
                  LTCOP Volunteers;
                  <br />
                  LTCOP Characteristics; and
                  <br />
                  LTCOP Challenges.
                </p>
                <div className="relates">
                  <div className="state-performance-wrapper">
                    <div className="state-performance">State Performance Reports (SPR)</div>
                  </div>
                </div>
              </div>
              <div className="rows">
                <div className="load-more-3">
                  <IconArrowBack className="icon-255" color="#005EA2" />
                  <div className="back-to-results">Back to Results</div>
                </div>
                <div className="frame-60">
                  <div className="frame-61">
                    <ButtonBigIcon
                      className="button-big-icon-instance"
                      icon={<Icon256 className="icon-8" color="#005EA2" />}
                      playTheVideoClassName="button-big-icon-2"
                      size="big-icon"
                      state="default"
                      text="Print"
                    />
                    <ButtonBigIcon
                      className="button-big-icon-instance"
                      icon={<Icon257 className="icon-8" color="#005EA2" />}
                      playTheVideoClassName="button-big-icon-2"
                      size="big-icon"
                      state="default"
                      text="Save"
                    />
                    <ButtonBigIcon
                      className="button-big-icon-instance"
                      icon={<IconShare className="icon-8" color="#005EA2" />}
                      playTheVideoClassName="button-big-icon-2"
                      size="big-icon"
                      state="default"
                      text="Share"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="frame-62">
            <div className="frame-63">
              <div className="text-wrapper-17">Related Data Set</div>
              <ResultsFilter checked="off" className="instance-node-3" type="grid-view" />
            </div>
            <div className="frame-63">
              <div className="text-wrapper-17">Related Release Notes</div>
              <TopicCardGrid
                americanCommunityClassName="topic-card-grid-instance"
                className="topic-card-grid-2"
                text="ACL Special Tabulations"
                text1="Version 2.63: 2022 State Performance Report (SPR) Update"
                type="release-notes"
              />
              <TopicCardGrid
                className="instance-node-3"
                text="ACL Special Tabulations"
                text1="Version 2.62: 2023 NSOAAP LTCOP"
                type="release-notes"
              />
              <TopicCardGrid
                className="topic-card-grid-2"
                text="ACL Special Tabulations"
                text1="Version 2.62: 2023 NSOAAP LTCOP"
                type="release-notes"
              />
              <TopicCardGrid
                className="topic-card-grid-2"
                text="ACL Special Tabulations"
                text1="Version 2.61: 2023 NSOAAP LTCOP"
                type="release-notes"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

TopicNavigator.propTypes = {
  view: PropTypes.oneOf(["grid", "list"]),
  content: PropTypes.oneOf(["results", "notes", "none"]),
  type: PropTypes.oneOf(["release-notes", "topic"]),
  text: PropTypes.string,
  topicCardGridText: PropTypes.string,
  topicCardGridText1: PropTypes.string,
  topicCardGridText2: PropTypes.string,
  topicCardGridText3: PropTypes.string,
  topicCardGridText4: PropTypes.string,
  topicCardGridText5: PropTypes.string,
  topicCardGridText6: PropTypes.string,
  topicCardGridText7: PropTypes.string,
  topicCardGridText8: PropTypes.string,
  topicCardGridText9: PropTypes.string,
  topicCardGridText10: PropTypes.string,
  topicCardGridText11: PropTypes.string,
};
