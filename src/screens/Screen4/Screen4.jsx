import React from "react";
import { Link } from "react-router-dom";
import { Checkbox1 } from "../../icons/Checkbox1";
import { Checkbox67 } from "../../icons/Checkbox67";
import { Frame272 } from "../../icons/Frame272";
import { Icon150 } from "../../icons/Icon150";
import { Icon35 } from "../../icons/Icon35";
import { Icon36 } from "../../icons/Icon36";
import { Icon37 } from "../../icons/Icon37";
import { Icon38 } from "../../icons/Icon38";
import { Line4 } from "../../icons/Line4";
import { Search6 } from "../../icons/Search6";
import { Socials5 } from "../../icons/Socials5";
import "./style.css";

export const Screen4 = () => {
  return (
    <div className="screen-4">
      <div className="element-4">
        <div className="release-notes">
          <div className="intro">
            <div className="left">
              <div className="div-3">
                <h1 className="state-profiles">Release Notes</h1>
              </div>
              <div className="the-program-data-wrapper">
                <p className="the-program-data">
                  The Program Data Portal is an on-line query system based on related data files and surveys, and
                  includes population characteristics from the Census Bureau for comparison purposes. Data Portal is an
                  on-line query system based on related data files and surveys, and includes population characteristics
                  from the Census Bureau for comparison purposes.
                </p>
              </div>
            </div>
          </div>
          <div className="topic-navigator">
            <div className="frame-36">
              <div className="release-notes-2">Search for Release Notes</div>
              <p className="text-wrapper-46">Use the filters below to find Release Notes.</p>
              <div className="frame-37">
                <div className="date-input">
                  <div className="text-input">
                    <div className="text-input-label">Start Data</div>
                    <div className="input" />
                  </div>
                  <Frame272 className="icon-instance-node-2" />
                </div>
                <div className="date-input">
                  <div className="text-input">
                    <div className="text-input-label">End Data</div>
                    <div className="input" />
                  </div>
                  <Frame272 className="icon-instance-node-2" />
                </div>
              </div>
              <div className="topic-filter">
                <div className="frame-38">
                  <div className="frame-38">
                    <div className="list">
                      <div className="topic-group">
                        <div className="topics">
                          <div className="check-label-info">
                            <Checkbox67 className="checkbox" />
                            <div className="state-independent">View All Release Notes</div>
                          </div>
                        </div>
                      </div>
                      <div className="topic-group">
                        <div className="check-label-info-wrapper">
                          <div className="check-label-info">
                            <Checkbox1 className="checkbox" />
                            <div className="state-independent-2">State Performance Reports (SPR)</div>
                            <img className="checkbox" alt="Icon" src="/img/icon-27.png" />
                          </div>
                        </div>
                      </div>
                      <div className="topic-group">
                        <div className="check-label-info-wrapper">
                          <div className="check-label-info">
                            <Checkbox1 className="checkbox" />
                            <p className="text-wrapper-47">American Indian, Alaskan Native, and Native Hawaiian PPR</p>
                            <img className="checkbox" alt="Icon" src="/img/icon-27.png" />
                          </div>
                        </div>
                      </div>
                      <div className="topic-group">
                        <div className="check-label-info-wrapper">
                          <div className="check-label-info">
                            <Checkbox1 className="checkbox" />
                            <p className="text-wrapper-47">National Ombudsman Reporting System (NORS)</p>
                            <img className="checkbox" alt="Icon" src="/img/icon-27.png" />
                          </div>
                        </div>
                      </div>
                      <div className="topic-group">
                        <div className="check-label-info-wrapper">
                          <div className="check-label-info">
                            <Checkbox1 className="checkbox" />
                            <p className="text-wrapper-47">
                              National Survey of Older Americans Act Participants (NSOAAP)
                            </p>
                            <img className="checkbox" alt="Icon" src="/img/icon-27.png" />
                          </div>
                        </div>
                      </div>
                      <div className="topic-group">
                        <div className="check-label-info-wrapper">
                          <div className="check-label-info">
                            <Checkbox1 className="checkbox" />
                            <p className="text-wrapper-47">American Community Survey (ACS) Demographic Data</p>
                            <img className="checkbox" alt="Icon" src="/img/icon-27.png" />
                          </div>
                        </div>
                      </div>
                      <div className="topic-group">
                        <div className="check-label-info-wrapper">
                          <div className="check-label-info">
                            <Checkbox1 className="checkbox" />
                            <p className="text-wrapper-47">
                              American Community Survey (ACS) Special Tabulations on Aging
                            </p>
                            <img className="checkbox" alt="Icon" src="/img/icon-27.png" />
                          </div>
                        </div>
                      </div>
                      <div className="topic-group">
                        <div className="check-label-info-wrapper">
                          <div className="check-label-info">
                            <Checkbox1 className="checkbox" />
                            <p className="text-wrapper-47">Centers for Independent Living Program PPR</p>
                            <img className="checkbox" alt="Icon" src="/img/icon-27.png" />
                          </div>
                        </div>
                      </div>
                      <div className="topic-group">
                        <div className="check-label-info-wrapper">
                          <div className="check-label-info">
                            <Checkbox1 className="checkbox" />
                            <p className="text-wrapper-47">State Independent Living Services Program PPR</p>
                            <img className="checkbox" alt="Icon" src="/img/icon-27.png" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="frame-39">
              <div className="frame-40">
                <div className="types-and-sort">
                  <div className="text-wrapper-48">76 Results</div>
                  <div className="view">
                    <div className="results-filter">
                      <div className="check-label">
                        <div className="text-wrapper-49">List View</div>
                        <Icon35 className="icon-5" />
                      </div>
                    </div>
                    <div className="check-label-wrapper">
                      <div className="check-label">
                        <div className="text-wrapper-50">Grid View</div>
                        <Icon36 className="icon-5" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="sort-by">
                  <div className="text-wrapper-51">Sort by Type</div>
                  <Icon37 className="icon-5" color="#71767A" />
                </div>
              </div>
              <div className="frame-41">
                <div className="div-4">
                  <div className="topic-card-grid">
                    <div className="frame-42">
                      <div className="div-3">
                        <div className="frame-43">
                          <div className="text-wrapper-52">Release Notes</div>
                          <p className="text-wrapper-53">Version 2.64: 2023 NSOAAP LTCOP</p>
                        </div>
                        <p className="text-wrapper-54">
                          Brief dataset summary Lacinia in quis nisl, Ut mattis turpis in, massa dapibus posuere,
                          Aliquam scelerisque fringilla diam.
                        </p>
                      </div>
                      <div className="frame-44">
                        <div className="frame-43">
                          <div className="text-wrapper-55">Date</div>
                          <div className="text-wrapper-56">1/24/23</div>
                        </div>
                        <div className="frame-43">
                          <div className="text-wrapper-55">Data Set</div>
                          <div className="text-wrapper-56">Special Tabulations</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="topic-card-grid">
                    <div className="frame-42">
                      <div className="div-3">
                        <div className="frame-43">
                          <div className="text-wrapper-52">Release Notes</div>
                          <p className="text-wrapper-53">Version 2.64: 2023 NSOAAP LTCOP</p>
                        </div>
                        <p className="text-wrapper-54">
                          Brief dataset summary Lacinia in quis nisl, Ut mattis turpis in, massa dapibus posuere,
                          Aliquam scelerisque fringilla diam.
                        </p>
                      </div>
                      <div className="frame-44">
                        <div className="frame-43">
                          <div className="text-wrapper-55">Date</div>
                          <div className="text-wrapper-56">1/24/23</div>
                        </div>
                        <div className="frame-43">
                          <div className="text-wrapper-55">Data Set</div>
                          <div className="text-wrapper-56">Special Tabulations</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="topic-card-grid">
                    <div className="frame-42">
                      <div className="div-3">
                        <div className="frame-43">
                          <div className="text-wrapper-52">Release Notes</div>
                          <p className="text-wrapper-53">Version 2.64: 2023 NSOAAP LTCOP</p>
                        </div>
                        <p className="text-wrapper-54">
                          Brief dataset summary Lacinia in quis nisl, Ut mattis turpis in, massa dapibus posuere,
                          Aliquam scelerisque fringilla diam.
                        </p>
                      </div>
                      <div className="frame-44">
                        <div className="frame-43">
                          <div className="text-wrapper-55">Date</div>
                          <div className="text-wrapper-56">1/24/23</div>
                        </div>
                        <div className="frame-43">
                          <div className="text-wrapper-55">Data Set</div>
                          <div className="text-wrapper-56">Special Tabulations</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="div-4">
                  <div className="topic-card-grid">
                    <div className="frame-42">
                      <div className="div-3">
                        <div className="frame-43">
                          <div className="text-wrapper-52">Release Notes</div>
                          <p className="text-wrapper-53">Version 2.64: 2023 NSOAAP LTCOP</p>
                        </div>
                        <p className="text-wrapper-54">
                          Brief dataset summary Lacinia in quis nisl, Ut mattis turpis in, massa dapibus posuere,
                          Aliquam scelerisque fringilla diam.
                        </p>
                      </div>
                      <div className="frame-44">
                        <div className="frame-43">
                          <div className="text-wrapper-55">Date</div>
                          <div className="text-wrapper-56">1/24/23</div>
                        </div>
                        <div className="frame-43">
                          <div className="text-wrapper-55">Data Set</div>
                          <div className="text-wrapper-56">Special Tabulations</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="topic-card-grid">
                    <div className="frame-42">
                      <div className="div-3">
                        <div className="frame-43">
                          <div className="text-wrapper-52">Release Notes</div>
                          <p className="text-wrapper-53">Version 2.64: 2023 NSOAAP LTCOP</p>
                        </div>
                        <p className="text-wrapper-54">
                          Brief dataset summary Lacinia in quis nisl, Ut mattis turpis in, massa dapibus posuere,
                          Aliquam scelerisque fringilla diam.
                        </p>
                      </div>
                      <div className="frame-44">
                        <div className="frame-43">
                          <div className="text-wrapper-55">Date</div>
                          <div className="text-wrapper-56">1/24/23</div>
                        </div>
                        <div className="frame-43">
                          <div className="text-wrapper-55">Data Set</div>
                          <div className="text-wrapper-56">Special Tabulations</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="topic-card-grid">
                    <div className="frame-42">
                      <div className="div-3">
                        <div className="frame-43">
                          <div className="text-wrapper-52">Release Notes</div>
                          <p className="text-wrapper-53">Version 2.64: 2023 NSOAAP LTCOP</p>
                        </div>
                        <p className="text-wrapper-54">
                          Brief dataset summary Lacinia in quis nisl, Ut mattis turpis in, massa dapibus posuere,
                          Aliquam scelerisque fringilla diam.
                        </p>
                      </div>
                      <div className="frame-44">
                        <div className="frame-43">
                          <div className="text-wrapper-55">Date</div>
                          <div className="text-wrapper-56">1/24/23</div>
                        </div>
                        <div className="frame-43">
                          <div className="text-wrapper-55">Data Set</div>
                          <div className="text-wrapper-56">Special Tabulations</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="div-4">
                  <div className="topic-card-grid">
                    <div className="frame-42">
                      <div className="div-3">
                        <div className="frame-43">
                          <div className="text-wrapper-52">Release Notes</div>
                          <p className="text-wrapper-53">Version 2.64: 2023 NSOAAP LTCOP</p>
                        </div>
                        <p className="text-wrapper-54">
                          Brief dataset summary Lacinia in quis nisl, Ut mattis turpis in, massa dapibus posuere,
                          Aliquam scelerisque fringilla diam.
                        </p>
                      </div>
                      <div className="frame-44">
                        <div className="frame-43">
                          <div className="text-wrapper-55">Date</div>
                          <div className="text-wrapper-56">1/24/23</div>
                        </div>
                        <div className="frame-43">
                          <div className="text-wrapper-55">Data Set</div>
                          <div className="text-wrapper-56">Special Tabulations</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="topic-card-grid">
                    <div className="frame-42">
                      <div className="div-3">
                        <div className="frame-43">
                          <div className="text-wrapper-52">Release Notes</div>
                          <p className="text-wrapper-53">Version 2.64: 2023 NSOAAP LTCOP</p>
                        </div>
                        <p className="text-wrapper-54">
                          Brief dataset summary Lacinia in quis nisl, Ut mattis turpis in, massa dapibus posuere,
                          Aliquam scelerisque fringilla diam.
                        </p>
                      </div>
                      <div className="frame-44">
                        <div className="frame-43">
                          <div className="text-wrapper-55">Date</div>
                          <div className="text-wrapper-56">1/24/23</div>
                        </div>
                        <div className="frame-43">
                          <div className="text-wrapper-55">Data Set</div>
                          <div className="text-wrapper-56">Special Tabulations</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="topic-card-grid">
                    <div className="frame-42">
                      <div className="div-3">
                        <div className="frame-43">
                          <div className="text-wrapper-52">Release Notes</div>
                          <p className="text-wrapper-53">Version 2.64: 2023 NSOAAP LTCOP</p>
                        </div>
                        <p className="text-wrapper-54">
                          Brief dataset summary Lacinia in quis nisl, Ut mattis turpis in, massa dapibus posuere,
                          Aliquam scelerisque fringilla diam.
                        </p>
                      </div>
                      <div className="frame-44">
                        <div className="frame-43">
                          <div className="text-wrapper-55">Date</div>
                          <div className="text-wrapper-56">1/24/23</div>
                        </div>
                        <div className="frame-43">
                          <div className="text-wrapper-55">Data Set</div>
                          <div className="text-wrapper-56">Special Tabulations</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="div-4">
                  <div className="topic-card-grid">
                    <div className="frame-42">
                      <div className="div-3">
                        <div className="frame-43">
                          <div className="text-wrapper-52">Release Notes</div>
                          <p className="text-wrapper-53">Version 2.64: 2023 NSOAAP LTCOP</p>
                        </div>
                        <p className="text-wrapper-54">
                          Brief dataset summary Lacinia in quis nisl, Ut mattis turpis in, massa dapibus posuere,
                          Aliquam scelerisque fringilla diam.
                        </p>
                      </div>
                      <div className="frame-44">
                        <div className="frame-43">
                          <div className="text-wrapper-55">Date</div>
                          <div className="text-wrapper-56">1/24/23</div>
                        </div>
                        <div className="frame-43">
                          <div className="text-wrapper-55">Data Set</div>
                          <div className="text-wrapper-56">Special Tabulations</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="topic-card-grid">
                    <div className="frame-42">
                      <div className="div-3">
                        <div className="frame-43">
                          <div className="text-wrapper-52">Release Notes</div>
                          <p className="text-wrapper-53">Version 2.64: 2023 NSOAAP LTCOP</p>
                        </div>
                        <p className="text-wrapper-54">
                          Brief dataset summary Lacinia in quis nisl, Ut mattis turpis in, massa dapibus posuere,
                          Aliquam scelerisque fringilla diam.
                        </p>
                      </div>
                      <div className="frame-44">
                        <div className="frame-43">
                          <div className="text-wrapper-55">Date</div>
                          <div className="text-wrapper-56">1/24/23</div>
                        </div>
                        <div className="frame-43">
                          <div className="text-wrapper-55">Data Set</div>
                          <div className="text-wrapper-56">Special Tabulations</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="topic-card-grid">
                    <div className="frame-42">
                      <div className="div-3">
                        <div className="frame-43">
                          <div className="text-wrapper-52">Release Notes</div>
                          <p className="text-wrapper-53">Version 2.64: 2023 NSOAAP LTCOP</p>
                        </div>
                        <p className="text-wrapper-54">
                          Brief dataset summary Lacinia in quis nisl, Ut mattis turpis in, massa dapibus posuere,
                          Aliquam scelerisque fringilla diam.
                        </p>
                      </div>
                      <div className="frame-44">
                        <div className="frame-43">
                          <div className="text-wrapper-55">Date</div>
                          <div className="text-wrapper-56">1/24/23</div>
                        </div>
                        <div className="frame-43">
                          <div className="text-wrapper-55">Data Set</div>
                          <div className="text-wrapper-56">Special Tabulations</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="load-more">
                  <div className="text-wrapper-57">Load More</div>
                  <Icon38 className="icon-141-instance" color="var(--colors-primary-primary)" />
                </div>
              </div>
            </div>
          </div>
          <div className="footer-2">
            <div className="return-to-top-wrapper">
              <div className="return-to-top-2">
                <div className="group-11">
                  <div className="overlap-group-6">
                    <div className="text-wrapper-58">Return to top</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="primary-links-2">
              <div className="footer-primary-link-2">
                <div className="text-wrapper-59">Legal</div>
              </div>
              <div className="footer-primary-link-2">
                <div className="text-wrapper-59">Accessibility</div>
              </div>
              <div className="footer-primary-link-2">
                <div className="text-wrapper-59">Privacy</div>
              </div>
              <div className="footer-primary-link-2">
                <div className="text-wrapper-59">Cookies</div>
              </div>
              <div className="footer-primary-link-2">
                <div className="text-wrapper-59">Account</div>
              </div>
            </div>
            <div className="contact-wrapper">
              <div className="contact-2">
                <Socials5 className="icon-instance-node-2" />
                <div className="agency-contact-2">
                  <div className="text-wrapper-60">Contact</div>
                  <div className="group-12">
                    <div className="frame-45">
                      <div className="text-wrapper-61">(202) 401-4634</div>
                      <div className="text-wrapper-61">info@gov.gov</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="site-map-2">
              <div className="frame-46">
                <div className="column-2">
                  <div className="column-2">
                    <div className="column-3">
                      <div className="discover-2">
                        <div className="text-wrapper-62">Programs</div>
                        <div className="footer-link-wrapper">
                          <div className="footer-link-3">All Programs</div>
                        </div>
                        <div className="footer-link-wrapper">
                          <div className="footer-link-3">Center for Independent Living</div>
                        </div>
                        <div className="footer-link-wrapper">
                          <div className="footer-link-3">Independent Living Services</div>
                        </div>
                        <div className="footer-link-wrapper">
                          <p className="footer-link-3">Title III - State Programs</p>
                        </div>
                        <div className="footer-link-wrapper">
                          <p className="footer-link-3">Title VI - Native Americans</p>
                        </div>
                        <div className="footer-link-wrapper">
                          <p className="footer-link-3">Title VII - Long Term Care Ombudsman</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="frame-47">
                <div className="column-2">
                  <div className="discover-2">
                    <div className="text-wrapper-62">Topics</div>
                    <div className="footer-link-wrapper">
                      <div className="footer-link-3">Topic Navigator</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="frame-46">
                <div className="column-2">
                  <div className="column-2">
                    <div className="discover-2">
                      <div className="text-wrapper-62">Data</div>
                      <div className="footer-link-wrapper">
                        <div className="footer-link-3">About&nbsp;&nbsp;the Data</div>
                      </div>
                      <div className="footer-link-wrapper">
                        <div className="footer-link-3">Data Products</div>
                      </div>
                      <div className="footer-link-wrapper">
                        <div className="footer-link-3">Data Sets</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="frame-47">
                <div className="column-2">
                  <div className="discover-2">
                    <div className="text-wrapper-62">Data Tools</div>
                    <div className="footer-link-wrapper">
                      <p className="footer-link-3">How to Use Data Tools</p>
                    </div>
                    <div className="footer-link-wrapper">
                      <div className="footer-link-3">Compare Data</div>
                    </div>
                    <div className="footer-link-wrapper">
                      <div className="footer-link-3">Data Maps</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="frame-47">
                <div className="column-2">
                  <div className="discover-2">
                    <div className="text-wrapper-62">New &amp; Resources</div>
                    <div className="footer-link-wrapper">
                      <p className="footer-link-3">News / Briefs / Fact Sheets</p>
                    </div>
                    <div className="footer-link-wrapper">
                      <div className="footer-link-3">Release Notes</div>
                    </div>
                    <div className="footer-link-wrapper">
                      <div className="footer-link-3">Tutorials</div>
                    </div>
                    <div className="footer-link-wrapper">
                      <div className="footer-link-3">Webinars</div>
                    </div>
                    <div className="footer-link-wrapper">
                      <div className="footer-link-3">FAQ</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="identifier-default-2">
              <div className="frame-48">
                <div className="frame-38">
                  <div className="frame-41">
                    <div className="text-wrapper-63">Accessibility support</div>
                  </div>
                  <div className="frame-41">
                    <div className="text-wrapper-63">FOIA requests</div>
                    <div className="text-wrapper-64">No FEAR Act data</div>
                  </div>
                  <div className="frame-41">
                    <p className="text-wrapper-63">Office of the Inspector General</p>
                    <div className="text-wrapper-64">Performance reports</div>
                  </div>
                  <div className="text-wrapper-63">Privacy Policy</div>
                </div>
                <p className="looking-for-u-s-2">
                  <span className="text-wrapper-65">
                    Looking for U.S. government information and services?&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                  <span className="text-wrapper-66">Visit USA.gov</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="p-wrapper">
          <p className="home-programs-center-2">Home&nbsp;&nbsp;&gt;&nbsp;&nbsp;Release Notes</p>
        </div>
        <div className="header-5">
          <div className="top-banner-4">
            <div className="banner-content-5">
              <img className="us-flag-small-5" alt="Us flag small" src="/img/us-flag-small.png" />
              <div className="content-6">
                <p className="text-wrapper-67">An official website of the United States government</p>
                <div className="here-s-how-you-know-4">
                  <div className="overlap-group-7">
                    <div className="text-wrapper-68">Here’s how you know</div>
                    <Icon38 className="icon-6" color="var(--colors-primary-primary)" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="top-menu-4">
          <div className="div-4 logo-img">
            <div className="nav-link-14">
                <div className="frame-49">
                  <img src="/img/logo.png" alt="" className="coverImg" />
                </div>
              </div>
              </div>
            <div className="div-4">
              <div className="nav-link-14">
                <div className="frame-49">
                  <div className="link-5">Help</div>
                </div>
              </div>
              <Link className="nav-link-14" to="/08">
                <div className="frame-49">
                  <div className="link-5">Contact</div>
                </div>
              </Link>
            </div>
          </div>
          <div className="logo-and-search-5">
            <div className="logo-block-2">
              <div className="AGID-title-2">
                <div className="aging-independence-2">Administration</div>
              </div>
            </div>
            <div className="spacer-2" />
            <div className="quick-search-5">
              <div className="text-wrapper-69">Quick Search</div>
              <Search6 className="search-3-instance" />
            </div>
          </div>
          <div className="main-menu-8">
            <Line4 className="line-instance" />
            <Line4 className="line-instance" />
            <div className="main-menu-8">
              <Line4 className="line-instance" />
              <Line4 className="line-instance" />
              <div className="main-menu-8">
                <Line4 className="line-instance" />
                <div className="main-menu-9">
                  <div className="menu-5">
                    <Link className="nav-link-15" to="/01-home-page">
                      <div className="frame-50">
                        <div className="section-7">Home</div>
                      </div>
                    </Link>
                    <Link className="nav-link-12" to="/06">
                      <div className="frame-35">
                        <div className="section-6">Release Notes</div>
                      </div>
                    </Link>
                    <div className="nav-link-15">
                      <div className="frame-50">
                        <div className="section-7">Search by Topics</div>
                        <Icon150 className="icon-1" color="#565C65" />
                      </div>
                    </div>
                    <Link className="nav-link-12" to="/05">
                      <div className="frame-35">
                        <div className="section-6">Data Sets</div>
                      </div>
                    </Link>
                    <Link className="nav-link-15" to="/07">
                      <div className="frame-50">
                        <div className="section-7">Data Explorer</div>
                      </div>
                    </Link>
                    <div className="nav-link-15">
                      <div className="frame-50">
                        <div className="section-7">Reports</div>
                        <Icon150 className="icon-1" color="#565C65" />
                      </div>
                    </div>
                    <Link className="nav-link-12" to="/09">
                      <div className="frame-35">
                        <div className="section-6">FAQ</div>
                      </div>
                    </Link>
                  </div>
                </div>
                <Line4 className="line-5-instance" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
