import React from "react";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { TopicNavigator } from "../../components/TopicNavigator";
import "./style.css";

export const ElementReleaseNotes = () => {
  return (
    <div className="element-release-notes">
      <div className="div-13">
        <div className="release-notes-3">
          <TopicNavigator
            className="design-component-instance-node-6"
            content="results"
            text="Search for Release Notes"
            topicCardGridText="Special Tabulations"
            topicCardGridText1="Special Tabulations"
            topicCardGridText10="Special Tabulations"
            topicCardGridText11="Special Tabulations"
            topicCardGridText2="Special Tabulations"
            topicCardGridText3="Special Tabulations"
            topicCardGridText4="Special Tabulations"
            topicCardGridText5="Special Tabulations"
            topicCardGridText6="Special Tabulations"
            topicCardGridText7="Special Tabulations"
            topicCardGridText8="Special Tabulations"
            topicCardGridText9="Special Tabulations"
            type="release-notes"
            view="grid"
          />
          <Footer className="design-component-instance-node-6" />
        </div>
        <div className="left-wrapper">
          <div className="left-2">
            <div className="h-1-wrapper">
              <h1 className="text-wrapper-54">Release Notes</h1>
            </div>
            <div className="the-program-data-wrapper">
              <p className="the-program-data">
                The Program Data Portal is an on-line query system based on related data files and surveys, and includes
                population characteristics from the Census Bureau for comparison purposes. Data Portal is an on-line
                query system based on related data files and surveys, and includes population characteristics from the
                Census Bureau for comparison purposes.
              </p>
            </div>
          </div>
        </div>
        <div className="frame-103">
          <p className="home-programs-center-3">Home&nbsp;&nbsp;&gt;&nbsp;&nbsp;Release Notes</p>
        </div>
        <Header
          breadcrumbs="off"
          className="header-15"
          groupClassName="header-18"
          navLinkText="FAQ"
          navLinkVisible={false}
          navLinkVisible1={false}
          quickSearchSearchGroupClassName="header-16"
          quickSearchSearchOverlapClassName="header-17"
          to="/09-contact"
          to1="/01-home-page"
          to2="/07-release-notes"
          to3="/03-data-set-3"
          to4="/08-data-explorer"
          to5="/10-glossary"
          version="MVP"
        />
        <div className="frame-104">
          <img className="coverimage-4" alt="Coverimage" src="/img/coverimage-1.png" />
          <div className="text-wrapper-55">Figma</div>
        </div>
      </div>
    </div>
  );
};
