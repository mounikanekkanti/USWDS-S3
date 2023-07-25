import React from "react";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Intro } from "../../components/Intro";
import { PageContactWrapper } from "../../components/PageContactWrapper";
import "./style.css";

export const ElementContact = () => {
  return (
    <div className="element-contact">
      <div className="div-11">
        <div className="contact-2">
          <Intro
            className="design-component-instance-node-4"
            leftClassName="intro-3"
            releaseNotesDataClassName="intro-4"
            text="Contact"
            text1="The Program Data Portal is an on-line query system based on related data files and surveys, and includes population characteristics from the Census Bureau for comparison purposes. Data Portal is an on-line query system based on related data files and surveys, and includes population characteristics from the Census Bureau for comparison purposes."
            theAgingClassName="intro-4"
            type="default"
          />
          <div className="section">
            <div className="frame-84">
              <p className="text-wrapper-29">Email feedback, requests and comments to:</p>
              <div className="text-wrapper-30">contact@gov.gov</div>
              <p className="text-wrapper-31">
                An Administration representative will read your message and respond to your email in 1-5 business days.
              </p>
            </div>
            <PageContactWrapper
              className="frame-797"
              contactBlockText="Administration Related Inquiries"
              contactBlockText1="Administration"
              contactBlockText2="eldercare.gov.gov"
              href="mailto:email@addess.gov"
              href1="mailto:email@addess.gov"
              page="contact"
            />
          </div>
          <Footer className="design-component-instance-node-4" hasReturnToTop={false} />
        </div>
        <div className="home-contact-wrapper">
          <div className="home-contact">Home&nbsp;&nbsp;&gt; Contact</div>
        </div>
        <Header
          breadcrumbs="off"
          className="header-7"
          groupClassName="header-10"
          navLinkText="FAQ"
          navLinkVisible={false}
          navLinkVisible1={false}
          quickSearchSearchGroupClassName="header-8"
          quickSearchSearchOverlapClassName="header-9"
          to="/09-contact"
          to1="/01-home-page"
          to2="/07-release-notes"
          to3="/03-data-set-3"
          to4="/08-data-explorer"
          to5="/10-glossary"
          version="MVP"
        />
        <div className="frame-85">
          <img className="coverimage-2" alt="Coverimage" src="/img/coverimage-1.png" />
          <div className="text-wrapper-32">Figma</div>
        </div>
      </div>
    </div>
  );
};
