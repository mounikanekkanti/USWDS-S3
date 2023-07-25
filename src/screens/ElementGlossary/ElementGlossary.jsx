import React from "react";
import { FaqFilter } from "../../components/FaqFilter";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Intro } from "../../components/Intro";
import { QuickSearchFilter } from "../../components/QuickSearchFilter";
import { Icon21 } from "../../icons/Icon21";
import { Icon27 } from "../../icons/Icon27";
import { IconArrowForward } from "../../icons/IconArrowForward";
import { Vector } from "../../icons/Vector";
import "./style.css";

export const ElementGlossary = () => {
  return (
    <div className="element-glossary">
      <div className="div-9">
        <div className="glossary-2">
          <Intro
            className="design-component-instance-node-2"
            leftClassName="intro-instance"
            releaseNotesDataClassName="intro-2"
            text="Glossary of Terms"
            text1="The Program Data Portal is an on-line query system based on related data files and surveys, and includes population characteristics from the Census Bureau for comparison purposes. Data Portal is an on-line query system based on related data files and surveys, and includes population characteristics from the Census Bureau for comparison purposes."
            theAgingClassName="intro-2"
            type="default"
          />
          <div className="FAQ-topic-menu">
            <div className="frame-74">
              <div className="text-wrapper-19">Glossary</div>
              <p className="text-wrapper-20">Use the menu below see definitions.</p>
              <QuickSearchFilter
                className="design-component-instance-node-3"
                icon={<Vector className="vector-instance" />}
                property1="default"
                text="Type to find a word or phrase to search"
              />
              <FaqFilter
                className="FAQ-filter-instance"
                frameClassName="FAQ-filter-2"
                frameClassNameOverride="FAQ-filter-3"
                frameDivClassName="design-component-instance-node-3"
                frameExpandedNoClassName="design-component-instance-node-3"
                frameExpandedNoClassNameOverride="design-component-instance-node-3"
                frameExpandedYesClassName="design-component-instance-node-3"
                frameExpandedYesClassNameOverride="design-component-instance-node-3"
                frameFaqFilterTopicIcon={<IconArrowForward className="icon-77" color="#71767A" />}
                frameFaqFilterTopicIcon1={<Icon21 className="icon-14" color="#565C65" />}
                frameFaqFilterTopicIcon10={<Icon27 className="icon-14" color="#565C65" />}
                frameFaqFilterTopicIcon11={<Icon27 className="icon-14" color="#565C65" />}
                frameFaqFilterTopicIcon12={<Icon27 className="icon-14" color="#565C65" />}
                frameFaqFilterTopicIcon13={<Icon27 className="icon-14" color="#565C65" />}
                frameFaqFilterTopicIcon14={<Icon27 className="icon-14" color="#565C65" />}
                frameFaqFilterTopicIcon2={<IconArrowForward className="icon-77" color="#71767A" />}
                frameFaqFilterTopicIcon3={<IconArrowForward className="icon-77" color="#71767A" />}
                frameFaqFilterTopicIcon4={<IconArrowForward className="icon-77" color="#005EA2" />}
                frameFaqFilterTopicIcon5={<IconArrowForward className="icon-77" color="#71767A" />}
                frameFaqFilterTopicIcon6={<IconArrowForward className="icon-77" color="#71767A" />}
                frameFaqFilterTopicIcon7={<IconArrowForward className="icon-77" color="#71767A" />}
                frameFaqFilterTopicIcon8={<Icon27 className="icon-14" color="#565C65" />}
                frameFaqFilterTopicIcon9={<Icon27 className="icon-14" color="#565C65" />}
                frameFaqFilterTopicLevel="selected"
                frameFaqFilterTopicLevelSubjectClassName="FAQ-filter-4"
                frameFaqFilterTopicText="Annotated"
                frameFaqFilterTopicText1="Americans with Disabilities Act"
                frameFaqFilterTopicText2="Administration"
                frameFaqFilterTopicText3="Aggregated"
                frameFaqFilterTopicText4="Authorship"
                frameFaqFilterTopicText5="Alone - Living Alone"
                frameFaqFilterTopicWrapperClassName="design-component-instance-node-3"
                frameFaqFilterTopicWrapperClassNameOverride="design-component-instance-node-3"
                override={<IconArrowForward className="icon-77" color="#71767A" />}
                type="glossary"
              />
            </div>
            <div className="frame-75">
              <div className="frame-76">
                <div className="frame-77">
                  <div className="frame-78">
                    <div className="text-wrapper-21">Definition</div>
                    <div className="text-wrapper-22">Administration</div>
                  </div>
                  <div className="flexcontainer">
                    <div className="text">
                      <span className="text-wrapper-23">
                        The Administration was created around the fundamental principle that older adults and people of
                        all ages with disabilities should be able to live where they choose, with the people they
                        choose, and with the ability to participate fully in their communities.
                        <br />
                      </span>
                    </div>
                    <div className="text">
                      <span className="text-wrapper-23">
                        By funding services and supports provided primarily by networks of community-based
                        organizations, and with investments in research, education, and innovation, helps make this
                        principle a reality for millions of Americans.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="frame-79">
              <div className="text-wrapper-24">Downloads</div>
              <div className="frame-80">
                <div className="text-wrapper-25">Glossary</div>
                <p className="text-wrapper-26">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed odio purus, placerat a euismod a,
                  fringilla in felis. Phasellus porta dui et magna pretium, sit amet venenatis lacus dictum.
                </p>
                <div className="frame-81">
                  <div className="text-wrapper-27">PDF</div>
                  <div className="text-wrapper-27">DOCX</div>
                  <div className="text-wrapper-27">CSV</div>
                  <div className="text-wrapper-27">XML</div>
                  <div className="text-wrapper-27">XLSX</div>
                </div>
              </div>
              <div className="frame-80">
                <div className="text-wrapper-25">Terms of Service</div>
                <p className="text-wrapper-26">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed odio purus, placerat a euismod a,
                  fringilla in felis. Phasellus porta dui et magna pretium, sit amet venenatis lacus dictum.
                </p>
                <div className="frame-81">
                  <div className="text-wrapper-27">View</div>
                  <div className="text-wrapper-27">PDF</div>
                  <div className="text-wrapper-27">DOCX</div>
                </div>
              </div>
            </div>
          </div>
          <Footer className="design-component-instance-node-2" hasReturnToTop={false} />
        </div>
        <div className="home-resources-FAQ-wrapper">
          <p className="home-resources-FAQ">Home&nbsp;&nbsp;&gt;&nbsp;&nbsp;Resources&nbsp;&nbsp;&gt;&nbsp;&nbsp;FAQ</p>
        </div>
        <Header
          breadcrumbs="off"
          className="header-2-0"
          groupClassName="header-2"
          navLinkText="FAQ"
          navLinkVisible={false}
          navLinkVisible1={false}
          quickSearchSearchGroupClassName="header-instance"
          quickSearchSearchOverlapClassName="header-2-0-instance"
          to="/09-contact"
          to1="/01-home-page"
          to2="/07-release-notes"
          to3="/03-data-set-3"
          to4="/08-data-explorer"
          to5="/10-glossary"
          version="MVP"
        />
        <img className="frame-82" alt="Frame" src="/img/frame-300.png" />
      </div>
    </div>
  );
};
