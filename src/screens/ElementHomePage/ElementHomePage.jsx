import React from "react";
import { Link } from "react-router-dom";
import { Icon150 } from "../../icons/Icon150";
import { Icon38 } from "../../icons/Icon38";
import { Line4 } from "../../icons/Line4";
import { Search6 } from "../../icons/Search6";
import "./style.css";

export const ElementHomePage = () => {
  return (
    <div className="element-home-page">
      <div className="div-2">
        <img className="img" alt="Homepage" src="/img/homepage.png" />
        <div className="header-2">
          <div className="banner-content-wrapper">
            <div className="banner-content-2">
              <img className="us-flag-small-2" alt="Us flag small" src="/img/us-flag-small.png" />
              <div className="content-2">
                <p className="text-wrapper-4">An official website of the United States government</p>
                <div className="overlap-group-wrapper">
                  <div className="overlap-group-2">
                    <div className="text-wrapper-5">Here’s how you know</div>
                    <Icon38 className="icon-38" color="var(--colors-primary-primary)" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="right-side-menu-wrapper">
          <div className="right-side-menu-2 logo-img">
            <div className="nav-link-4">
                <div className="frame">
                  <img src="/img/logo.png" alt="" className="coverImg" />
                </div>
              </div>
              </div>
            <div className="right-side-menu-2">
              <div className="nav-link-4">
                <div className="link-wrapper">
                  <div className="link-2">Help</div>
                </div>
              </div>
              <Link className="nav-link-4" to="/08">
                <div className="link-wrapper">
                  <div className="link-2">Contact</div>
                </div>
              </Link>
            </div>
          </div>
          <div className="logo-and-search-2">
            <h1 className="text-wrapper-6">Administration</h1>
            <div className="quick-search-2">
              <div className="text-wrapper-7">Quick Search</div>
              <Search6 className="search-6" />
            </div>
          </div>
          <div className="main-menu-2">
            <Line4 className="line-3" />
            <Line4 className="line-3" />
            <div className="main-menu-2">
              <Line4 className="line-3" />
              <Line4 className="line-3" />
              <div className="main-menu-2">
                <Line4 className="line-3" />
                <div className="main-menu-3">
                  <div className="menu-2">
                    <div className="nav-link-5">
                      <div className="frame-5">
                        <div className="section-3">Home</div>
                      </div>
                    </div>
                    <Link className="nav-link-12" to="/06">
                      <div className="frame-35">
                        <div className="section-6">Release Notes</div>
                      </div>
                    </Link>
                    <div className="nav-link-5">
                      <div className="frame-5">
                        <div className="section-3">Search by Topics</div>
                        <Icon150 className="icon-150" color="#565C65" />
                      </div>
                    </div>
                    <Link className="nav-link-12" to="/05">
                      <div className="frame-35">
                        <div className="section-6">Data Sets</div>
                      </div>
                    </Link>
                    <Link className="nav-link-5" to="/07">
                      <div className="frame-5">
                        <div className="section-3">Data Explorer</div>
                      </div>
                    </Link>
                    <div className="nav-link-5">
                      <div className="frame-5">
                        <div className="section-3">Reports</div>
                        <Icon150 className="icon-150" color="#565C65" />
                      </div>
                    </div>
                    <Link className="nav-link-12" to="/09">
                      <div className="frame-35">
                        <div className="section-6">FAQ</div>
                      </div>
                    </Link>
                  </div>
                </div>
                <Line4 className="line-5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
