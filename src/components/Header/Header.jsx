/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import { Line4 } from "../../icons/Line4";
import { NavLink } from "../NavLink";
import { QuickSearch } from "../QuickSearch";
import { TopBanner } from "../TopBanner";
import "./style.css";

export const Header = ({
  breadcrumbs,
  version,
  className,
  quickSearchSearchGroupClassName,
  quickSearchSearchOverlapClassName,
  navLinkVisible,
  groupClassName,
  navLinkText = "Resources",
  navLinkVisible1,
  to,
  to1,
  to2,
  to3,
  to4,
  to5,
}) => {
  return (
    <div className={`header ${className}`}>
      <TopBanner className="top-banner-instance" />
      <div className="top-menu">
        <div className="right-side-menu">
          <NavLink
            className="nav-link-instance"
            current={false}
            frameClassName="nav-link-3"
            linkClassName="nav-link-2"
            state="normal"
            text="Help"
            type="link"
          />
          <NavLink
            className="nav-link-instance"
            current={false}
            frameClassName="nav-link-3"
            linkClassName="nav-link-2"
            state="normal"
            text="Contact"
            type="link"
          />
        </div>
      </div>
      <div className={`logo-and-search ${version}`}>
        {version === "v-2" && (
          <>
            <div className="logo-block">
              <div className="AGID-title">
                <div className="aging-independence">Administration</div>
              </div>
            </div>
            <div className="spacer" />
          </>
        )}

        {version === "MVP" && <div className="administration">Administration</div>}

        <QuickSearch
          className="quick-search-instance"
          quickSearchClassName="quick-search-3"
          searchGroupClassName={`${
            version === "MVP" && breadcrumbs === "on"
              ? "class"
              : version === "v-2"
              ? "class-2"
              : quickSearchSearchGroupClassName
          }`}
          searchOverlapClassName={`${
            breadcrumbs === "on" || version === "v-2" ? "class-3" : quickSearchSearchOverlapClassName
          }`}
          searchVector4StyleOverrideClassName="quick-search-2"
        />
      </div>
      <div className="main-menu">
        <Line4 className="line" />
        <Line4 className="line" />
        <div className="main-menu">
          <Line4 className="line" />
          <Line4 className="line" />
          <div className="main-menu">
            <Line4 className="line" />
            <div className="menu-wrapper">
              <div className="menu">
                <NavLink
                  className="nav-link-4"
                  current={false}
                  sectionClassName="nav-link-5"
                  state="normal"
                  text1="Home"
                  type="accordion"
                  visible={false}
                />
                <Link className="nav-link-wrapper" to={to2}>
                  <NavLink
                    className="nav-link-6"
                    current={false}
                    sectionClassName="nav-link-5"
                    state="normal"
                    text1="Release Notes"
                    type="accordion"
                    visible={false}
                  />
                </Link>
                <NavLink
                  className="nav-link-4"
                  current={false}
                  sectionClassName="nav-link-5"
                  state="normal"
                  text1="Search by Topics"
                  type="accordion"
                />
                <NavLink
                  className="nav-link-4"
                  current={false}
                  sectionClassName="nav-link-5"
                  state="normal"
                  text1="Data Sets"
                  type="accordion"
                  visible={breadcrumbs === "off" ? navLinkVisible : undefined}
                />
                <NavLink
                  className="nav-link-4"
                  current={false}
                  sectionClassName="nav-link-5"
                  state="normal"
                  text1="Data Explorer"
                  type="accordion"
                  visible={false}
                />
                <NavLink
                  className="nav-link-4"
                  current={false}
                  sectionClassName="nav-link-5"
                  state="normal"
                  text1="Reports"
                  type="accordion"
                />
                <Link
                  className={`nav-link-instance-wrapper ${breadcrumbs === "off" ? groupClassName : undefined}`}
                  to={to5}
                >
                  <NavLink
                    className="nav-link-6"
                    current={false}
                    sectionClassName="nav-link-5"
                    state="normal"
                    text1={breadcrumbs === "on" ? "Resources" : navLinkText}
                    type="accordion"
                    visible={breadcrumbs === "off" ? navLinkVisible1 : undefined}
                  />
                </Link>
              </div>
            </div>
            <Line4 className="line-4" />
          </div>
        </div>
      </div>
      {breadcrumbs === "on" && (
        <div className="home-programs-center-wrapper">
          <p className="home-programs-center">
            Home&nbsp;&nbsp;&gt;&nbsp;&nbsp;Programs&nbsp;&nbsp; &gt;&nbsp;&nbsp;Center for Independent Living
          </p>
        </div>
      )}
    </div>
  );
};

Header.propTypes = {
  breadcrumbs: PropTypes.oneOf(["off", "on"]),
  version: PropTypes.oneOf(["v-2", "MVP"]),
  navLinkVisible: PropTypes.bool,
  navLinkText: PropTypes.string,
  navLinkVisible1: PropTypes.bool,
  to: PropTypes.string,
  to1: PropTypes.string,
  to2: PropTypes.string,
  to3: PropTypes.string,
  to4: PropTypes.string,
  to5: PropTypes.string,
};
