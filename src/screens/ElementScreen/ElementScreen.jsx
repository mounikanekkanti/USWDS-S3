import React from "react";
import { Link } from "react-router-dom";
import { Icon150 } from "../../icons/Icon150";
import { Icon38 } from "../../icons/Icon38";
import { Icon4 } from "../../icons/Icon4";
import { Line4 } from "../../icons/Line4";
import { Search6 } from "../../icons/Search6";
import "./style.css";

export const ElementScreen = () => {
  return (
    <div className="element-screen">
      <div className="element-2">
        <img className="homepage-2" alt="Homepage" src="/img/homepage.png" />
        <div className="header-3">
          <div className="top-banner-2">
            <div className="banner-content-3">
              <img className="us-flag-small-3" alt="Us flag small" src="/img/us-flag-small.png" />
              <div className="content-3">
                <p className="text-wrapper-8">An official website of the United States government</p>
                <div className="here-s-how-you-know-2">
                  <div className="overlap-group-3">
                    <div className="text-wrapper-9">Here’s how you know</div>
                    <Icon38 className="icon-141" color="var(--colors-primary-primary)" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="top-menu-2">
          <div className="right-side-menu-3 logo-img">
            <div className="nav-link-7">
                <div className="frame-6">
                  <img src="/img/logo.png" alt="" className="coverImg" />
                </div>
              </div>
              </div>
            <div className="right-side-menu-3">
              <div className="nav-link-7">
                <div className="frame-6">
                  <div className="link-3">Help</div>
                </div>                                                                                                  
              </div>
              <Link className="nav-link-7" to="/08">
                <div className="frame-6">
                  <div className="link-3">Contact</div>
                </div>
              </Link>
            </div>
          </div>
          <div className="logo-and-search-3">
            <h1 className="text-wrapper-10">Administration</h1>
            <div className="quick-search-3">
              <div className="text-wrapper-11">Quick Search</div>
              <Search6 className="search-3" />
            </div>
          </div>
          <div className="main-menu-4">
            <Line4 className="line-1" />
            <Line4 className="line-1" />
            <div className="main-menu-4">
              <Line4 className="line-1" />
              <Line4 className="line-1" />
              <div className="main-menu-4">
                <Line4 className="line-1" />
                <Link className="main-menu-5" to="/01-home-page">
                  <div className="menu-3">
                    <Link className="nav-link-8" to="/01-home-page">
                      <div className="frame-7">
                        <div className="section-4">Home</div>
                      </div>
                    </Link>
                    <Link className="nav-link-12" to="/06">
                      <div className="frame-35">
                        <div className="section-6">Release Notes</div>
                      </div>
                    </Link>
                    <div className="nav-link-8">
                      <div className="frame-7">
                        <div className="section-4">Search by Topics</div>
                        <Icon150 className="icon-3" color="#565C65" />
                      </div>
                    </div>
                    <div className="nav-link-10">
                      <div className="frame-7">
                        <div className="section-5">Data Sets</div>
                      </div>
                    </div>
                    <Link className="nav-link-8" to="/07">
                      <div className="frame-7">
                        <div className="section-4">Data Explorer</div>
                      </div>
                    </Link>
                    <div className="nav-link-8">
                      <div className="frame-7">
                        <div className="section-4">Reports</div>
                        <Icon150 className="icon-3" color="#565C65" />
                      </div>
                    </div>
                    <Link className="nav-link-12" to="/09">
                      <div className="frame-35">
                        <div className="section-6">FAQ</div>
                      </div>
                    </Link>
                  </div>
                </Link>
                <Line4 className="line-2" />
              </div>
            </div>
          </div>
        </div>
        <div className="dropdown-menu-2">
          <div className="dropdown-link-2">
            <div className="frame-8">
              <div className="frame-9">
                <div className="text-wrapper-12">About the Data</div>
                <p className="convallis-turpis">
                  Convallis turpis erat tempus, viverra aliquet. Nullam viverra nam auctor sit ipsum malesuada a, duis
                  volutpat. Viverra aliquet.auctor sit ipsum malesuada a, duis volutpat.
                </p>
              </div>
              <Link className="nav-link-12" to="/05">
                      <div className="frame-35">
                        <div className="section-6">Data Sets</div>
                      </div>
                    </Link>
            </div>
          </div>
          <div className="frame-10">
            <div className="text-wrapper-12">Data Sets</div>
            <div className="frame-11">
              <div className="frame-12">
                <div className="text-wrapper-14">State Performance Reports (SPR)</div>
                <p className="text-wrapper-13">American Indian, Alaskan Native, and Native Hawaiian PPR</p>
                <p className="text-wrapper-13">National Ombudsman Reporting System (NORS)</p>
                <p className="text-wrapper-13">National Survey of Older Americans Act Participants (NSOAAP)</p>
              </div>
              <div className="frame-12">
                <p className="text-wrapper-14">American Community Survey (ACS) Demographic Data</p>
                <p className="text-wrapper-13">American Community Survey (ACS) Special Tabulations on Aging</p>
                <Link to="/04">
                  <p className="text-wrapper-13">Centers for Independent Living Data Set</p>
                </Link>
                <p className="text-wrapper-13">State Independent Living Services Program PPR</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
