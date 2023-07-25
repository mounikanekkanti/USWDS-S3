/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Topic } from "../Topic";
import "./style.css";

export const TopicSelected = ({ type, className }) => {
  return (
    <div className={`topic-selected ${className}`}>
      <div className="frame-66">
        <div className={`frame-67 ${type}`}>
          {(type === "content-types" ||
            type === "demographics" ||
            type === "geographic-type" ||
            type === "programs" ||
            type === "services" ||
            type === "states" ||
            type === "years") && (
            <>
              <Topic
                className={`${
                  type === "geographic-type"
                    ? "class-15"
                    : type === "states"
                    ? "class-16"
                    : type === "demographics"
                    ? "class-17"
                    : type === "years"
                    ? "class-18"
                    : type === "content-types"
                    ? "class-19"
                    : type === "programs"
                    ? "class-20"
                    : "class-21"
                }`}
                text={
                  type === "geographic-type"
                    ? "States &amp; Territories"
                    : type === "states"
                    ? "UT"
                    : type === "demographics"
                    ? "Ages 65-74"
                    : type === "years"
                    ? "2017"
                    : type === "content-types"
                    ? "State Profiles"
                    : type === "programs"
                    ? "Title VII"
                    : "Nutrition Services"
                }
                type="element"
              />
              <Topic
                className={`${
                  type === "content-types"
                    ? "class-22"
                    : type === "geographic-type"
                    ? "class-23"
                    : type === "states"
                    ? "class-24"
                    : type === "demographics"
                    ? "class-25"
                    : type === "years"
                    ? "class-26"
                    : "class-15"
                }`}
                text={
                  type === "programs"
                    ? "Title VI"
                    : type === "services"
                    ? "Congregate Meals"
                    : type === "geographic-type"
                    ? "National"
                    : type === "states"
                    ? "CO"
                    : type === "demographics"
                    ? "Minority"
                    : type === "years"
                    ? "2018"
                    : "Release Notes"
                }
                type="element"
              />
              <Topic
                className={`${type === "content-types" ? "class-15" : type === "programs" ? "class-27" : "topic-2"}`}
                text={
                  type === "programs"
                    ? "Title III"
                    : type === "services"
                    ? "Home Delivered Meals"
                    : type === "geographic-type"
                    ? "Tribal Organizations"
                    : type === "states"
                    ? "AZ"
                    : type === "demographics"
                    ? "Poverty"
                    : type === "years"
                    ? "2019"
                    : "Briefs &amp; Blogs"
                }
                type="element"
              />
            </>
          )}

          {["content-types", "programs"].includes(type) && (
            <>
              <Topic
                className={`${type === "programs" ? "class-28" : "class-29"}`}
                text={type === "programs" ? "ILS" : "Codebooks"}
                type="element"
              />
              <Topic
                className={`${type === "programs" ? "class-30" : "class-31"}`}
                text={type === "programs" ? "CIL" : "Reports"}
                type="element"
              />
              <Topic className="topic-2" text={type === "programs" ? "ACL" : "Data Sets"} type="element" />
            </>
          )}

          {type === "all-content-types" && <Topic text="All Content Types" type="element" />}
        </div>
      </div>
      <div className="clear-selections">Clear Selections</div>
    </div>
  );
};

TopicSelected.propTypes = {
  type: PropTypes.oneOf([
    "services",
    "programs",
    "demographics",
    "all-content-types",
    "years",
    "geographic-type",
    "states",
    "content-types",
  ]),
};
