import React from "react";
import { Link } from "react-router-dom";
import { Icon150 } from "../../icons/Icon150";
import { Icon38 } from "../../icons/Icon38";
import { Icon4 } from "../../icons/Icon4";
import { Line4 } from "../../icons/Line4";
import { Search6 } from "../../icons/Search6";
import "./style.css";

export const Element = () => {
  return (
    <div className="element">
      <div className="div">
        <img className="homepage" alt="Homepage" src="/img/homepage.png" />
        <div className="header">
          <div className="top-banner">
            <div className="banner-content">
              <img className="us-flag-small" alt="Us flag small" src="/img/us-flag-small.png" />
              <div className="content">
                <p className="text-wrapper">An official website of the United States government</p>
                <div className="here-s-how-you-know">
                  <div className="overlap-group">
                    <div className="text-wrapper-2">Here’s how you know</div>
                    <Icon38 className="icon" color="var(--colors-primary-primary)" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="top-menu">
          <div className="right-side-menu logo-img">
            <div className="nav-link">
                <div className="frame">
                  <img src="/img/logo.png" alt="" className="coverImg" />
                </div>
              </div>
              </div>
            <div className="right-side-menu">
              <div className="nav-link">
                <div className="frame">
                  <div className="link">Help</div>
                </div>
              </div>
              <Link className="nav-link" to="/08">
                <div className="frame">
                  <div className="link">Contact</div>
                </div>
              </Link>
            </div>
          </div>
          <div className="logo-and-search">
            <h1 className="h-1">Administration</h1>
            <div className="quick-search">
              <div className="text-wrapper-3">Quick Search</div>
              <Search6 className="search" />
            </div>
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
                    <Link className="frame-wrapper" to="/01-home-page">
                      <div className="frame-2">
                        <div className="section">Home</div>
                      </div>
                    </Link>
                    <Link className="nav-link-12" to="/06">
                      <div className="frame-35">
                        <div className="section-6">Release Notes</div>
                      </div>
                    </Link>
                    <div className="frame-wrapper">
                      <div className="frame-2">
                        <div className="section">Search by Topics</div>
                        <Icon150 className="icon-instance-node" color="#565C65" />
                      </div>
                    </div>
                    <Link className="nav-link-12" to="/05">
                      <div className="frame-35">
                        <div className="section-6">Data Sets</div>
                      </div>
                    </Link>
                    <Link className="frame-wrapper" to="/07">
                      <div className="frame-2">
                        <div className="section">Data Explorer</div>
                      </div>
                    </Link>
                    <div className="frame-wrapper">
                      <div className="frame-2">
                        <div className="section">Reports</div>
                        <Icon150 className="icon-instance-node" color="#565C65" />
                      </div>
                    </div>
                    <Link className="nav-link-12" to="/09">
                      <div className="frame-35">
                        <div className="section-6">FAQ</div>
                      </div>
                    </Link>
                  </div>
                </div>
                <Line4 className="line-4" />
              </div>
            </div>
          </div>
        </div>
        <div className="dropdown-menu">
          <div className="dropdown-link">
            <div className="frame-3">
              <div className="frame-4">
                <div className="all-programs">Content Search</div>
                <p className="p">
                  Convallis turpis erat tempus, viverra aliquet. Nullam viverra nam auctor sit ipsum malesuada a, duis
                  volutpat.
                </p>
              </div>
              <div className="arrow-link">
                <div className="view-all-programs">Search for Content</div>
                <div className="icon-2" />
              </div>
            </div>
          </div>
          <div className="dropdown-link">
            <div className="frame-3">
              <div className="frame-4">
                <div className="all-programs">Briefs &amp; Blogs</div>
                <p className="p">
                  Convallis turpis erat tempus, viverra aliquet. Nullam viverra nam auctor sit ipsum malesuada a, duis
                  volutpat.
                </p>
              </div>
              <div className="arrow-link">
                <div className="view-all-programs">View all Articles</div>
                <div className="icon-2" />
              </div>
            </div>
          </div>
          <div className="dropdown-link">
            <div className="frame-3">
              <div className="frame-4">
                <div className="all-programs">Webinars</div>
                <p className="p">
                  Convallis turpis erat tempus, viverra aliquet. Nullam viverra nam auctor sit ipsum malesuada a, duis
                  volutpat.
                </p>
              </div>
              <div className="arrow-link">
                <div className="view-all-programs">View Webinars</div>
                <div className="icon-2" />
              </div>
            </div>
          </div>
          <div className="dropdown-link">
            <div className="frame-3">
              <div className="frame-4">
                <div className="all-programs">FAQ</div>
                <p className="p">
                  Convallis turpis erat tempus, viverra aliquet. Nullam viverra nam auctor sit ipsum malesuada a, duis
                  volutpat.
                </p>
              </div>
              <Link className="arrow-link" to="/09">
                <div className="view-all-programs">View FAQ</div>
                <div className="icon-2" />
              </Link>
            </div>
          </div>
          <div className="dropdown-link">
            <div className="frame-3">
              <div className="frame-4">
                <div className="all-programs">Glossary</div>
                <p className="p">
                  Convallis turpis erat tempus, viverra aliquet. Nullam viverra nam auctor sit ipsum malesuada a, duis
                  volutpat.
                </p>
              </div>
              <div className="arrow-link">
                <div className="view-all-programs">View all Articles</div>
                <div className="icon-2" />
              </div>
            </div>
          </div>
          <div className="dropdown-link">
            <div className="frame-3">
              <div className="frame-4">
                <div className="all-programs">Tutorials</div>
                <p className="p">
                  Convallis turpis erat tempus, viverra aliquet. Nullam viverra nam auctor sit ipsum malesuada a, duis
                  volutpat.
                </p>
              </div>
              <div className="arrow-link">
                <div className="view-all-programs">View all Articles</div>
                <div className="icon-2" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
