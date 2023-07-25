/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Icon311 } from "../../icons/Icon311";
import { Icon329 } from "../../icons/Icon329";
import { Icon458 } from "../../icons/Icon458";
import { IconAdd } from "../../icons/IconAdd";
import { Topic } from "../Topic";
import { TopicSelected } from "../TopicSelected";
import { Topics } from "../Topics";
import "./style.css";

export const DataElement = ({ category, expanded, tiles, className }) => {
  return (
    <div className={`data-element tiles-${tiles} category-${category} expanded-4-${expanded} ${className}`}>
      {(expanded || tiles) && (
        <div className="topic-3">
          <div className="frame-68">
            <div className="demographics-2">
              {category === "demographics" && <>Demographics</>}

              {category === "data-set" && <>Data Sets</>}

              {category === "geographic" && <>Geography</>}

              {category === "content-type" && <>Content Types</>}

              {category === "services" && <>Services</>}

              {category === "monetary" && <>Monetary / Funding</>}

              {category === "programs" && <>Programs</>}
            </div>
            <div className="element-28">
              {category === "demographics" && !expanded && <>[3/86]</>}

              {category === "content-type" && !expanded && <>[8/8]</>}

              {category === "services" && <>[0/43]</>}

              {["monetary", "programs"].includes(category) && <>[0/59]</>}

              {!expanded && category === "geographic" && <>[3/3]</>}

              {category === "data-set" && !expanded && <>[1/8]</>}

              {category === "demographics" && !tiles && <>[0/86]</>}

              {category === "data-set" && !tiles && <>[0/8]</>}

              {category === "geographic" && !tiles && <>[0/5]</>}

              {category === "content-type" && !tiles && <>[6/7]</>}
            </div>
            {!expanded && <IconAdd className="icon-12" color="#1B1B1B" />}

            {!tiles && <Icon311 className="icon-12" color="#1B1B1B" />}
          </div>
        </div>
      )}

      {(expanded || (tiles && category === "data-set")) && (
        <div className="category-drop-2">
          {!tiles && (
            <div className="frame-69">
              <div className="deselect-all-wrapper">
                <div className="deselect-all">Deselect All</div>
              </div>
              {category === "content-type" && (
                <Topics
                  className="instance-node-8"
                  dataAvailable="yes"
                  expanded={false}
                  info={false}
                  level="sub-topic"
                  selected
                  text1="All Content Types"
                  visible={false}
                  visible1={false}
                />
              )}

              <Topics
                className="instance-node-8"
                dataAvailable="yes"
                expanded={false}
                info={false}
                level="sub-topic"
                override={<Icon458 className="icon-13" color="#71767A" />}
                selected={false}
                text1={category === "content-type" ? "Data Sets" : "Select All"}
                visible={false}
              />
              {["content-type", "data-set", "geographic"].includes(category) && (
                <Topics
                  className="instance-node-8"
                  dataAvailable="yes"
                  expanded={false}
                  info={false}
                  level="sub-topic"
                  override={<Icon458 className="icon-13" color="#71767A" />}
                  selected={false}
                  text1={
                    category === "content-type"
                      ? "State Profiles"
                      : category === "geographic"
                      ? "National"
                      : "State Performance Reports (SPR)"
                  }
                  visible={false}
                />
              )}

              {category === "content-type" && (
                <>
                  <Topics
                    className="instance-node-8"
                    dataAvailable="yes"
                    expanded={false}
                    info={false}
                    level="sub-topic"
                    override={<Icon458 className="icon-13" color="#71767A" />}
                    selected={false}
                    text1="Reports"
                    visible={false}
                  />
                  <Topics
                    className="instance-node-8"
                    dataAvailable="yes"
                    expanded={false}
                    info={false}
                    level="sub-topic"
                    override={<Icon458 className="icon-13" color="#71767A" />}
                    selected={false}
                    text1="Release Notes"
                    visible={false}
                  />
                  <Topics
                    className="instance-node-8"
                    dataAvailable="yes"
                    expanded={false}
                    info={false}
                    level="sub-topic"
                    override={<Icon458 className="icon-13" color="#71767A" />}
                    selected={false}
                    text1="Codebooks"
                    visible={false}
                  />
                  <Topics
                    className="instance-node-8"
                    dataAvailable="yes"
                    expanded={false}
                    info={false}
                    level="sub-topic"
                    override={<Icon458 className="icon-13" color="#71767A" />}
                    selected={false}
                    text1="Briefs &amp; Blogs"
                    visible={false}
                  />
                  <Topics
                    className="instance-node-8"
                    dataAvailable="yes"
                    expanded={false}
                    info={false}
                    level="sub-topic"
                    override={<Icon458 className="icon-13" color="#71767A" />}
                    selected={false}
                    text1="Tutorials"
                    visible={false}
                  />
                </>
              )}

              {category === "data-set" && (
                <>
                  <Topics
                    className="instance-node-8"
                    dataAvailable="yes"
                    expanded={false}
                    info={false}
                    level="sub-topic"
                    override={<Icon329 className="icon-13" color="#71767A" />}
                    selected={false}
                    subTopicClassName="topics-instance"
                    text1="American Indian, Alaskan Native, and Native Hawaiian PPR"
                    visible={false}
                  />
                  <Topics
                    className="instance-node-8"
                    dataAvailable="yes"
                    expanded={false}
                    info={false}
                    level="sub-topic"
                    override={<Icon329 className="icon-13" color="#71767A" />}
                    selected={false}
                    subTopicClassName="topics-instance"
                    text1="National Ombudsman Reporting System (NORS)"
                    visible={false}
                  />
                  <Topics
                    className="instance-node-8"
                    dataAvailable="yes"
                    expanded={false}
                    info={false}
                    level="sub-topic"
                    override={<Icon329 className="icon-13" color="#71767A" />}
                    selected={false}
                    subTopicClassName="topics-instance"
                    text1="National Survey of Older Americans Act Participants (NSOAAP)"
                    visible={false}
                  />
                  <Topics
                    className="instance-node-8"
                    dataAvailable="yes"
                    expanded={false}
                    info={false}
                    level="sub-topic"
                    override={<Icon329 className="icon-13" color="#71767A" />}
                    selected={false}
                    subTopicClassName="topics-instance"
                    text1="American Community Survey (ACS) Demographic Data"
                    visible={false}
                  />
                  <Topics
                    className="instance-node-8"
                    dataAvailable="yes"
                    expanded={false}
                    info={false}
                    level="sub-topic"
                    override={<Icon329 className="icon-13" color="#71767A" />}
                    selected={false}
                    subTopicClassName="topics-instance"
                    text1="American Community Survey (ACS) Special Tabulations on Aging"
                    visible={false}
                  />
                  <Topics
                    className="instance-node-8"
                    dataAvailable="yes"
                    expanded={false}
                    info={false}
                    level="sub-topic"
                    override={<Icon329 className="icon-13" color="#71767A" />}
                    selected={false}
                    subTopicClassName="topics-instance"
                    text1="Centers for Independent Living Program PPR"
                    visible={false}
                  />
                  <Topics
                    className="instance-node-8"
                    dataAvailable="yes"
                    expanded={false}
                    info={false}
                    level="sub-topic"
                    override={<Icon329 className="icon-13" color="#71767A" />}
                    selected={false}
                    subTopicClassName="topics-instance"
                    text1="State Independent Living Services Program PPR"
                    visible={false}
                  />
                </>
              )}

              {category === "geographic" && (
                <div className="topic-group">
                  <Topics
                    className="instance-node-8"
                    dataAvailable="yes"
                    expanded={false}
                    info={false}
                    level="sub-topic"
                    override={<Icon329 className="icon-13" color="#71767A" />}
                    selected={false}
                    text1="States &amp; Territories [0/56]"
                  />
                </div>
              )}

              {["demographics", "geographic", "monetary", "programs", "services"].includes(category) && (
                <>
                  <Topic className="topic-4" text="Data element name" type="element" />
                  <Topic className="topic-4" text="Data element name" type="element" />
                  <Topic className="topic-4" text="Data element name" type="element" />
                </>
              )}

              {["demographics", "monetary", "programs", "services"].includes(category) && (
                <>
                  <Topic className="topic-4" text="Data element name" type="element" />
                  <Topic className="topic-4" text="Data element name" type="element" />
                  <Topic className="topic-4" text="Data element name" type="element" />
                  <Topic className="topic-4" text="Data element name" type="element" />
                </>
              )}

              {category === "demographics" && <Topic className="topic-4" text="Data element name" type="element" />}
            </div>
          )}

          {!expanded && <Topic text="State Performance Reports (SPR)" type="element" />}
        </div>
      )}

      {!expanded && !tiles && (
        <div className="topic-5">
          <div className="frame-68">
            <div className="demographics-2">
              {category === "demographics" && <>Demographics</>}

              {category === "data-set" && <>Data Sets</>}

              {category === "content-type" && <>Content Types</>}

              {category === "monetary" && <>Monetary / Funding</>}
            </div>
            <div className="element-28">
              {category === "demographics" && <>[0/86]</>}

              {["content-type", "data-set"].includes(category) && <>[0/8]</>}

              {category === "monetary" && <>[0/59]</>}
            </div>
            <IconAdd className="icon-12" color="#1B1B1B" />
          </div>
        </div>
      )}

      {((category === "content-type" && tiles) ||
        (category === "demographics" && tiles) ||
        (category === "geographic" && tiles) ||
        (category === "programs" && tiles) ||
        (category === "services" && tiles)) && (
        <TopicSelected
          className={`${category === "demographics" ? "class-32" : "instance-node-8"}`}
          type={
            category === "geographic"
              ? "geographic-type"
              : category === "demographics"
              ? "demographics"
              : category === "content-type"
              ? "all-content-types"
              : "services"
          }
        />
      )}

      {!expanded && category === "geographic" && <TopicSelected className="instance-node-8" type="states" />}
    </div>
  );
};

DataElement.propTypes = {
  category: PropTypes.oneOf([
    "services",
    "programs",
    "demographics",
    "data-set",
    "monetary",
    "content-type",
    "geographic",
  ]),
  expanded: PropTypes.bool,
  tiles: PropTypes.bool,
};
