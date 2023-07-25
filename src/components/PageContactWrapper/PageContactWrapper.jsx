/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { ArrowLink } from "../ArrowLink";
import { ContactBlock } from "../ContactBlock";
import "./style.css";

export const PageContactWrapper = ({
  page,
  className,
  contactBlockText = "AGID Related Inquiries",
  contactBlockText1 = "ACL",
  contactBlockText2 = "eldercare.acl.gov",
  href,
  href1,
}) => {
  return (
    <div className={`page-contact-wrapper ${className}`}>
      {page === "contact" && (
        <>
          <div className="contact-partners">Contact &amp; Partners</div>
          <ContactBlock
            className="contact-block-instance"
            href={href}
            loremIpsumDolorClassName="contact-block-2"
            text={contactBlockText}
            text1="webaddress.gov"
            text2="email@addess.gov"
            text3="(123) 456-7890"
          />
          <ContactBlock
            className="contact-block-instance"
            href={href1}
            loremIpsumDolorClassName="contact-block-2"
            text={contactBlockText1}
            text1="webaddress.gov"
            text2="email@addess.gov"
            text3="(123) 456-7890"
          />
        </>
      )}

      {page === "FAQ" && (
        <>
          <div className="contact-block-3">
            <div className="AGID-glossary">AGID Glossary</div>
            <p className="definitions-for">Definitions for common terms and acronyms used on the AGID site.</p>
            <ArrowLink
              className="arrow-link-instance"
              iconClassName="arrow-link-3"
              text="View Glossary"
              viewAllProgramsClassName="arrow-link-2"
            />
          </div>
          <div className="contact-partners-2">Contact &amp; Partners</div>
        </>
      )}

      <ContactBlock
        className="contact-block-instance"
        loremIpsumDolorClassName="contact-block-2"
        text={page === "contact" ? "Eldercare Locator" : "AGID Related Inquiries"}
        text1={page === "contact" ? "eldercare.acl.gov" : "webaddress.gov"}
        text2={page === "contact" ? "email@address.gov" : "email@addess.gov"}
        text3={page === "contact" ? "800-677-1116" : "(123) 456-7890"}
      />
      <ContactBlock
        className="contact-block-instance"
        loremIpsumDolorClassName="contact-block-2"
        text={page === "contact" ? "Census" : "ACL"}
        text1="webaddress.gov"
        text2={page === "contact" ? contactBlockText2 : "email@addess.gov"}
        text3={page === "contact" ? "800-677-1116" : "(123) 456-7890"}
      />
      {page === "FAQ" && (
        <>
          <ContactBlock
            className="contact-block-instance"
            loremIpsumDolorClassName="contact-block-2"
            text="Eldercare Locator"
            text1="eldercare.acl.gov"
            text2="email@address.gov"
            text3="800-677-1116"
          />
          <ContactBlock
            className="contact-block-instance"
            loremIpsumDolorClassName="contact-block-2"
            text="Census"
            text1="webaddress.gov"
            text2="eldercare.acl.gov"
            text3="800-677-1116"
          />
        </>
      )}
    </div>
  );
};

PageContactWrapper.propTypes = {
  page: PropTypes.oneOf(["FAQ", "contact"]),
  contactBlockText: PropTypes.string,
  contactBlockText1: PropTypes.string,
  contactBlockText2: PropTypes.string,
  href: PropTypes.string,
  href1: PropTypes.string,
};
