/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const ContactBlock = ({
  className,
  text = "AGID Related Inquiries",
  loremIpsumDolorClassName,
  text1 = "webaddress.gov",
  text2 = "email@addess.gov",
  text3 = "(123) 456-7890",
  href,
}) => {
  return (
    <div className={`contact-block ${className}`}>
      <div className="AGID-related">{text}</div>
      <p className={`lorem-ipsum-dolor ${loremIpsumDolorClassName}`}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed odio purus, placerat a euismod a, fringilla in
        felis. Phasellus porta dui et magna pretium, sit amet venenatis lacus dictum.
      </p>
      <div className="webaddress-gov">{text1}</div>
      <a className="text-wrapper-10" href={href} rel="noopener noreferrer" target="_blank">
        {text2}
      </a>
      <div className="text-wrapper-10">{text3}</div>
    </div>
  );
};

ContactBlock.propTypes = {
  text: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
  text3: PropTypes.string,
  href: PropTypes.string,
};
