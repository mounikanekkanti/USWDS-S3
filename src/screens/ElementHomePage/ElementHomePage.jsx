import React from "react";
import { Header } from "../../components/Header";
import "./style.css";

export const ElementHomePage = () => {
  return (
    <div className="element-home-page">
      <div className="div-10">
        <img className="homepage" alt="Homepage" src="/img/homepage.png" />
        <Header
          breadcrumbs="off"
          className="header-3"
          groupClassName="header-6"
          navLinkText="FAQ"
          navLinkVisible={false}
          navLinkVisible1={false}
          quickSearchSearchGroupClassName="header-4"
          quickSearchSearchOverlapClassName="header-5"
          to="/09-contact"
          to2="/07-release-notes"
          to3="/03-data-set-3"
          to4="/08-data-explorer"
          to5="/10-glossary"
          version="MVP"
        />
        <div className="frame-83">
          <img className="coverimage" alt="Coverimage" src="/img/coverimage-1.png" />
          <div className="text-wrapper-28">Figma</div>
        </div>
      </div>
    </div>
  );
};
